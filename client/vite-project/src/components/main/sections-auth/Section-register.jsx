import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { useRegister } from "../../hooks/useAuth";
import { useState } from "react";

const initialValues = { email: '', password: '', rePassword: '' };

export default function SectionRegister() {
    const [error, setError] = useState("")
    const register = useRegister();
    const navigate = useNavigate();



    const registerHandler = async (values) => {
        if (values.password !== values.rePassword) {

            return setError("Passwords do not match!")

        }


        try {
            await register(values.email, values.password)

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
        <section className="contact_section ">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 px-0">
                        <div className="img-box">
                            <img src="images/contact-img.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <div className="form_container pr-0 pr-lg-5 mr-0 mr-lg-2">
                            <div className="heading_container">
                                <h2>Register</h2>
                                <h4 className="errorMessage" style={{ color: "red" }}>{error}</h4>
                            </div>
                            <form className='login-form' onSubmit={submitHandler} >
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
                                    <button >Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}