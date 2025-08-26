import style from "../styles/NavBar.module.css"
import Logo from "../images/logo-navbar.png"
import { Link } from "react-router-dom";
import Burger from "../assets/Burger";
import { useState } from "react";
import menu from "../images/menu.png"
import { useTranslation } from "react-i18next"
import { useEffect } from "react";


export default function NavBar() {

    const [open, setOpen] = useState(false)

    const menuClosed = <img src={menu} onClick={() => setOpen(!open)} className={style.Menu_Burger} />
    const menuOpen = <img src={menu} onClick={() => setOpen(!open)} className={style.Menu_Burger} />

    function closeMenuWithLogo(e) {
        e.preventDefault()
        setOpen(false)
    }


    const { t, i18n } = useTranslation()
    const changeLang = (lng) => {
        i18n.changeLanguage(lng)
    }
    const [lang, setLang] = useState(i18n.language || "en");

    const [language, setLanguage] = useState(true)
    useEffect(() => {
        i18n.on("languageChanged", (lng) => {
            setLang(lng);
        });
    }, []);



    return (
        <div className={style.Wrapper}>
            <div className={style.Logo}>
                <Link to="/"><img src={Logo} alt="Likya Village Logo" onClick={(e) => closeMenuWithLogo(e)} /></Link>
            </div>
            <div>
                <div className={style.NavBar}>
                    <ol className={style.List}>
                        <Link to="/"><li>{t("navbar.home")}</li></Link>
                        <Link to="/about"><li>{t("navbar.about")}</li></Link>
                        <Link to="/rooms"><li>{t("navbar.rooms")}</li></Link>
                        <Link to="/activities"><li>{t("navbar.activities")}</li></Link>
                        <Link to="/restaurant"><li>{t("navbar.restaurant")}</li></Link>
                        <Link to="/contact"><li>{t("navbar.contact")}</li></Link>
                    </ol>
                    <div className={style.Btn_Language} >
                        <button onClick={() => changeLang("en")} >English</button>
                        <button onClick={() => changeLang("tr")} className="m-2">Turkish</button>
                    </div>
                </div>

                <div className={style.Mobile}>
                    <div className={style.ContainerMobile}>
                        <div className={style.LogosWrapper}>
                            {open ? menuOpen : menuClosed}
                        </div>
                        {open && <Burger setOpen={setOpen} />}
                    </div>
                </div>
            </div>
        </div>


    )
}
