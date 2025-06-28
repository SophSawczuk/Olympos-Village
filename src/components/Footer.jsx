import style from "../styles/Footer.module.css"
import { Link } from "react-router-dom"
import logo from "../images/logo-navbar.png"

export default function Footer() {
    return(
        <div className={style.Wrapper}>
            <img src={logo} className={style.Logo}/>
            <div className={style.WrapperNavbar}>

          
            <ul className={style.NavBar}>
                <Link to={"/"}><li className={style.NavBar}>Home</li></Link>
                <Link to={"/about"} ><li className={style.NavBar}>Olympos Village</li></Link>
                <Link to={"/rooms"}><li className={style.NavBar}>Accommodation</li></Link>
                <Link to={"/activities"}><li className={style.NavBar}>Activities & Adventure</li></Link>
                <Link to={"/restaurant"}><li className={style.NavBar}>Restaurant</li></Link>
                <Link to={"/contact"}><li className={style.NavBar}>Contact</li></Link>
            </ul>
              </div>
            <hr className={style.Divisor}/>
            <div>
                <div className={style.Address}>
                    <h2>Address</h2>
                    <div>
                    <p>Distrito de Yazır Churchside </p>
                    <p>Street No:147/1, 07150 Olympos,</p>
                    <p>Kumluca/Antalya</p>
                    </div>
                    <div>
                        <img/>
                        <img/>
                    </div>
                </div>
                <div className={style.Contact}>

                </div>
                <div className={style.Book}>

                </div>
            </div>
            <hr/>
            <div>
                <p>Copyright</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    )
}