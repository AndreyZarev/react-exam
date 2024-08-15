import { useNavigate } from "react-router-dom";

import style from "./home.module.css"
import SectionHealty from "../section-healty/SectionHealty"


export default function Home() {
    const navigate = useNavigate()
    function posts() {
        navigate("/why-us")
    }
    function trainers() {
        navigate("/trainers")
    }
    const YouTubeEmbed = () => {
        return (


            <iframe className={style.video} width="1036" height="583" src="https://www.youtube.com/embed/Yko3GMseY40" title="Sony A7IV Cinematic FITNESS VIDEO Featuring FE 16-35mm Power zoom - FE 4/PZ A7m4 Footage" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        );
    };

    return (
        <>
            <div className={style.videoContainer}>
                <div className={style.headers}>
                    <h3 className={style.first}>Fitness</h3>
                    <h2 className={style.second}>Training</h2>
                    <h1 className={style.third}>Neogym</h1>
                </div>


            </div>
            {YouTubeEmbed()}

            <section className={style.section}>

                <div className={style.divS}>


                    <SectionHealty />

                    <div className={style.buttonDiv}>
                        <button className={style.buttons} onClick={posts}>

                            Check Posts

                        </button>
                        <button className={style.buttons} onClick={trainers}>
                            Check Trainers

                        </button>
                    </div>



                </div>
            </section>

        </>
    )
}