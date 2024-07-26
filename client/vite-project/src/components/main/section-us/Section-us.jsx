import { useEffect } from "react"
import { useState } from "react"

import * as api from "../../api/api-links"
import SectionUsArticle from "./Section-us-article"
import styles from "./section-us-article.module.css"

export default function SectionUs() {
    const [request, setRequest] = useState([])
    const base = api.baseUrl

    useEffect(() => {
        (async () => {
            const getRequest = await fetch(`${base}/why-us`)
            const responseJson = await getRequest.json()
            const result = Object.values(responseJson)
            setRequest(result)
        })()
    }, [])



    return (
        < section className={styles.section} >

            <div className="heading_container">
                <h2>Why Choose Us</h2>
            </div>
            <div className={styles.us_container}>

                {request.map(data => <SectionUsArticle key={data._id} {...data} />
                )}





            </div>
        </section >

    )
}