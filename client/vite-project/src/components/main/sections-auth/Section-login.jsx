import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


import { useLogin } from '../../../hooks/useAuth';
import { useForm } from '../../../hooks/useForm';
import { useState } from 'react';
import { useContext } from "react";
import style from "./auth.module.css"
import { AuthContext } from "../../../contexts/Auth-context";




const initialValues = { email: '', password: '' }

export default function SectionLogin() {
    const [error, setError] = useState("")
    const login = useLogin();
    const navigate = useNavigate();
    const headers = {
        'Content-Type': 'application/json',
    };

    const { accessToken } = useContext(AuthContext)


    if (accessToken) {
        headers['X-Authorization'] = accessToken;
    }

    const loginHandler = async (values) => {
        try {
            await login(values.email, values.password, headers)
            navigate('/')
        } catch (err) {
            setError(err.message);
        }
    }

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, loginHandler)


    return (
        <section className={style.section}>

            <div className="heading_container">
                <h2 className={style.title}>Login Form</h2>
                <h4 className="errorMessage" style={{ color: "red" }}>{error}</h4>
            </div>
            <form className={style.form} onSubmit={submitHandler} >
                <label htmlFor="email">Email:</label>

                <div>
                    <input type="email"
                        name='email'
                        value={values.email}
                        onChange={changeHandler} />
                </div>
                <label htmlFor="password">Password:</label>

                <div>
                    <input
                        type="password"
                        name="password"
                        className="password"
                        value={values.password}
                        onChange={changeHandler}

                    />
                </div>
                <div >
                    <button className={style.sendBtn}>Send</button>
                </div>
            </form>
        </section>


    )
}