
import style from "./section-info.module.css";

export default function SectionInfo() {
    return (

        <div className={style.container}>


            <div className="item ">
                <div className="img-box box-1">


                    <p className={style.paragraph}>Location: <span className={style.span}>3044 Shepherd Street, Branson, MO, Zip Code: 65616</span></p>
                </div>
            </div>


            <div className="item ">
                <div className="img-box box-2">
                    <img src="" alt="" />
                </div>
                <div className="detail-box">
                    <p className={style.paragraph}>Phone number: <span className={style.span}>+02 1234567890</span></p>
                </div>
            </div>

            <div className="item ">
                <div className="img-box box-3">
                    <img src="" alt="" />
                </div>
                <div className="detail-box">
                    <p className={style.paragraph}>Email address: <span className={style.span}>demo@gmail.com</span></p>
                </div>
            </div>

        </div>



    )
}