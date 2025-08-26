import style from "../styles/Restaurant.module.css"
import flag from "../images/turkey-flag.png"
import restaurant from "../images/restaurant.jpg"
import leaf from "../images/leaf.png"
import breakfast from "../images/breakfast.jpg"
import drinks from "../images/drinks.jpg"
import salad from "../images/salad.png"
import cubiertos from "../images/restaurant-logo.png"
import { useTranslation } from 'react-i18next'
import resto1 from "../images/resto1.jpeg"
import resto2 from "../images/resto2.jpeg"
import resto3 from "../images/resto3.jpeg"
import resto4 from "../images/resto4.jpeg"
import resto5 from "../images/resto5.jpeg"
import resto6 from "../images/resto6.jpeg"
import resto7 from "../images/resto7.jpeg"
import resto8 from "../images/resto8.jpeg"
import resto9 from "../images/resto9.jpeg"

export default function Restaurant() {
    const { t } = useTranslation()
    return (
        <div>
            <div className={style.Banner}>
                <h1>TIME CAFE</h1>
                <div className={style.Subtitle}>
                    <img src={flag} />
                    <h2>{t("restaurant.subtitle")}</h2>
                </div>
            </div>
            <div className={style.Restaurant}>
                <img src={resto1} alt="Restaurant in Olympos, Antyala" className={style.RestoImg} />
                <div className={style.WrapperRestaurant}>
                    <h4>{t("restaurant.about_subtitle")}</h4>
                    <h2>{t("restaurant.about_title_1")}</h2>
                    <h2>{t("restaurant.about_title_2")}</h2>
                    <p>{t("restaurant.description_1")}</p>
                    <p>{t("restaurant.description_2")}</p>
                    <p>{t("restaurant.description_3")}</p>
                    <a href={t("restaurant.menu")} target="_blank" rel="noopener noreferrer"><button>{t("restaurant.button")}</button></a>
                </div>
            </div>
            <div className={style.Attributes}>
                <div className={style.Attribute}>
                    <img src={salad} />
                    <h4>{t("restaurant.highlight_1_title")}</h4>
                    <p>{t("restaurant.highlight_1_subtitle")}</p>
                </div>
                <div className={style.Attribute}>
                    <img src={leaf} />
                    <h4>{t("restaurant.highlight_2_title")}</h4>
                    <p>{t("restaurant.highlight_1_subtitle")}</p>
                </div>
                <div className={style.Attribute}>
                    <img src={leaf} />
                    <h4>{t("restaurant.highlight_3_title")}</h4>
                    <p>{t("restaurant.highlight_1_subtitle")}</p>
                </div>
            </div>
            <div className={style.FoodImages}>
                <img src={resto2} />
                <img src={resto3} />
                <img src={resto4} />
                <img src={resto5} />
            </div>
            <div className={style.FoodImages}>
                <img src={resto6} />
                <img src={resto7} />
                <img src={resto8} />
                <img src={resto9} />
            </div>

        </div>
    )
}