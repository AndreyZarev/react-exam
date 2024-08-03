import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"



import { AuthContext } from "../../contexts/Auth-context"
import * as api from "../../api/api-links"
import SectionUsArticle from "./Section-us-article"
import style from "./section-us.module.css"

export default function SectionUs() {
    const [request, setRequest] = useState([])
    const base = api.baseUrl
    const { isAuthenticated } = useContext(AuthContext)
    const navigate = useNavigate()

    function register() {
        navigate("/register")
    }
    function createOffer() {
        navigate("/create-offer")
    }
    useEffect(() => {
        (async () => {
            const getRequest = await fetch(`${base}/why-us`)
            const responseJson = await getRequest.json()
            const result = Object.values(responseJson)
            setRequest(result)
        })()
    }, [])



    return (
        < section className={style.section} >

            <div className="heading_container">
                <h2>Why Choose Us</h2>
            </div>
            <div className={style.us_container}>

                {request.map(data => <SectionUsArticle key={data._id} {...data} />
                )}


            </div>

            {isAuthenticated
                ? (

                    <button onClick={createOffer}>Create Post</button>
                )
                : (
                    <button onClick={register}>Register</button>
                )

            }
        </section >

    )
}