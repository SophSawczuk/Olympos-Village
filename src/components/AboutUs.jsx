import style from "../styles/AboutUs.module.css"
import logo from "../images/logo-olympos.jpg"
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

export default function AboutUs() {
    const markers = 
    {
      id: 1,
      name: "Olympos Village",
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


    return(
        <div>
            <div className={style.Banner}>
                <img src={logo}/>
            </div>
            <div className={style.OlymposVillage}>
                <img src={pool} className={style.Pool}/>
                <div className={style.ContentOlymposVillage}>
                    <h3>RELAXURY HOTEL</h3>
                    <h2>Olympos Village</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sapien viverra, molestie urna nec, suscipit enim. Pellentesque interdum semper sapien a dapibus. Pellentesque et erat at neque elementum molestie ut eget nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sapien viverra, molestie urna nec, suscipit enim. Pellentesque interdum semper sapien a dapibus. Pellentesque et erat at neque elementum molestie ut eget nulla.</p>
                </div>
            </div>
           

            <div className={style.StoneBuilding}>
                <div className={style.WrapperStoneBuilding}>
                    <h4>OUR HISTORY</h4>
                    <h2>The Stone</h2>
                    <h2>Building</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quasi repellendus, earum aliquid nam adipisci, unde voluptatibus deleniti, distinctio doloribus quos necessitatibus iure facilis esse? Quod, iure blanditiis. Omnis, magni?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores possimus ab necessitatibus eveniet debitis quam dolorum id officiis nostrum eligendi repudiandae, illo blanditiis libero aliquid facilis? Nihil vitae animi necessitatibus?</p>
                </div>
                <img src={stone} className={style.StoneBuildingImg}/>
            </div>

            <div className={style.WhyBookWithUs}>
                <div className={style.WhyBookWithUsBanner}>
                    <h2>Why book with us?</h2>
                    <h3>Your perfect stay starts here</h3>
                </div>
                <div className={style.WhyBookWithUsGrid}>
                    <div className={style.WhyBookWithUsCard}>
                        <img src={restaurant}/>
                        <h4>Restaurant</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <div className={style.WhyBookWithUsCard}>
                        <img src={poollogo}/>
                        <h4>Pool</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <div className={style.WhyBookWithUsCard}>
                        <img src={trekking}/>
                        <h4>Activities</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <div className={style.WhyBookWithUsCard}>
                        <img src={car}/>
                        <h4>Free shuttle </h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <div className={style.WhyBookWithUsCard}>
                        <img src={cleaning}/>
                        <h4>Daily cleaning</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <div className={style.WhyBookWithUsCard}>
                        <img src={dog}/>
                        <h4>Pet-Friendly</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                </div>
            </div>

            <div className={style.WrapperUbication}>
                <div className={style.BannerUbication}>
                    <h2>Excellent Ubication</h2>
                    <div className={style.SubtitleUbicationBanner}>
                        <img src={ubication}/>
                        <h3>Check the distances from our place</h3>
                    </div>
                </div>
                <div className={style.WrapperNearPlaces}>
                    <div className={style.CardNearPlaces1}>
                        <h4>Center of activities</h4>
                        <p>2km</p>
                    </div>
                    <div className={style.CardNearPlaces2}>
                        <h4>Adrasan</h4>
                        <p>7km</p>
                    </div>
                    <div className={style.CardNearPlaces3}>
                        <h4>Adrasan Bay</h4>
                        <p>8km</p>
                    </div>
                    <div className={style.CardNearPlaces4}>
                        <h4>Kumluca</h4>
                        <p>25km</p>
                    </div>
                    <div className={style.CardNearPlaces5}>
                        <h4>Ancient city of Olympos</h4>
                        <p>3km</p>
                    </div>
                    <div className={style.CardNearPlaces6}>
                        <h4>Antyala Airport</h4>
                        <p>8km</p>
                    </div>
                </div>
                <div>
                    {isLoaded ? (
                        <GoogleMap
                            center={{ lat: 36.3839454, lng: 30.4398193 }}
                            zoom={14}
                            mapContainerStyle={
                               
                                {width: mapWidth, height: mapHeight }
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
                    <h2>Photo gallery</h2>
                    <h3>Take a look</h3>
                </div>
                <div className={style.PhotoBanner}>
                    <h2>The Village</h2>
                </div>
                <div className={style.TheVillagePhotos}>
                    <div className={style.Column1}>
                        <img src={img1} className={style.ImgColumn1} onClick={() => {openModal(img1)}}/>
                        <img src={pool} className={style.ImgColumn1} onClick={() => {openModal(pool)}}/>
                        <img src={img3} className={style.ImgColumn1} onClick={() => {openModal(img3)}}/>
                    </div>
                    <div className={style.Column2}>
                        <img src={img4} className={style.ImgColumn1} onClick={() => {openModal(img4)}}/>
                        <img src={img5} className={style.ImgColumn1} onClick={() => {openModal(img5)}}/>
                        <img src={img6} className={style.ImgColumn1} onClick={() => {openModal(img6)}}/>
                    </div>
                </div>
                <div className={style.PhotoBanner}>
                    <h2>The Resturant</h2>
                </div>
                <div className={style.TheVillagePhotos}>
                    <div className={style.Column1}>
                        <img src={restaurant1} className={style.ImgColumn1} onClick={() => {openModal(restaurant1)}}/>
                        <img src={restaurant2} className={style.ImgColumn1} onClick={() => {openModal(restaurant2)}}/>
                    </div>
                    <div className={style.Column2}>
                        <img src={restaurant4} className={style.ImgColumn1} onClick={() => {openModal(restaurant4)}}/>
                        <img src={restaurant3} className={style.ImgColumn1} onClick={() => {openModal(restaurant3)}}/>
                    </div>
                </div>
                <div className={style.PhotoBanner}>
                    <h2>The Rooms</h2>
                </div>
                <div className={style.TheVillagePhotos}>
                    <div className={style.Column1}>
                        <img src={hotel} className={style.ImgColumn1}  onClick={() => {openModal(hotel)}}/>
                        <img src={bed} className={style.ImgColumn1}  onClick={() => {openModal(bed)}}/>
                    </div>
                    <div className={style.Column2}>
                        <img src={bed1} className={style.ImgColumn1}  onClick={() => {openModal(bed1)}}/>
                        <img src={hobbit} className={style.ImgColumn1}  onClick={() => {openModal(hobbit)}}/>
                    </div>
                </div>
            </div>
            {modalOpen && (
                <div className={style.ModalOverlay}>
                    {/* <RxCross1 onClick={() => {closeModal()}} className={style.CloseModalBtn}/> */}
                    <img src={exit} onClick={() => {closeModal()}} className={style.CloseModalBtn}/>
                    <img src={pic}/>
                                            
                </div>
            )}
            
        </div>
    )
}