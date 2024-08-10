
import { NavLink, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth-context"
import "./header.css"







export default function Header() {

    const { isAuthenticated } = useContext(AuthContext)

    return (
        <>


            <header>
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <Link className="link" to="/">
                        <span>Neogym</span>
                    </Link>

                    <div className="navigation">
                        <ul className="navbar-nav  ">
                            <li className="nav-item home">

                                <NavLink className="nav-link "
                                    style={
                                        ({ isActive }) => isActive ? { "borderBottom": "solid red 3px" } : {}
                                    }
                                    to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item why-us">
                                <NavLink className="nav-link"
                                    style={
                                        ({ isActive }) => isActive ? { "borderBottom": "solid red 3px" } : {}
                                    }
                                    to="/why-us">
                                    Why Us
                                </NavLink>
                            </li>
                            <li className="nav-item trainers" >
                                <NavLink className="nav-link"
                                    style={
                                        ({ isActive }) => isActive ? { "borderBottom": "solid red 3px" } : {}
                                    }
                                    to="/trainers">
                                    Trainers
                                </NavLink>
                            </li>
                            {isAuthenticated
                                ? (
                                    <>
                                        <li className="nav-item create">
                                            <NavLink className="nav-link"
                                                style={
                                                    ({ isActive }) => isActive ? { "borderBottom": "solid red 3px" } : {}
                                                }
                                                to="/create-post">
                                                Create Post
                                            </NavLink>
                                        </li>
                                        <li className="nav-item logout">
                                            <Link className="nav-link"

                                                to="/logout">
                                                Logout
                                            </Link>
                                        </li>



                                    </>
                                )
                                : (
                                    <>
                                        <li className="nav-item login">
                                            <NavLink className="nav-link"
                                                style={
                                                    ({ isActive }) => isActive ? { "borderBottom": "solid red 3px" } : {}
                                                }
                                                to="/login">
                                                Login
                                            </NavLink>
                                        </li>
                                        <li className="nav-item register">
                                            <NavLink className="nav-link"
                                                style={
                                                    ({ isActive }) => isActive ? { "borderBottom": "solid red 3px" } : {}
                                                }
                                                to="/register">
                                                Register
                                            </NavLink>
                                        </li>
                                    </>
                                )
                            }



                        </ul>

                    </div>
                </nav>



            </header>
        </>



    )
}