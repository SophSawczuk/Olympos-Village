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

export default function Room1( ) {
    return(
        <div>
            <div className={style.Banner}>
                <h1>Villa Bungalow</h1>
            </div>
            <div className={style.Content}>
                <div className={style.Gallery}>
                    <img src={bed1} className={style.MainImg}/>
                    <div className={style.SecondaryImages}>
                        <img src={bed2} className={style.SecondaryImg}/>
                        <img src={village} className={style.SecondaryImg}/>
                        <img src={hotel} className={style.SecondaryImg}/>
                    </div>
                </div>

                <div className={style.Description}>
                    <h3>Villa Bungalow</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sapien viverra, molestie urna nec, suscipit enim. Pellentesque interdum semper sapien a dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sapien viverra, molestie urna nec, suscipit enim. Pellentesque interdum semper sapien a dapibus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sapien viverra, molestie urna nec, suscipit enim. Pellentesque interdum semper sapien a dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sapien viverra, molestie urna nec, suscipit enim. Pellentesque interdum semper sapien a dapibus.</p>
                    <div className={style.QuickLook}>
                        <div className={style.Block}>
                            <div className={style.SmallBlock}>
                                <img src={area}/>
                                <p>40m²</p>
                            </div>
                            <div className={style.SmallBlock}>
                                <img src={doublebed}/>
                                <p>1 double-bed</p>
                            </div>
                        </div>
                        <div className={style.Block}>
                            <div className={style.SmallBlock}>
                                <img src={singlebed}/>
                                <p>2 single-bed</p>
                            </div>
                            <div className={style.SmallBlock}>
                                <img src={person}/>  
                                <p>4 people</p>
                            </div>
                        </div>
                    </div>
                    <Link to="/room-1"><button className={style.Btn}>Book Now</button></Link>
                </div>
            </div>
            <div className={style.SecondBanner}>
                <h2>Facilities</h2>
            </div>
            <div className={style.Facilities}>
                <div className={style.Facility}>
                    <img src={airconditioner}/>
                    <h4>Air Conditioner</h4>
                </div>
                <div className={style.Facility}>
                    <img src={wifi}/>
                    <h4>Internet</h4>
                </div>
                <div className={style.Facility}>
                    <img src={tv}/>
                    <h4>TV LCD</h4>
                </div>
                <div className={style.Facility}>
                    <img src={hairdryer}/>
                    <h4>Hair dryer</h4>
                </div>
                <div className={style.Facility}>
                    <img src={terrace}/>
                    <h4>Private Terrace</h4>
                </div>
                <div className={style.Facility}>
                    <img src={wardrobe}/>
                    <h4>Wardrobe</h4>
                </div>
                <div className={style.Facility}>
                    <img src={minibar}/>
                    <h4>Minibar</h4>
                </div>
                <div className={style.Facility}>
                    <img src={airconditioner}/>
                    <h4>Air Conditioner</h4>
                </div>
                <div className={style.Facility}>
                    <img src={airconditioner}/>
                    <h4>Air Conditioner</h4>
                </div>
                <div className={style.Facility}>
                    <img src={airconditioner}/>
                    <h4>Air Conditioner</h4>
                </div>
            </div>
            <div className={style.Navigation}>
                <Link to={"/rooms"}><div className={style.NavAccommodation}>
                    <div>
                        <h3>See all</h3>
                    <h3>accommodation</h3>
                    </div>
                </div> </Link>
                <Link to={"/contact"}><div className={style.NavContact}>
                    <div>
                        <h3>Contact us</h3>
                    <p>Get in touch and reserve your spot</p>
                    </div>
                </div></Link>
            </div>
        </div>
    )
}