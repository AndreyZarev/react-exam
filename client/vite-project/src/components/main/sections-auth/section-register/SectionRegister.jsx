import { useNavigate } from "react-router-dom";
import { useForm } from "../../../../hooks/useForm"
import { useRegister } from "../../../../hooks/useAuth";
import { useState } from "react";
import { AuthContext } from "../../../../contexts/Auth-context";
import { useContext } from "react";
import style from "../auth.module.css"

const initialValues = { email: '', password: '', rePassword: '' };

export default function SectionRegister() {

    const [error, setError] = useState("")
    const register = useRegister();
    const navigate = useNavigate();
    const headers = {
        'Content-Type': 'application/json',
    };

    const { accessToken } = useContext(AuthContext)


    if (accessToken) {
        headers['X-Authorization'] = accessToken;
    }


    const registerHandler = async (values) => {
        if (values.password !== values.rePassword) {

            return setError("Passwords do not match!")

        }


        try {
            await register(values.email, values.password, headers)

            navigate('/')
        } catch (err) {
            setError(err.message)
        }

    }


    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, registerHandler)

    return (
        <section className={style.section}>

            <div className="heading_container">
                <h2 className={style.title}>Register Form</h2>
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
                <label htmlFor="rePassword">Repeat Password:</label>
                <div>

                    <input
                        type="password"
                        name="rePassword"
                        className="rePassword"
                        value={values.rePassword}
                        onChange={changeHandler}

                    />
                </div>
                <div className="d-flex ">
                    <button className={style.sendBtn} >Send</button>
                </div>
            </form>

        </section>

    )
}