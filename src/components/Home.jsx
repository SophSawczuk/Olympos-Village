import style from "../styles/Home.module.css"
/* -------Images------- */
import hotel from "../images/hotel.jpg"
import accomodation from "../images/accommodation.jpg"
import village from "../images/the-village.jpg"
import doublebed from "../images/double-bed.png"
import restaurant from "../images/restaurant.jpg"
import kayak from "../images/kayak.jpg"
import hiking from "../images/hiking.jpg"
/* --------------------- */
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import resto from "../images/resto1.jpeg"

export default function Home() {
    const { t } = useTranslation()

    return (
        <div>
            <div className={style.Landing}>
                <h1 className={style.Title}>{t("home.landing_title")} </h1>
                <h1 className={style.Seo}>Likya Village</h1>
                <h2 className={style.Seo}>Likya Village - Luxury Hotel in Olympos, Antalya, Turkey</h2>
            </div>
            <div className={style.TheVillage}>
                <img src={hotel} alt="Hotel in Olympos, Antyala" className={style.Village} />
                <div className={style.WrapperVillage}>
                    <h4>{t("home.about_subtitle")}</h4>
                    <h2>{t("home.about_title")}</h2>
                    <p>{t("home.about_description")}</p>
                    <Link to="/about"><button>{t("home.about_btn")}</button></Link>
                </div>
            </div>
            <div className={style.Accommodation}>
                <div className={style.AccommodationImages}>
                    <img src={accomodation} />
                    <img src={village} />
                    <img src={doublebed} />
                    <h2>{t("home.accommodation_title")}</h2>
                    <Link to="/rooms"><button>{t("home.accommodation_btn")}</button></Link>
                </div>
            </div>
            <div className={style.Restaurant}>
                <img src={resto} alt="Restaurant in Olympos, Antyala" className={style.RestoImg} />
                <div className={style.WrapperRestaurant}>
                    <h4>{t("home.restaurant_subtitle")}</h4>
                    <h2>{t("home.restaurant_title_1")}</h2>
                    <h2>{t("home.restaurant_title_2")}</h2>
                    <p>{t("home.restaurant_description")}</p>
                    <Link to="/restaurant"><button>{t("home.restaurant_btn")}</button></Link>
                </div>
            </div>
            <div className={style.Activities}>
                <div className={style.WrapperActivities}>
                    <h4>{t("home.activities_subtitle")}</h4>
                    <h2>{t("home.activities_title_1")}</h2>
                    <h2>{t("home.activities_title_2")}</h2>
                    <p>{t("home.activities_description")}</p>
                    <Link to="/activities"><button>{t("home.activities_btn")}</button></Link>
                </div>
                <div className={style.ActivitiesImg}>
                    <img src={kayak} alt="Kayak in Olympos, Antyala" className={style.Kayak} />
                    <img src={hiking} alt="Hiking in Olympos, Antyala" className={style.Hiking} />
                </div>
            </div>
            <Link to="/contact"><div className={style.Contact}>
                <h2>{t("home.contact_title")}</h2>
                <p>{t("home.contact_subtitle")}</p>
            </div></Link>
        </div>
    )
}