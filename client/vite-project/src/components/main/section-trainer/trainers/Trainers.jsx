import { Link } from "react-router-dom"
import { useContext } from "react"

import style from "./trainers.module.css"
import { AuthContext } from "../../../../contexts/Auth-context"

export default function Trainers({
    img,
    _id,
    person,
    phone
}
) {

    const { isAuthenticated } = useContext(AuthContext)
    return (

        <div className={style.row}>

            <div className={style.box}>
                <div className="name">
                    <h2 className={style.name}>{person}</h2>
                </div>
                <div className="img-box">
                    <img className={style.img} src={img} alt="" />
                </div>

                {isAuthenticated
                    ?
                    <button className={style.details}>

                        <Link to={`/trainers/${_id}`} >
                            Details
                        </Link>
                    </button>
                    :
                    (
                        <div className={style.btnDiv}>
                            <button className={style.details}>

                                <Link to={`/login`} >
                                    Login
                                </Link>
                            </button>

                            <button className={style.details}>

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