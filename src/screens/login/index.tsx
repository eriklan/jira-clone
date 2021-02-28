import { FormEvent } from "react"

interface Base {
    id: number
}

const apiUrl = process.env.REACT_APP_API_URL

export const LoginScreen = () => {

    const login = (param:{username: string, password: string}) => {
        fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(
            async response => {
                if(response.ok) {
                }
        })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        login({username, password})
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" id={'username'} />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id={'username'} />
        </div>
        <button type={"submit"}>Login</button>
    </form>
}