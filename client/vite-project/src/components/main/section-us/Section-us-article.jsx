import { Link } from "react-router-dom"

import styles from "./section-us-article.module.css"
export default function SectionUsArticle({
    img,
    title,
    text,
    _id
}
) {
    return (

        < div className={styles.row} >

            <div className="img-box">
                <img src={img} alt="" />
            </div>
            <div className="detail-box">
                <h5>{title}</h5>
                <p>
                    {text}
                </p>
            </div>
        </div>


    )
}