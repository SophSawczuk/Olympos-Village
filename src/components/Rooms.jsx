import style from "../styles/Rooms.module.css"
import area from "../images/area.png"
import bed1 from "../images/bed1.JPG"
import doublebed from "../images/double-bed-logo.png"
import singlebed from "../images/single-bed-logo.png"
import person from "../images/person.png"
import hotel from "../images/hotel.jpg"
import { Link } from "react-router-dom"

export default function Rooms() {
    return(
        <div className={style.Wrapper}>
            <div className={style.Card}>
                <img src={bed1} className={style.FirstImage}/>
                <div className={style.Content}>
                    <h4>RELAXURY HOTEL</h4>
                    <h3>Villa Bungalow</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
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
                    <Link to="/room-1"><button className={style.Btn}>See more</button></Link>
                </div>
            </div>
            <div className={style.Card}>
                <img src={hotel} className={style.FirstImage}/>
                <div className={style.Content}>
                    <h4>RELAXURY HOTEL</h4>
                    <h3>Villa Bungalow</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
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
                    <button className={style.Btn}>See more</button>
                </div>
            </div>
            <div className={style.Card}>
                <img src={bed1} className={style.FirstImage}/>
                <div className={style.Content}>
                    <h4>RELAXURY HOTEL</h4>
                    <h3>Villa Bungalow</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
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
                    <Link to="/room-1"><button className={style.Btn}>See more</button></Link>
                </div>
            </div>
        </div>
    )
}