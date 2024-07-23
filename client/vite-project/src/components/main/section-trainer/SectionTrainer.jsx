import { useEffect, useState } from "react"
import Trainers from "./trainers/Trainers";


export default function SectionTrainer() {
    const baseUrl = 'http://localhost:3030/jsonstore'

    const [trainers, setTrainers] = useState([]);

    useEffect(() => {

        (async () => {
            const response = await fetch(`${baseUrl}/phonebook`)
            const data = await response.json()
            const result = (Object.values(data))
            return setTrainers(result)





        })()
    }, []);



    return (

        <section className="trainer_section layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2>Our Gym Trainers</h2>
                </div>
                {trainers.map(trainer => <Trainers key={trainer._id} {...trainer} />
                )}

            </div>
        </section>

    )
}