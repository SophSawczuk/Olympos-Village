import style from "../styles/Burger.module.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"
import { useState } from "react";
import { useEffect } from "react";


export default function Burger({ setOpen }) {
    const navigate = useNavigate();

    function closeMenu(e) {
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
        <div className={style.Container}>
            <ul>
                <li onClick={(e) => { navigate("/"); closeMenu(e) }}>{t("navbar.home")}</li>
                <li onClick={(e) => { navigate("/about"); closeMenu(e) }}>{t("navbar.about")}</li>
                <li onClick={(e) => { navigate("/rooms"); closeMenu(e) }}>{t("navbar.rooms")}</li>
                <li onClick={(e) => { navigate("/activities"); closeMenu(e) }}>{t("navbar.activities")}</li>
                <li onClick={(e) => { navigate("/restaurant"); closeMenu(e) }}>{t("navbar.restaurant")}</li>
                <li onClick={(e) => { navigate("/contact"); closeMenu(e) }}>{t("navbar.contact")}</li>
            </ul>
            <div className={style.Btn_Language} >
                <button onClick={() => changeLang("en")} >English</button>
                <button onClick={() => changeLang("tr")} className="m-2">Turkish</button>
            </div>
        </div>
    )
}

