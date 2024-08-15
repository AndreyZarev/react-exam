import { Link } from "react-router-dom"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import style from "./trainers.module.css"
import { AuthContext } from "../../../../contexts/Auth-context"

export default function Trainers({
    img,
    _id,
    person,

}
) {
    const navigate = useNavigate()

    function login() {
        navigate("/login")
    }
    function register() {
        navigate("/register")
    }
    function trainers() {
        navigate(`/trainers/${_id}`)
    }
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
                    <button className={style.details} onClick={trainers}>

                        Details
                    </button>
                    :
                    (
                        <div className={style.btnDiv}>
                            <button className={style.details} onClick={login}>

                                Login
                            </button>

                            <button className={style.details} onClick={register}>


                                Register
                            </button>

                        </div>)
                }
            </div>



        </div>
    )
}