import style from "../styles/Activities.module.css"
import hiking from "../images/activities-hiking.png"
import antalya from "../images/ANTALYA.jpg"
import bike from "../images/bike.jpg"
import kayak from "../images/kayak.jpg"
import hiking2 from "../images/hiking.jpg"
import yoga from "../images/yoga.jpg"
import adventure from "../images/adventure.jpg"
import biking from "../images/activities-biking.png"
import yogalogo from "../images/activities-yoga.png"
import kayaklogo from "../images/activities-kayak.png"
import boat from "../images/activities-boat.png"
import three from "../images/activities-three.png"
import { useTranslation } from 'react-i18next'
import act1 from "../images/act1.jpeg"
import act2 from "../images/act2.jpeg"
import act3 from "../images/act3.jpeg"
import act4 from "../images/act4.jpeg"
import act5 from "../images/act5.jpeg"

export default function Activities() {
    const { t } = useTranslation()
    const activities = t("activities.tours", { returnObjects: true });
    return (
        <div className={style.Wrapper}>
            <div className={style.Banner}>
                <h1>{t("activities.title")}</h1>
            </div>
            <div className={style.Activities}>
                <div className={style.Card}>
                    <img src={hiking} />
                    <h4>{activities[0].title}</h4>
                    <p>{activities[0].description}</p>
                </div>
                <div className={style.Card}>
                    <img src={biking} />
                    <h4>{activities[1].title}</h4>
                    <p>{activities[1].description}</p>
                </div>


                <div className={style.Card}>
                    <img src={boat} />
                    <h4>{activities[2].title}</h4>
                    <p>{activities[2].description}</p>
                </div>

            </div>
            <div className={style.Wrapper_Nueva_Card}>
                <div className={style.Card_Kayak}>
                    <img src={kayaklogo} />
                    <h4>{activities[3].title}</h4>
                    <p>{activities[3].description}</p>
                </div>
                <div className={style.Nueva_Card}>
                    <h4>{t("activities.tours_title")}</h4>
                    <h4>{activities[4].title}</h4>
                    <p>{activities[4].description_1}</p>
                    <p>{activities[4].description_2}</p>
                    <p>{activities[4].description_3}</p>
                </div>
                <div className={style.Nueva_Card}>
                    <h4>{activities[5].title}</h4>
                    <p>{activities[5].description_1}</p>
                    <p>{activities[5].description_2}</p>
                </div>
                <div className={style.Nueva_Card}>
                    <h4>{activities[6].title}</h4>
                    <p>{activities[6].description_1}</p>
                    <p>{activities[6].description_2}</p>
                    <p>{activities[6].description_3}</p>
                    <p>{activities[6].description_4}</p>
                    <p>{activities[6].description_5}</p>
                    <p>{activities[6].description_6}</p>
                    <p>{activities[6].description_7}</p>
                </div>
            </div>
            <div className={style.Antalya}>
                <div className={style.WrapperAntalya}>
                    <h4>OLYMPOS, ANTALYA</h4>
                    <h2>{t("activities.about_1")}</h2>
                    <h2>{t("activities.about_2")}</h2>
                    <p>{t("activities.about_description")}</p>
                </div>
                <img src={antalya} className={style.AntalyaImg} />
            </div>

            <div className={style.WrapperImagenes}>
                <div className={style.Columna1}>
                    <img src={bike} className={style.ActivitieImg} />
                    <img src={kayak} className={style.ActivitieImg} />
                    <img src={act1} className={style.ActivitieImg} />
                    <img src={act2} className={style.ActivitieImg} />
                </div>
                <div className={style.Columna1}>
                    <img src={hiking2} className={style.ActivitieImg} />
                    <img src={yoga} className={style.ActivitieImg} />
                    <img src={act3} className={style.ActivitieImg} />
                    <img src={act5} className={style.ActivitieImg} />
                    <img src={act4} className={style.ActivitieImg} />
                </div>
            </div>

            <img src={adventure} className={style.ImageAdventure} />

        </div>
    )
}