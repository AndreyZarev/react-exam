

import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function TrainerDetails() {
    const baseUrl = 'http://localhost:3030/jsonstore'
    const { trainerid } = useParams()
    const [trainerDetails, setTrainerDetails] = useState({});

    useEffect(() => {

        (async () => {
            const response = await fetch(`${baseUrl}/trainers/${trainerid}`)
            const data = await response.json()
            console.log(data);
            const result = (Object.values(data))
            return setTrainerDetails(result)





        })()
    }, []);



    return (
        <div className="row">
            <div className="col-lg-4 col-md-6 mx-auto">
                <div className="box">
                    <div className="name">
                        <h5>{trainerDetails.person}</h5>
                    </div>
                    <div className="img-box">
                        <img src="images/t1.jpg" alt="" />
                    </div>
                    <div className="social_box">
                        <p>{trainerDetails.phone}</p>
                    </div>
                    <button>

                        <Link to="/trainers/details:trainerid" >
                            Details
                        </Link>                    </button>
                </div>
            </div>


        </div>

    )
}