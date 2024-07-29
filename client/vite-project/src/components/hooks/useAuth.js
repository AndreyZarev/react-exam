import { useContext } from "react";

import { login } from "../api/api-links";
import { AuthContext } from "../contexts/Auth-context";


export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext)
    const loginHnadler = async (email, password) => {

        try {
            const result = await login(email, password);
            changeAuthState(result)
            console.log(result);
        } catch (err) {
            console.log(err);
        }

    }
    return loginHnadler;

}