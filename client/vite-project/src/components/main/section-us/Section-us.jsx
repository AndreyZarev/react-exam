import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../contexts/Auth-context"

import * as api from "../../../api/api-links"
import SectionUsArticle from "./Section-us-article"
import style from "./section-us.module.css"

export default function SectionUs() {
    const [request, setRequest] = useState([])
    const dataUrl = api.dataUrl
    const baseUrl = api.baseUrl
    const isAuthenticated = useContext(AuthContext)
    const navigate = useNavigate()

    function register() {
        navigate("/register")
    }
    function createOffer() {
        navigate("/create-offer")
    }
    useEffect(() => {

        const fetchData = async () => {
            // try {
            // Fetching both requests simultaneously
            const [response1, response2] = await Promise.all([
                fetch(`${baseUrl}/why-us`),
                fetch(`${dataUrl}/why-us`),
            ]);

            if (response2.status !== 200) {
                console.log(response2.status);
                const data1 = await response1.json();
                const result1 = Object.values(data1)
                setRequest(result1)
            } else {

                // Parsing the JSON from the responses
                const data1 = await response1.json();
                const data2 = await response2.json();


                const result1 = Object.values(data1)
                const result2 = Object.values(data2)
                const mergedArrays = [...result1, ...result2]
                setRequest(mergedArrays)
            }

        };

        fetchData();

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