import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import Trainers from "./trainers/Trainers";

import "./trainer-section.css"
export default function SectionTrainer() {
    const baseUrl = 'http://localhost:3030/jsonstore'

    const [trainers, setTrainers] = useState([]);

    useEffect(() => {

        (async () => {
            const response = await fetch(`${baseUrl}/trainers`)
            const data = await response.json()
            const result = (Object.values(data))


            return setTrainers(result)





        })()
    }, []);



    return (
        <><div className="videoContainer">
            <div className="headers">
                <h2 className="h2">Our Gym Trainers</h2>
            </div>


        </div>
            <section className="trainer-section">

                <div className="flex-container">
                    {trainers.map(trainer => <Trainers key={trainer._id} {...trainer} />
                    )}
                </div>


            </section>
        </>
    )
}