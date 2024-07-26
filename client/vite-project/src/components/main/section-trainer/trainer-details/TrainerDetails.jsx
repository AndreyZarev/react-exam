

import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import "./trainers.css"
import * as api from "../../../api/api-links"

export default function TrainerDetails() {
    const base = api.baseUrl
    const { trainerid } = useParams()
    const [trainerDetails, setTrainerDetails] = useState({});

    useEffect(() => {
        (async () => {
            const response = await fetch(`${base}/trainers/${trainerid}`)


            const data = await response.json()

            const result = (Object.values(data))

            return setTrainerDetails(result)





        })()
    }, []);



    return (

        <div className="row-container">
            <div className="">


                <div className="name">
                    <h3>{trainerDetails[1]}</h3>
                </div>
                <div className="img-box">
                    <img src={trainerDetails[0]} alt="" />
                </div>
                <div className="phone">
                    <h5>Phone:</h5>
                    <p>{trainerDetails[2]}</p>
                </div>

                <div className="experience">
                    <h5>Experience:</h5>
                    <p>{trainerDetails[4]}</p>
                </div>
                <div className="achievements">
                    <h5>Achievements:</h5>
                    <p>{trainerDetails[5]}</p>
                </div>
                <button>

                    <Link to="/trainers" >
                        Back
                    </Link>                    </button>

            </div>




        </div>


    )
}