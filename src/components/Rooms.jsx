import style from "../styles/Rooms.module.css"
import area from "../images/area.png"
import bed1 from "../images/bed1.JPG"
import doublebed from "../images/double-bed-logo.png"
import singlebed from "../images/single-bed-logo.png"
import person from "../images/person.png"
import hotel from "../images/hotel.jpg"
import doublebedfoto from "../images/double-bed.png"
import { Link } from "react-router-dom"
import poolroom from "../images/pool-hotel.png"
import { useTranslation } from 'react-i18next'


export default function Rooms() {
    const { t } = useTranslation()
    const rooms = t("rooms", { returnObjects: true });
    return (
        <div className={style.Wrapper}>
            <div className={style.Card}>
                <img src={doublebedfoto} className={style.FirstImage} />
                <div className={style.Content}>
                    <h4>{rooms[0].subtitle}</h4>
                    <h3>{rooms[0].title}</h3>
                    <p>{rooms[0].description} </p>
                    <div className={style.QuickLook}>
                        <div className={style.Block}>
                            <div className={style.SmallBlock}>
                                <img src={area} />
                                <p>37m²</p>
                            </div>
                            <div className={style.SmallBlock}>
                                <img src={doublebed} />
                                <p>{rooms[0].double_beds}</p>
                            </div>
                        </div>
                        <div className={style.Block}>
                            <div className={style.SmallBlock}>
                                <img src={singlebed} />
                                <p>{rooms[0].single_beds}</p>
                            </div>
                            <div className={style.SmallBlock}>
                                <img src={person} />
                                <p>{rooms[0].people}</p>
                            </div>
                        </div>
                    </div>
                    <Link to="/room-1"><button className={style.Btn}>{rooms[0].button}</button></Link>
                </div>
            </div>
            <div className={style.Card}>
                <img src={bed1} className={style.FirstImage} />
                <div className={style.Content}>
                    <h4>{rooms[1].subtitle}</h4>
                    <h3>{rooms[1].title}</h3>
                    <p>{rooms[1].description}</p>
                    <div className={style.QuickLook}>
                        <div className={style.Block}>
                            <div className={style.SmallBlock}>
                                <img src={area} />
                                <p>55m²</p>
                            </div>
                            <div className={style.SmallBlock}>
                                <img src={doublebed} />
                                <p>{rooms[1].double_beds}</p>
                            </div>
                        </div>
                        <div className={style.Block}>
                            <div className={style.SmallBlock}>
                                <img src={singlebed} />
                                <p>{rooms[1].single_beds}</p>
                            </div>
                            <div className={style.SmallBlock}>
                                <img src={person} />
                                <p>{rooms[1].people}</p>
                            </div>
                        </div>
                    </div>
                    <Link to="/room-2"><button className={style.Btn}>{rooms[1].button}</button></Link>
                </div>
            </div>
            <div className={style.Card}>
                <img src={poolroom} className={style.FirstImage} />
                <div className={style.Content}>
                    <h4>{rooms[2].subtitle}</h4>
                    <h3>{rooms[2].title}</h3>
                    <p>{rooms[2].description}</p>
                    <div className={style.QuickLook}>
                        <div className={style.Block}>
                            <div className={style.SmallBlock}>
                                <img src={area} />
                                <p>30m²</p>
                            </div>
                            <div className={style.SmallBlock}>
                                <img src={doublebed} />
                                <p>{rooms[2].double_beds}</p>
                            </div>
                        </div>
                        <div className={style.Block}>
                            <div className={style.SmallBlock}>
                                <img src={singlebed} />
                                <p>{rooms[2].single_beds}</p>
                            </div>
                            <div className={style.SmallBlock}>
                                <img src={person} />
                                <p>{rooms[2].people}</p>
                            </div>
                        </div>
                    </div>
                    <Link to="/room-3"><button className={style.Btn}>{rooms[2].button}</button></Link>
                </div>
            </div>
        </div>
    )
}