
import { createContext, useState } from "react";


export const AuthContext = createContext({
    userId: "",
    email: "",
    accessToken: "",
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
    logout: () => null
})


export function AuthContextProvider(props) {
    const [authState, setAuthState] = useState({})

    const changeAuthState = (state) => {

        localStorage.setItem('accessToken', state.accessToken)
        localStorage.setItem("email", state.email)
        setAuthState(state)
    };

    const logout = () => {
        setAuthState(null)
        localStorage.removeItem('accessToken')
        localStorage.removeItem('email')
    }
    const contextData = {
        userId: authState?.userId,
        email: authState?.email,
        accessToken: authState?.accessToken,
        isAuthenticated: !!authState?.email,
        changeAuthState,
        logout
    }
    return (
        <AuthContext.Provider value={contextData}>

            {props.children}
        </AuthContext.Provider>
    )

}

