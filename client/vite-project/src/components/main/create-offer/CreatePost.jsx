import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";

import { useForm } from "../../../hooks/useForm"
import { create } from "../../../hooks/useFetch";
import { AuthContext } from "../../../contexts/Auth-context";
import style from "./create-post.module.css"
const initialValues = { img: '', name: "", text: '' };


export default function CreatePost() {
    const { isAuthenticated } = useContext(AuthContext)
    const { email } = useContext(AuthContext)
    const { accessToken } = useContext(AuthContext)
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const headers = {
        'Content-Type': 'application/json',
    };




    if (accessToken) {
        headers['X-Authorization'] = accessToken;
    }



    if (!isAuthenticated) {
        navigate("/login")
    }
    async function createFunction(values) {

        try {
            await create(values.img, values.title, values.text, email, headers)
            navigate('/why-us')
        } catch (err) {
            setError(err.message);
        }


    }


    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, createFunction)


    return (

        <>
            <section className={style.section}>

                <div className="heading_container">
                    <h2 className={style.title}>Create Offer</h2>
                    <h4 className="errorMessage" style={{ color: "red" }}>{error}</h4>
                </div>

                <form className={style.form} onSubmit={submitHandler} >

                    <label htmlFor="img">Image:</label>

                    <div>
                        <input type="text"
                            name='img'
                            value={values.img}
                            onChange={changeHandler} />
                    </div>
                    <label htmlFor="title">Title:</label>

                    <div>
                        <input
                            type="text"
                            name="title"

                            className="title"
                            value={values.title}
                            onChange={changeHandler}

                        />
                    </div>

                    <label htmlFor="text">Text:</label>
                    <div>

                        <input
                            type="text"
                            name="text"
                            className="text"
                            value={values.text}
                            onChange={changeHandler}

                        />
                    </div>
                    <div className="d-flex ">
                        <button className={style.sendBtn}>Send</button>
                    </div>
                </form>


            </section>
        </>



    )
}