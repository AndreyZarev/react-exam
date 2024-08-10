
import { Link } from "react-router-dom"

import style from "./home.module.css"


export default function Home() {

    return (
        <>
            <section className={style.section}>
                <div>
                    <img className={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjC0G8utN-kFNn02UGU_Awv1tvTYwn0ipbmw&s" alt="" />
                </div>
                <div className={style.text}>

                    <h3>Fitness</h3>
                    <h2>Training</h2>
                    <h1>Neogym</h1>
                    <p className={style.textP}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse .
                    </p>
                    <div className="">
                        <button>

                            <Link to="/why-us">Check Posts</Link>

                        </button>
                        <button>
                            <Link to="/trainers">Check Trainers</Link>

                        </button>
                    </div>


                </div>


            </section>

        </>
    )
}