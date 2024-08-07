import { Link } from "react-router-dom"
import { useContext } from "react"

import { AuthContext } from "../../../../contexts/Auth-context"
import "../trainer-details/trainers.css"
export default function Trainers({
    img,
    _id,
    person,
    phone
}
) {

    const { isAuthenticated } = useContext(AuthContext)
    return (

        <div className="row">

            <div className="box">
                <div className="name">
                    <h5>{person}</h5>
                </div>
                <div className="img-box">
                    <img className="img" src={img} alt="" />
                </div>
                <div className="social_box">
                    <p>{phone}</p>
                </div>

                {isAuthenticated
                    ?
                    <button>

                        <Link to={`/trainers/${_id}`} >
                            Details
                        </Link>
                    </button>
                    :
                    (
                        <div>
                            <button>

                                <Link to={`/login`} >
                                    Login
                                </Link>
                            </button>

                            <button>

                                <Link to={`/register`} >
                                    Register
                                </Link>
                            </button>

                        </div>)
                }
            </div>



        </div>
    )
}