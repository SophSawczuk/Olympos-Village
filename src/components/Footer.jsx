import style from "../styles/Footer.module.css"
import { Link } from "react-router-dom"
import logo from "../images/logo-navbar.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation()
    return (
        <div className={style.Wrapper}>
            <img src={logo} className={style.Logo} />
            <div className={style.WrapperNavbar}>


                <ul className={style.NavBar}>
                    <Link to={"/"}><li className={style.NavBar}>{t("navbar.home")}</li></Link>
                    <Link to={"/about"} ><li className={style.NavBar}>{t("navbar.about")}</li></Link>
                    <Link to={"/rooms"}><li className={style.NavBar}>{t("navbar.rooms")}</li></Link>
                    <Link to={"/activities"}><li className={style.NavBar}>{t("navbar.activities")}</li></Link>
                    <Link to={"/restaurant"}><li className={style.NavBar}>{t("navbar.restaurant")}</li></Link>
                    <Link to={"/contact"}><li className={style.NavBar}>{t("navbar.contact")}</li></Link>
                </ul>
            </div>
            <hr className={style.Divisor} />
            <div className={style.Wrapper_Data}>
                <div className={style.Address}>
                    <h2>{t("footer.address")}</h2>
                    <div className={style.WrapperAddress}>
                        <p>Yazir Mahalesi Kilise Yakasi </p>
                        <p>Sokak 147/1, 07150 Olympos,</p>
                        <p>Kumluca/Antalya</p>
                    </div>
                    <div className={style.WrapperSocialMedia}>
                        <img src={facebook} />
                        <img src={instagram} />
                    </div>
                </div>
                <div className={style.Contact}>
                    <h2>{t("footer.contact")}</h2>
                    <div className={style.WrapperAddress}>
                        <p>P: +90 (242) 8921088</p>
                        <p>+90 (533) 6550606</p>
                        <p>E: info@likyavillage.com</p>
                    </div>
                </div>
                <div className={style.Book}>
                    <h2>{t("footer.book")}</h2>
                    <div>{t("footer.book_subtitle")}</div>
                    <Link to="/contact"><button>{t("footer.btn")}</button></Link>
                </div>
            </div>
            <hr className={style.Divisor} />
            <div className={style.Footer}>
                <p>Copyright</p>
                <p>{t("footer.privacy")}</p>
            </div>
        </div>
    )
}