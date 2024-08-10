

import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../../contexts/Auth-context";

import style from "./trainers-details.module.css"
import * as api from "../../../../api/api-links"

export default function TrainerDetails() {
    const base = api.baseUrl
    const { trainerid } = useParams()
    const navigate = useNavigate()
    const [trainerDetails, setTrainerDetails] = useState({});

    const headers = {
        'Content-Type': 'application/json',
    };

    const { accessToken } = useContext(AuthContext)

    const { email } = useContext(AuthContext)
    if (!email) {
        navigate("/trainers")
    }

    if (accessToken) {
        headers['X-Authorization'] = accessToken;
    }



    useEffect(() => {
        (async () => {
            const response = await fetch(`${base}/trainers/${trainerid}`)


            const data = await response.json()

            const result = (Object.values(data))
            console.log(result);
            return setTrainerDetails(result)





        })()
    }, []);

    function back() {
        navigate("/trainers")
    }


    return (
        <section className={style.section}>
            <div className={style.container}>
                <div className="heading-container">
                    <h2 className={style.title}>One of our Gym Trainers</h2>
                </div>

                <div className={style.row}>
                    <div className="">


                        <div className="name">
                            <h3 className={style.name}>{trainerDetails[1]}</h3>
                        </div>
                        <div className="img-box">
                            <img className={style.img} src={trainerDetails[0]} alt="" />
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


                        <button className={style.button} onClick={back}>


                            Back

                        </button>
                    </div>




                </div>
            </div>
        </section>

    )
}