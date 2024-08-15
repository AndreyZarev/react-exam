import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../../../contexts/Auth-context";
import { useLogout } from "../../../../hooks/useAuth";

export default function Logout() {
    const navigate = useNavigate()
    const headers = {
        'Content-Type': 'application/json',
    };

    const { accessToken } = useContext(AuthContext)


    if (accessToken) {
        headers['X-Authorization'] = accessToken;
    }
    const logout = useLogout()
    useEffect(() => {

        (async (headers) => {
            logout(headers)
            navigate("/")
        })()

    }, [])



}