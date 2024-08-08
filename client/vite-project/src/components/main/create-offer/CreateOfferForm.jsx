import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";

import { useForm } from "../../../hooks/useForm"
import { create } from "../../../hooks/useFetch";
import { AuthContext } from "../../../contexts/Auth-context";

const initialValues = { img: '', name: "", text: '' };


export default function CreateOfferForm() {
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
                                    <h2>Create Offer</h2>
                                    <h4 className="errorMessage" style={{ color: "red" }}>{error}</h4>
                                </div>

                                <form className='login-form' onSubmit={submitHandler} >

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
                                        <button >Send</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>



    )
}