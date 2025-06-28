import style from "../styles/Burger.module.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function Burger({setOpen}) {
    const navigate = useNavigate();

    function closeMenu(e) {
        e.preventDefault()
        setOpen(false)
    }
    return(
        <div className={style.Container}>
            <ul>
                <li onClick={(e) => {navigate("/"); closeMenu(e)}}>Home</li>
                <li onClick={(e) => {navigate("/about"); closeMenu(e)}}>Olympos Village</li>
                <li onClick={(e) => {navigate("/rooms"); closeMenu(e)}}>Accommodation</li>
                <li onClick={(e) => {navigate("/activities"); closeMenu(e)}}>Activities & Adventure</li>
                <li onClick={(e) => {navigate("/restaurant"); closeMenu(e)}}>Restaurant</li>
                <li onClick={(e) => {navigate("/contact"); closeMenu(e)}}>Contact</li>
            </ul>
        </div>
    )
}

