

import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { likes } from "../../../../hooks/useFetch";
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
            return setTrainerDetails(result)





        })()
    }, []);

    function back() {
        navigate("/trainers")
    }
    async function like() {
        let like = Number(trainerDetails[6])
        if (trainerDetails[7].hasOwnProperty(email)) {
            like -= 1
        } else {
            like += 1
        }
        const data = await likes(trainerDetails[0], trainerDetails[1], trainerDetails[2], trainerDetails[3],

            trainerDetails[4], trainerDetails[5], like, email, headers, trainerid)




        const result = (Object.values(data))
        return setTrainerDetails(result)

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

                        <img className={style.img} src={trainerDetails[0]} alt="" />

                        <div className="phone">
                            <h3>Phone:</h3>
                            <p>{trainerDetails[2]}</p>
                        </div>

                        <div className="experience">
                            <h3>Experience:</h3>
                            <p>{trainerDetails[4]}</p>
                        </div>
                        <div className="achievements">
                            <h3>Achievements:</h3>
                            <p>{trainerDetails[5]}</p>
                        </div>
                        <div className="likes">
                            <h3>Likes:
                                <span> {trainerDetails[6]}</span>
                            </h3>
                        </div>


                        <button className={style.button} onClick={like}>


                            Like

                        </button>
                        <button className={style.button} onClick={back}>


                            Back

                        </button>
                    </div>




                </div>
            </div>
        </section>

    )
}