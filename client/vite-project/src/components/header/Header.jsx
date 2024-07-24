
import { NavLink } from "react-router-dom"
const baseUrl = "http://localhost:3030/jsonstore"

export default function Header() {

    return (
        <>

            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="keywords" content="" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <title>Neogym</title>
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap"
                rel="stylesheet"
            />


            <header>
                <div className="hero_area">
                    <header className="header_section">
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-lg custom_nav-container ">
                                <a className="navbar-brand" href="index.html">
                                    <span>Neogym</span>
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                        <ul className="navbar-nav  ">
                                            <li className="nav-item active">

                                                <NavLink className="nav-link"
                                                    style={
                                                        ({ isActive }) => isActive ? { "borderBottom": "solid red 3px" } : {}
                                                    }
                                                    to="/">
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li className="nav-item ">
                                                <NavLink className="nav-link"
                                                    style={
                                                        ({ isActive }) => isActive ? { "borderBottom": "solid red 3px" } : {}
                                                    }
                                                    to="/why-us">
                                                    Why Us
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link"
                                                    style={
                                                        ({ isActive }) => isActive ? { "borderBottom": "solid red 3px" } : {}
                                                    }
                                                    to="/trainers">
                                                    Trainers
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link"
                                                    style={
                                                        ({ isActive }) => isActive ? { "borderBottom": "solid red 3px" } : {}
                                                    }
                                                    to="/contact-us">
                                                    Contact Us
                                                </NavLink>
                                            </li>
                                        </ul>
                                        <div className="user_option">
                                            <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                                                <button
                                                    className="btn  my-2 my-sm-0 nav_search-btn"
                                                    type="submit"
                                                ></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </header>

                </div>
            </header>

        </>



    )
}