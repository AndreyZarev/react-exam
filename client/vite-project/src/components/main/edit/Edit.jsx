

import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as api from "../../../api/api-links"
import { useForm } from "../../../hooks/useForm"
import { update } from "../../../hooks/useFetch";
import { AuthContext } from "../../../contexts/Auth-context";
import style from "./edit.module.css"

export default function Edit() {
    const dataUrl = api.dataUrl;
    const { postid } = useParams();
    const [postDetails, setPostDetails] = useState(null);
    const { isAuthenticated, email, accessToken } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const headers = {
        'Content-Type': 'application/json',
    };

    if (accessToken) {
        headers['X-Authorization'] = accessToken;
    }



    useEffect(() => {
        (async () => {
            try {

                const response = await fetch(`${dataUrl}/why-us/${postid}`, { headers });
                const data = await response.json();
                setPostDetails(data);
            } catch (err) {
                console.error("Failed to fetch post details:", err);
            }
        })();

        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);

    const updateFunction = async (values) => {
        try {
            await update(values.img, values.title, values.text, email, headers, postid);
            navigate(`/why-us`);
        } catch (err) {
            setError(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(postDetails || { img: "", title: "", text: "" }, updateFunction);

    if (!postDetails) {
        return <div className={style.loading}>Loading...</div>;
    }

    return (
        <section className={style.section}>

            <div className="heading_container">
                <h2 className={style.title}>Edit Post</h2>
                <h4 className="errorMessage" style={{ color: "red" }}>{error}</h4>
            </div>

            <form className={style.form} onSubmit={submitHandler}>
                <label htmlFor="img">Image:</label>
                <div>
                    <input
                        type="text"
                        name='img'
                        value={values.img || ""}
                        onChange={changeHandler}
                    />
                </div>
                <label htmlFor="title">Name:</label>
                <div>
                    <input
                        type="text"
                        name="title"
                        className="title"
                        value={values.title || ""}
                        onChange={changeHandler}
                    />
                </div>
                <label htmlFor="text">Text:</label>
                <div>
                    <input
                        type="text"
                        name="text"
                        className="text"
                        value={values.text || ""}
                        onChange={changeHandler}
                    />
                </div>
                <div className="d-flex">
                    <button className={style.sendBtn} type="submit">Send</button>
                </div>
            </form>

        </section>
    );
}