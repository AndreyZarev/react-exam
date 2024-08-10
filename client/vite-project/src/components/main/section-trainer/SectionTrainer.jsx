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

        <section className="trainer-section">
            <div className="heading-container">
                <h2 className="ourGym">Our Gym Trainers</h2>
            </div>
            <div className="flex-container">
                {trainers.map(trainer => <Trainers key={trainer._id} {...trainer} />
                )}
            </div>


        </section>

    )
}