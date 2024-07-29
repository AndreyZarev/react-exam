import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


import { useLogin } from '../../hooks/useAuth';
import { useFrom } from '../../hooks/useForm';




export default function SectionLogin() {
    const login = useLogin();
    const navigate = useNavigate();
    const { values, changeHandler, submitHandler } = useFrom(
        { email: '', password: '' },
        async (email, password) => {
            try {
                login(email, password)
                navigate('/')
            } catch (err) {
                console.log(err.message);
            }
        }

    )

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
                                <h2>Login</h2>
                            </div>
                            <form className='login-form' onSubmit={submitHandler} >

                                <div>
                                    <input type="email"
                                        name='email'
                                        value={values.email}
                                        onChange={changeHandler} />
                                </div>

                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        className="password"
                                        value={values.password}
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