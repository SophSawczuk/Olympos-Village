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

export default function Home() {
    return(
        <div>
            <div className={style.Landing}>
                <h1 className={style.Title}>RELAXURY</h1>
            </div>
            <div className={style.TheVillage}>
                <img src={hotel} alt="Hotel in Olympos, Antyala" className={style.Village}/>
                <div className={style.WrapperVillage}>
                    <h4>RELAXURY HOTEL</h4>
                    <h2>Olympos</h2>
                    <h2>Village</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quasi repellendus, earum aliquid nam adipisci, unde voluptatibus deleniti, distinctio doloribus quos necessitatibus iure facilis esse? Quod, iure blanditiis. Omnis, magni?</p>
                    <Link to="/about"><button>See more</button></Link>
                </div>
            </div>
            <div className={style.Accommodation}>
                <div className={style.AccommodationImages}>
                    <img src={accomodation}/>
                    <img src={village}/>
                    <img src={doublebed}/>
                    <h2>Accommodation</h2>
                    <Link to="/rooms"><button>See all</button></Link>
                </div>            
            </div>
            <div className={style.Restaurant}>
                <img src={restaurant} alt="Restaurant in Olympos, Antyala" className={style.RestoImg}/>
                <div className={style.WrapperRestaurant}>
                    <h4>RESTAURANT</h4>
                    <h2>Turkish &</h2>
                    <h2>Mediterranean</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quasi repellendus, earum aliquid nam adipisci, unde voluptatibus deleniti, distinctio doloribus quos necessitatibus iure facilis esse? Quod, iure blanditiis. Omnis, magni?</p>
                    <Link to="/restaurant"><button>See more</button></Link>
                </div>
            </div>
            <div className={style.Activities}>
                <div className={style.WrapperActivities}>
                    <h4>EXPLORE & DISCOVER</h4>
                    <h2>Activities &</h2>
                    <h2>Adventure</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quasi repellendus, earum aliquid nam adipisci, unde voluptatibus deleniti, distinctio doloribus quos necessitatibus iure facilis esse? Quod, iure blanditiis. Omnis, magni?</p>
                    <Link to="/activities"><button>See more</button></Link>
                </div>
                <div className={style.ActivitiesImg}>
                    <img src={kayak} alt="Kayak in Olympos, Antyala" className={style.Kayak}/>
                    <img src={hiking} alt="Hiking in Olympos, Antyala" className={style.Hiking} />
                </div>           
            </div>
            <Link to="/contact"><div className={style.Contact}>
                <h2>Contact Us</h2>
                <p>Get in touch and reserve your spot</p>
            </div></Link>
        </div>
    )
}