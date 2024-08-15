import SectionInfo from "../main/section-info/SectionInfo"
import style from "./footer.module.css"
export default function SectionFooter() {
    return (
        <footer className={style.footer}>
            <SectionInfo />

            <p className={style.copyRight}>
                © 2024 React Project All Rights Reserved.
            </p>
        </footer>

    )
}