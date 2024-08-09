import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from "./section-info.module.css";

export default function SectionInfo() {
    return (

        <div className={style.container}>


            <div className="item ">
                <div className="img-box box-1">
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" />

                    <p className={style.paragraph}>Location</p>
                </div>
            </div>


            <div className="item ">
                <div className="img-box box-2">
                    <img src="" alt="" />
                </div>
                <div className="detail-box">
                    <p className={style.paragraph}>+02 1234567890</p>
                </div>
            </div>

            <div className="item ">
                <div className="img-box box-3">
                    <img src="" alt="" />
                </div>
                <div className="detail-box">
                    <p className={style.paragraph}>demo@gmail.com</p>
                </div>
            </div>

        </div>



    )
}