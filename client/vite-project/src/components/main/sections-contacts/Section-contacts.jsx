export default function SectionContacts() {
    return (
        <section classname="contact_section ">
            <div classname="container-fluid">
                <div classname="row">
                    <div classname="col-md-6 px-0">
                        <div classname="img-box">
                            <img src="images/contact-img.jpg" alt="" />
                        </div>
                    </div>
                    <div classname="col-lg-5 col-md-6">
                        <div classname="form_container pr-0 pr-lg-5 mr-0 mr-lg-2">
                            <div classname="heading_container">
                                <h2>Contact Us</h2>
                            </div>
                            <form action="">
                                <div>
                                    <input type="text" placeholder="Name" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Phone Number" />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        classname="message-box"
                                        placeholder="Message"
                                    />
                                </div>
                                <div classname="d-flex ">
                                    <button>Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}