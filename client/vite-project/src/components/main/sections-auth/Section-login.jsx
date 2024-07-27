import { useEffect } from 'react'

import { login } from '../../api/api-links'



async function loginHandler(email, password) {




    const result = await login(email, password)

}

export default function SectionLogin() {
    const email = ""
    const password = ""

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
                                <h2>Contact Us</h2>
                            </div>
                            <form action="" onSubmit={loginHandler(email, password)}>

                                <div>
                                    <input type="email" placeholder="Email"
                                        name={email.value} />
                                </div>

                                <div>
                                    <input
                                        type="password"
                                        className="password"
                                        name={password.value}

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