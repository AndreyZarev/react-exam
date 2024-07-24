import { Link } from "react-router-dom"

import "../trainer-details/trainers.css"
export default function Trainers({
    img,
    _id,
    person,
    phone
}
) {
    return (

        <div className="row">

            <div className="box">
                <div className="name">
                    <h5>{person}</h5>
                </div>
                <div className="img-box">
                    <img src={img} alt="" />
                </div>
                <div className="social_box">
                    <p>{phone}</p>
                </div>
                <button>

                    <Link to={`/trainers/${_id}`} >
                        Details
                    </Link>                    </button>
            </div>



        </div>
    )
}