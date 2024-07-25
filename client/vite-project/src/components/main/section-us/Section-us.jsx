import { useEffect } from "react"
import { useState } from "react"

import * as api from "../../api/api-links"


export default function SectionUs() {
    const [request, setRequest] = useState([])
    const base = api.baseUrl

    useEffect(() => {
        (async () => {
            const getRequest = await fetch(`${base}/why-us`)
            const responseJson = await getRequest.json()
            console.log(responseJson)

            setRequest((Object.values(responseJson)))
        })()
    }, [])

    console.log(request)


    return (
        < section className="us_section layout_padding" >
            <div className="container">
                <div className="heading_container">
                    <h2>Why Choose Us</h2>
                </div>
                <div className="us_container ">

                    {request.map(data => {

                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={data.img} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>{data.title}</h5>
                                        <p>
                                            {data.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    })}


                </div>
            </div>
        </section >

    )
}