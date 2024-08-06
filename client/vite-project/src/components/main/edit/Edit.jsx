import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import * as api from "../../../api/api-links"
import { useForm } from "../../../hooks/useForm"
import { create } from "../../../hooks/useFetch";
import { AuthContext } from "../../../contexts/Auth-context";




export default function Edit() {

    const dataUrl = api.dataUrl
    const { postid } = useParams()
    const [postDetails, setPostDetails] = useState({});
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

    useEffect(() => {
        (async () => {
            const response = await fetch(`${dataUrl}/why-us/${postid}`)


            const data = await response.json()

            // const result = (Object.values(data))
            console.log(data);
            return setPostDetails(data)





        })()
    }, []);
    console.log(postDetails);

    const initialValues = { img: postDetails?.img, title: postDetails?.title, text: postDetails?.text }


    console.log(initialValues);
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
                                    <h2>Edit Post</h2>
                                    <h4 className="errorMessage" style={{ color: "red" }}>{error}</h4>
                                </div>

                                <form className='login-form' onSubmit={submitHandler} >

                                    <label htmlFor="img">Image:</label>

                                    <div>
                                        <input type="text"
                                            name='img'
                                            value={initialValues.img}
                                            onChange={changeHandler} />
                                    </div>
                                    <label htmlFor="title">Name:</label>

                                    <div>
                                        <input
                                            type="text"
                                            name="title"

                                            className="title"
                                            value={initialValues.title}
                                            onChange={changeHandler}

                                        />
                                    </div>

                                    <label htmlFor="text">Text:</label>
                                    <div>

                                        <input
                                            type="text"
                                            name="text"
                                            className="text"
                                            value={initialValues.text}
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