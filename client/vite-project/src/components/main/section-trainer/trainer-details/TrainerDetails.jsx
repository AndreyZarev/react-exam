

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
            try {
                const response = await fetch(`${base}/trainers/${trainerid}`)

                if (!response.ok) {
                    console.log("error from test implement");
                    return
                }
                const data = await response.json()

                const result = (Object.values(data))

                return setTrainerDetails(result)

            } catch (err) {
                console.log(err.message);

            }



        })()
    }, []);
    function back() {
        navigate("/trainers")
    }
    let userEmails = ''
    let convertedUsers = []
    let isLiked = "notLiked"

    async function like() {
        let like = Number(trainerDetails[6])

        if (trainerDetails[7]?.length === 0) {
            like += 1
            convertedUsers.push(email)
            isLiked = "liked"
        } else {
            convertedUsers = trainerDetails[7]

            userEmails = convertedUsers?.find(userEmail => userEmail === email)
            if (userEmails) {
                like -= 1
                convertedUsers = convertedUsers.filter(user => user !== userEmails)


                isLiked = "notLiked"


            } else {
                like += 1
                convertedUsers?.push(email)
                isLiked = "liked"
            }
        }



        try {


            const data = await likes(trainerDetails[0], trainerDetails[1], trainerDetails[2], trainerDetails[3],

                trainerDetails[4], trainerDetails[5], like, convertedUsers, isLiked, headers, trainerid)




            const result = (Object.values(data))
            return setTrainerDetails(result)
        }
        catch (err) {
            console.log(err);


        }
    }


    return (
        <><div className={style.videoContainer}>
            <div className={style.headers}>
                <h2 className={style.h2}>One of our Gym Trainers</h2>
            </div>


        </div>
            <section className={style.section}>
                <div className={style.container}>


                    <div className={style.row}>
                        <div className="">


                            <div className="name">
                                <h3 className={style.name}>{trainerDetails[1]}</h3>
                            </div>

                            <img className={style.img} src={trainerDetails[0]} alt="" />

                            <div className="phone">
                                <h3 className={style.h3}>Phone: <span className={style.text}>{trainerDetails[2]}</span>

                                </h3>
                            </div>

                            <div className="experience">
                                <h3 className={style.h3}>Experience:</h3>
                                <p className={style.text} >{trainerDetails[4]}</p>
                            </div>
                            <div className="achievements">
                                <h3 className={style.h3}>Achievements:</h3>
                                <p className={style.text}>{trainerDetails[5]}</p>
                            </div>
                            <div className="likes">
                                <h3 className={style.h3}>Likes:
                                    <span className={style.text}> {trainerDetails[6]}</span>
                                </h3>
                            </div>

                            <div className={style.buttonDiv}>
                                {
                                    trainerDetails[8] === "liked" ?

                                        <button className={style.button} onClick={like}>
                                            Unlike

                                        </button>

                                        :

                                        <button className={style.button} onClick={like}>
                                            Like

                                        </button>
                                }




                                <button className={style.button} onClick={back}>


                                    Back

                                </button>
                            </div>
                        </div>




                    </div>
                </div>
            </section>
        </>
    )
}