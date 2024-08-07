// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { useParams } from "react-router-dom";
// import { AuthContext } from "../../../contexts/Auth-context";
// import { deleteP } from "../../../hooks/useFetch";

// export default  function DeletePost() {
//     const { postid } = useParams();
//     const navigate = useNavigate()
//     const headers = {
//         'Content-Type': 'application/json',
//     };

//     const { accessToken } = useContext(AuthContext)


//     if (accessToken) {
//         headers['X-Authorization'] = accessToken;
//     }
// export default async function DeletePost
//     await deleteP(headers, postid)
//     navigate("/why-us")
// }