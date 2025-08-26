import style from "../styles/AboutUs.module.css"
import logo from "../images/logo-olympos.png"
import pool from "../images/pool-chairs.jpg"
import stone from "../images/stone-building.jpg"
import restaurant from "../images/restaurant-logo.png"
import ubication from "../images/ubication-logo.png"
import {
    GoogleMap,
    InfoWindowF,
    MarkerF,
    useLoadScript,
} from "@react-google-maps/api"
import { useState } from "react"
import img1 from "../images/img1.jpg"
import img3 from "../images/img3.png"
import img4 from "../images/img4.jpg"
import img5 from "../images/the-village.JPG"
import img6 from "../images/img6.jpg"
import restaurant1 from "../images/restaurant1.jpg"
import restaurant2 from "../images/restaurant2.JPG"
import restaurant3 from "../images/restaurant3.jpg"
import restaurant4 from "../images/restaurant4.JPG"
import hotel from "../images/hotel.jpg"
import bed from "../images/double-bed.png"
import bed1 from "../images/bed1.JPG"
import hobbit from "../images/hobbit.jpg"
import poollogo from "../images/pool.png"
import trekking from "../images/trekking.png"
import car from "../images/car.png"
import cleaning from "../images/cleaning.png"
import dog from "../images/dog.png"
import activities from "../images/center-of-activities.jpg"
import exit from "../images/equis.png"
import { useEffect } from "react"
import likya1 from "../images/likya-foto.jpeg"
import likya2 from "../images/likya-foto-1.jpeg"
import likya3 from "../images/likya-foto-2.jpeg"
import room1 from "../images/rooms-nueva-1.jpeg"
import room2 from "../images/rooms-nueva-2.jpeg"
import room3 from "../images/rooms-nueva-3.jpeg"
import room4 from "../images/rooms-nueva-4.jpeg"
import room5 from "../images/rooms-nueva-6.jpeg"
import olympos1 from "../images/olympos-foto-1.jpeg"
import olympos2 from "../images/olympos-foto-2.jpeg"
import olympos3 from "../images/olympos-foto-3.jpeg"
import olympos4 from "../images/olympos-foto-4.jpeg"
import olympos5 from "../images/olympos-foto-5.jpeg"
import olympos6 from "../images/olympos-foto-6.jpeg"
import olympos7 from "../images/olympos-foto-7.jpeg"
import olympos8 from "../images/olympos-foto-8.jpeg"
import olympos9 from "../images/olympos-foto-9.jpeg"
import olympos10 from "../images/olympos-foto-10.jpeg"
import olympos11 from "../images/olympos-foto-11.jpeg"
import olympos12 from "../images/olympos-foto-12.jpeg"
import olympos13 from "../images/olympos-foto-13.jpeg"
import olympos14 from "../images/olympos-foto-14.jpeg"
import { useTranslation } from 'react-i18next'
import scrull from "../images/scrull.png"
import movie from "../images/movie.png"
import group from "../images/group.png"
import yogaicon from "../images/yoga-icon.png"
import cap from "../images/cap.png"

