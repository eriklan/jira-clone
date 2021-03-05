import React from 'react'
import { useAuth } from "context/authContext"
import { ProjectListScreen } from "screens/projectList"

export const AuthenticatedApp = () => {
    const {logout} = useAuth()
    return <div>
        <button onClick={logout}>Logout</button>
        <ProjectListScreen/>
    </div>
}