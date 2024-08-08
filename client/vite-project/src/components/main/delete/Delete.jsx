import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/Auth-context";
import { deleteP } from "../../../hooks/useFetch";

export default function DeletePost() {
    const { postid } = useParams();
    const navigate = useNavigate()
    const headers = {
        'Content-Type': 'application/json',
    };

    const { accessToken } = useContext(AuthContext)


    if (accessToken) {
        headers['X-Authorization'] = accessToken;
    }
    useEffect(() => {
        (async function deleteAndNav() {
            await deleteP(headers, postid)
            navigate("/why-us")
        })()

    }, [postid])

}