export default function AboutUs() {
    const markers =
    {
        id: 1,
        name: "Likya Village",
        position: { lat: 36.3839454, lng: 30.4398193 },
    }

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_MAP_KEY,
    })

    const [mapWidth, setMapWidth] = useState("99vw");
    const [mapHeight, setMapHeight] = useState("80vh")



    const [modalOpen, setModalOpen] = useState(false);
    const [pic, setPic] = useState()

    const openModal = (picture) => {
        setPic(picture)
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) {
                // Pantallas pequeñas (móviles)
                setMapWidth("100vw");
            } else {
                // Pantallas grandes (desktop)
                setMapWidth("99vw");
            }
        };

        // Ejecutar al cargar
        handleResize();

        // Escuchar cambios de tamaño
        window.addEventListener("resize", handleResize);

        // Limpiar el listener al desmontar
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const { t } = useTranslation()
    const highlights = t("about.highlights", { returnObjects: true });
    const locations_olympos = t("about.locations_olympos", { returnObjects: true });

    return (
        <div>
            <div className={style.Banner}>
                <img src={logo} />
            </div>
            <div className={style.OlymposVillage}>
                <img src={pool} className={style.Pool} />
                <div className={style.ContentOlymposVillage}>
                    <h3>{t("about.landing_subtitle")}</h3>
                    <h2>{t("about.landing_title")}</h2>
                    <p>{t("about.landing_description")}</p>

                </div>
            </div>


            <div className={style.StoneBuilding}>
                <div className={style.WrapperStoneBuilding}>
                    <h4>{t("about.history_subtitle")}</h4>
                    <h2>{t("about.history_title_1")}</h2>
                    <h2>{t("about.history_title_2")}</h2>
                    <p>{t("about.history_description")}</p>
                </div>
                <img src={stone} className={style.StoneBuildingImg} />
            </div>

            <div className={style.WhyBookWithUs}>
                <div className={style.WhyBookWithUsBanner}>
                    <h2>{t("about.first_banner_title")}</h2>
                    <h3>{t("about.first_banner_subtitle")}</h3>
                </div>
                <div className={style.WhyBookWithUsGrid}>
                    <div className={style.WhyBookWithUsCard}>
                        <img src={restaurant} />
                        <h4>{highlights[0].title}</h4>
                        <p>{highlights[0].subtitle}</p>
                    </div>
                    <div className={style.WhyBookWithUsCard}>
                        <img src={scrull} />
                        <h4>{highlights[1].title}</h4>
                        <p>{highlights[1].subtitle}</p>
                    </div>
                    <div className={style.WhyBookWithUsCard}>
                        <img src={movie} />
                        <h4>{highlights[2].title}</h4>
                        <p>{highlights[2].subtitle}</p>
                    </div>
                    <div className={style.WhyBookWithUsCard}>
                        <img src={group} />
                        <h4>{highlights[3].title}</h4>
                        <p>{highlights[3].subtitle}</p>
                    </div>
                    <div className={style.WhyBookWithUsCard}>
                        <img src={yogaicon} />
                        <h4>{highlights[4].title}</h4>
                        <p>{highlights[4].subtitle}</p>
                    </div>
                    <div className={style.WhyBookWithUsCard}>
                        <img src={cap} />
                        <h4>{highlights[5].title}</h4>
                        <p>{highlights[5].subtitle}</p>
                    </div>
                </div>
            </div>

            <div className={style.WrapperUbication}>
                <div className={style.BannerUbication}>
                    <h2>{t("about.second_banner_title")}</h2>
                    <div className={style.SubtitleUbicationBanner}>
                        <img src={ubication} />
                        <h3>{t("about.second_banner_subtitle")}</h3>
                    </div>
                </div>
                <div className={style.WrapperNearPlaces}>
                    <div className={style.CardNearPlaces1}>
                        <h4>{locations_olympos[0].title}</h4>
                        <p>3.5km</p>
                    </div>
                    <div className={style.CardNearPlaces2}>
                        <h4>{locations_olympos[1].title}</h4>
                        <p>26km</p>
                    </div>
                    <div className={style.CardNearPlaces3}>
                        <h4>{locations_olympos[2].title}</h4>
                        <p>13km</p>
                    </div>
                    <div className={style.CardNearPlaces4}>
                        <h4>{locations_olympos[3].title} </h4>
                        <p>4.5km</p>
                    </div>
                    <div className={style.CardNearPlaces5}>
                        <h4>{locations_olympos[4].title}</h4>
                        <p>3.5km</p>
                    </div>
                    <div className={style.CardNearPlaces6}>
                        <h4>{locations_olympos[5].title}</h4>
                        <p>95km</p>
                    </div>
                </div>
                <div>
                    {isLoaded ? (
                        <GoogleMap
                            center={{ lat: 36.3839454, lng: 30.4398193 }}
                            zoom={14}
                            mapContainerStyle={

                                { width: mapWidth, height: mapHeight }
                            }
                        >
                            <MarkerF
                                key={markers.id}
                                position={markers.position}
                            >
                                <InfoWindowF position={markers.position}>
                                    <div>
                                        <p className={style.MapMarker}><span translate="no">{markers.name}</span></p>
                                    </div>
                                </InfoWindowF>
                            </MarkerF>
                        </GoogleMap>
                    ) :
                        <div>
                            {/* <h1>Cargando mapa...</h1> */}
                            {/* <Loader type="ball-pulse" /> */}
                            <h1>Cargando...</h1>
                        </div>
                    }
                </div>
            </div>
            <div className={style.PhotosWrapper}>
                <div className={style.WhyBookWithUsBanner}>
                    <h2>{t("about.third_banner_title")}</h2>
                    <h3>{t("about.third_banner_subtitle")}</h3>
                </div>
                <div className={style.PhotoBanner}>
                    <h2>{t("about.village")}</h2>
                </div>
                <div className={style.TheVillagePhotos}>
                    <div className={style.Column1}>
                        {/*  <img src={img1} className={style.ImgColumn1} onClick={() => { openModal(img1) }} />
                        <img src={pool} className={style.ImgColumn1} onClick={() => { openModal(pool) }} /> */}
                        <img src={img3} className={style.ImgColumn1} onClick={() => { openModal(img3) }} />
                        <img src={likya1} className={style.ImgColumn1} onClick={() => { openModal(likya1) }} />
                        <img src={likya2} className={style.ImgColumn1} onClick={() => { openModal(likya2) }} />

                    </div>
                    <div className={style.Column2}>
                        <img src={img4} className={style.ImgColumn1} onClick={() => { openModal(img4) }} />
                        <img src={img5} className={style.ImgColumn1} onClick={() => { openModal(img5) }} />
                        <img src={img6} className={style.ImgColumn1} onClick={() => { openModal(img6) }} />
                        <img src={likya3} className={style.ImgColumn1} onClick={() => { openModal(likya3) }} />

                    </div>
                </div>
                <div className={style.PhotoBanner}>
                    <h2>{t("about.restaurant")}</h2>
                </div>
                <div className={style.TheVillagePhotos}>
                    <div className={style.Column1}>
                        <img src={restaurant1} className={style.ImgColumn1} onClick={() => { openModal(restaurant1) }} />
                        <img src={restaurant2} className={style.ImgColumn1} onClick={() => { openModal(restaurant2) }} />
                    </div>
                    <div className={style.Column2}>
                        <img src={restaurant4} className={style.ImgColumn1} onClick={() => { openModal(restaurant4) }} />
                        <img src={restaurant3} className={style.ImgColumn1} onClick={() => { openModal(restaurant3) }} />
                    </div>
                </div>
                <div className={style.PhotoBanner}>
                    <h2>{t("about.rooms")}</h2>
                </div>
                <div className={style.TheVillagePhotos}>
                    <div className={style.Column1}>
                        <img src={hotel} className={style.ImgColumn1} onClick={() => { openModal(hotel) }} />
                        <img src={bed} className={style.ImgColumn1} onClick={() => { openModal(bed) }} />
                        <img src={room1} className={style.ImgColumn1} onClick={() => { openModal(room1) }} />
                        <img src={room2} className={style.ImgColumn1} onClick={() => { openModal(room2) }} />
                    </div>
                    <div className={style.Column2}>
                        <img src={bed1} className={style.ImgColumn1} onClick={() => { openModal(bed1) }} />
                        <img src={room3} className={style.ImgColumn1} onClick={() => { openModal(room3) }} />
                        <img src={room4} className={style.ImgColumn1} onClick={() => { openModal(room4) }} />
                        <img src={room5} className={style.ImgColumn1} onClick={() => { openModal(room5) }} />

                    </div>
                </div>
                <div className={style.PhotoBanner}>
                    <h2>{t("about.olympos")}</h2>
                </div>
                <div className={style.TheVillagePhotos}>
                    <div className={style.Column1}>
                        <img src={olympos1} className={style.ImgColumn1} onClick={() => { openModal(olympos1) }} />
                        <p className={style.Ciudad}>Antalya Beach</p>
                        <img src={olympos2} className={style.ImgColumn1} onClick={() => { openModal(olympos2) }} />
                        <p className={style.Ciudad}>Gelidonya on Lykian way</p>
                        <img src={olympos3} className={style.ImgColumn1} onClick={() => { openModal(olympos3) }} />
                        <p className={style.Ciudad}>Adrasan Beach</p>
                        <img src={olympos4} className={style.ImgColumn1} onClick={() => { openModal(olympos4) }} />
                        <p className={style.Ciudad}>Sulu Island</p>
                        <img src={olympos5} className={style.ImgColumn1} onClick={() => { openModal(olympos5) }} />
                        <p className={style.Ciudad}>Ceneviz Bay</p>
                        <img src={olympos6} className={style.ImgColumn1} onClick={() => { openModal(olympos6) }} />
                        <p className={style.Ciudad}>Likyan way</p>
                        <img src={olympos14} className={style.ImgColumn1} onClick={() => { openModal(olympos14) }} />
                        <p className={style.Ciudad}>Adrasan Beach</p>
                    </div>
                    <div className={style.Column2}>
                        <img src={olympos8} className={style.ImgColumn1} onClick={() => { openModal(olympos8) }} />
                        <p className={style.Ciudad}>Gelidonya on Lykian way</p>
                        <img src={olympos9} className={style.ImgColumn1} onClick={() => { openModal(olympos9) }} />
                        <p className={style.Ciudad}>Likyan way</p>
                        <img src={olympos10} className={style.ImgColumn1} onClick={() => { openModal(olympos10) }} />
                        <p className={style.Ciudad}>Sulu Island</p>
                        <img src={olympos11} className={style.ImgColumn1} onClick={() => { openModal(olympos11) }} />
                        <p className={style.Ciudad}>Gelidonya light house</p>
                        <img src={olympos12} className={style.ImgColumn1} onClick={() => { openModal(olympos12) }} />
                        <p className={style.Ciudad}>Olympos Beach</p>
                        <img src={olympos13} className={style.ImgColumn1} onClick={() => { openModal(olympos13) }} />
                        <p className={style.Ciudad}>Likya Village</p>

                    </div>
                </div>
            </div>
            {modalOpen && (
                <div className={style.ModalOverlay}>
                    {/* <RxCross1 onClick={() => {closeModal()}} className={style.CloseModalBtn}/> */}
                    <img src={exit} onClick={() => { closeModal() }} className={style.CloseModalBtn} />
                    <img src={pic} />

                </div>
            )}

        </div>
    )
}