import { Link } from "react-router-dom"
import { AuthContext } from "../../../contexts/Auth-context"
import { useNavigate } from "react-router-dom"
import styles from "./section-us-article.module.css"
import { useContext } from "react"
export default function SectionUsArticle({
    img,
    title,
    text,
    postEmail,
    _id
}
) {
    const navigate = useNavigate()

    const { email } = useContext(AuthContext)
    const headers = {
        'Content-Type': 'application/json',
    };

    const { accessToken } = useContext(AuthContext)


    if (accessToken) {
        headers['X-Authorization'] = accessToken;
    }

    let sameUser = false
    if (email === postEmail && email !== undefined) {
        sameUser = true
    }


    return (

        < div className={styles.row} >

            <div >
                <img className={styles.images} src={img} alt="" />
            </div>
            <div className={styles.details}>
                <h5>{title}</h5>
                <p>
                    {text}
                </p>
            </div>
            {sameUser &&
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={() => navigate(`/why-us/edit/${_id}`)}>Details</button>
                    <button className={styles.button} onClick={() => navigate(`/why-us/delete/${_id}`)}>Delete</button>
                </div>
            }
        </div>


    )
}