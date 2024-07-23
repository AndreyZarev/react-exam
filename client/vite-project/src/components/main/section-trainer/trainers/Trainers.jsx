import { Link } from "react-router-dom"

export default function Trainers({
    _id,
    person,
    phone
}
) {

    return (

        <div className="row">
            <div className="col-lg-4 col-md-6 mx-auto">
                <div className="box">
                    <div className="name">
                        <h5>{person}</h5>
                    </div>
                    <div className="img-box">
                        <img src="images/t1.jpg" alt="" />
                    </div>
                    <div className="social_box">
                        <p>{phone}</p>
                    </div>
                    <button>

                        <Link to="/trainers/details/trainerid" >
                            Details
                        </Link>                    </button>
                </div>
            </div>


        </div>
    )
}