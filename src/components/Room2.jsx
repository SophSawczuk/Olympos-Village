import style from "../styles/Room1.module.css"
import area from "../images/area.png"
import doublebed from "../images/double-bed-logo.png"
import singlebed from "../images/single-bed-logo.png"
import person from "../images/person.png"
import { Link } from "react-router-dom"
import bed1 from "../images/bed1.JPG"
import bed2 from "../images/double-bed.png"
import village from "../images/the-village.JPG"
import hotel from "../images/hotel.jpg"
import airconditioner from "../images/air-conditioner.png"
import wifi from "../images/wifi.png"
import tv from "../images/tv.png"
import hairdryer from "../images/hair-dryer.png"
import terrace from "../images/terrace.png"
import wardrobe from "../images/wardrobe.png"
import minibar from "../images/minibar.png"
import { useState } from "react"
import exit from "../images/equis.png"
import foward from "../images/arrow-foward.png"
import backward from "../images/arrow-backward.png"
import room1 from "../images/one-bedroom.jpeg"
import room2 from "../images/one-bedroom-1.jpeg"
import room3 from "../images/one-bedroom-2.jpeg"
import room4 from "../images/one-bedroom-3.jpeg"
import heating from "../images/heating.png"
import audio from "../images/audio.png"
import shower from "../images/bathroom.png"
import twobedroom1 from "../images/two-bedroom-1.jpeg"
import twobedroom2 from "../images/two-bedroom-2.jpeg"
import twobedroom3 from "../images/two-bedroom-3.jpeg"
import loft from "../images/loft.png"
import { useTranslation } from 'react-i18next'



export default function Room2() {
    const [modalOpen, setModalOpen] = useState(false);
    const [pic, setPic] = useState()

    const images = [bed1, twobedroom1, twobedroom2, twobedroom3]; // Array con tus imágenes
    const openModal = (index) => {
        setCurrentIndex(index)
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    const { t } = useTranslation()
    const facilities = t("room_2.facilities", { returnObjects: true });


    return (
        <div>
            <div className={style.Banner}>
                <h1>{t("room_2.title")}</h1>
            </div>
            <div className={style.Content}>
                <div className={style.Gallery}>
                    <img src={bed1} className={style.MainImg} onClick={() => { openModal(0) }} />
                    <div className={style.SecondaryImages}>
                        <img src={twobedroom1} className={style.SecondaryImg} onClick={() => { openModal(1) }} />
                        <img src={twobedroom2} className={style.SecondaryImg} onClick={() => { openModal(2) }} />
                        <img src={twobedroom3} className={style.SecondaryImg} onClick={() => { openModal(3) }} />
                    </div>
                </div>
                {
                    modalOpen && (
                        <div className={style.ModalOverlay}>
                            <img src={exit} onClick={() => { closeModal() }} className={style.CloseModalBtn} />
                            <img src={backward}
                                onClick={() =>
                                    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
                                }
                                className={style.Backward}
                            />
                            <img src={images[currentIndex]} className={style.ModalImgMobile} />
                            <img src={foward}
                                onClick={() =>
                                    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
                                }
                                className={style.Foward}

                            />
                        </div>

                    )
                }

                <div className={style.Description}>
                    <h3>{t("room_2.title")}</h3>
                    <p>{t("room_2.description")}</p>
                    <div className={style.QuickLook}>
                        <div className={style.Block}>
                            <div className={style.SmallBlock}>
                                <img src={area} />
                                <p>55m²</p>
                            </div>
                            <div className={style.SmallBlock}>
                                <img src={doublebed} />
                                <p>{t("room_2.double_beds")}</p>
                            </div>
                        </div>
                        <div className={style.Block}>
                            <div className={style.SmallBlock}>
                                <img src={singlebed} />
                                <p>{t("room_2.single_beds")}</p>
                            </div>
                            <div className={style.SmallBlock}>
                                <img src={person} />
                                <p>{t("room_2.people")}</p>
                            </div>
                        </div>
                    </div>
                    <Link to="/contact"><button className={style.Btn}>{t("room_2.button")}</button></Link>
                </div>
            </div>
            <div className={style.SecondBanner}>
                <h2>{t("room_2.facilities_all")}</h2>
            </div>
            <div className={style.Facilities}>
                <div className={style.Facility}>
                    <img src={airconditioner} />
                    <h4>{facilities[0].title}</h4>
                </div>
                <div className={style.Facility}>
                    <img src={wifi} />
                    <h4>{facilities[1].title}</h4>
                </div>
                <div className={style.Facility}>
                    <img src={tv} />
                    <h4>{facilities[2].title}</h4>
                </div>
                <div className={style.Facility}>
                    <img src={audio} />
                    <h4>{facilities[3].title}</h4>
                </div>
                <div className={style.Facility}>
                    <img src={heating} />
                    <h4>{facilities[4].title}</h4>
                </div>
                <div className={style.Facility}>
                    <img src={wardrobe} />
                    <h4>{facilities[5].title}</h4>
                </div>
                <div className={style.Facility}>
                    <img src={minibar} />
                    <h4>{facilities[6].title}</h4>
                </div>
                <div className={style.Facility}>
                    <img src={shower} />
                    <h4>{facilities[7].title}</h4>
                </div>
                <div className={style.Facility}>
                    <img src={terrace} />
                    <h4>{facilities[8].title}</h4>
                </div>
                <div className={style.Facility}>
                    <img src={loft} />
                    <h4>{facilities[9].title}</h4>
                </div>
            </div>
            <div className={style.Navigation}>
                <Link to={"/rooms"}><div className={style.NavAccommodation}>
                    <div>
                        <h3>{t("room_2.see_all_1")}</h3>
                        <h3>{t("room_2.see_all_2")}</h3>
                    </div>
                </div> </Link>
                <Link to={"/contact"}><div className={style.NavContact}>
                    <div>
                        <h3>{t("room_2.contact")}</h3>
                        <p>{t("room_2.contact_subtitle")}</p>
                    </div>
                </div></Link>
            </div>
        </div>
    )
}