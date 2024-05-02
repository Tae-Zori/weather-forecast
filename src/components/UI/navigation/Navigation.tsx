import React from "react"
import style from "./Navigation.module.scss"
import { Link} from "react-router-dom"
const Navigation = () => {
    return(
        <nav className={style.nav}>
            <ul className={style.nav__list}>
                <li className={style.nav__item}>
                    <Link to="/" className={style.nav__link}>Погода за окном</Link>
                </li>
                <li className={style.nav__item}>
                    <Link to="/weather" className={style.nav__link}>Погода в городе</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation