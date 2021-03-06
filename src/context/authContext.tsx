import React, {ReactNode, useState} from "react";
import * as auth from 'authProvider'
import {User} from "screens/projectList/searchPanel"

interface AuthForm {
    username: string,
    password: string
}

const AuthContext = React.createContext<
    |{
        user: User|null,
        register: (form: AuthForm) => Promise<void>,
        login: (form: AuthForm) => Promise<void>,
        logout: () => Promise<void>,
    } 
    | undefined 
    >(undefined)
AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({children} : {children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (form: AuthForm) => auth.login(form).then(setUser);
    const register = (form: AuthForm) => auth.login(form).then(setUser)
    const logout = () => auth.logout().then(() => setUser(null))

    return (
    <AuthContext.Provider 
    children={children} 
    value={{user, login, register, logout}} />
    )
}

export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used in AuthProvider')
    }
    return context
}