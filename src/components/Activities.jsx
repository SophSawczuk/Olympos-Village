import style from "../styles/Activities.module.css"
import hiking from "../images/activities-hiking.png"
import antalya from "../images/ANTALYA.jpg"
import bike from "../images/bike.jpg"
import kayak from "../images/kayak.jpg"
import hiking2 from "../images/hiking.jpg"
import yoga from "../images/yoga.jpg"
import adventure from "../images/adventure.jpg"

export default function Activities() {
    return(
        <div>
            <div className={style.Banner}>
                <h1>Activities & Adventure</h1>
            </div>
            <div className={style.Activities}>
                <div className={style.Card}>
                    <img src={hiking}/>
                    <h4>Nature Hike</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sapien viverra, molestie urna nec, suscipit enim. </p>
                </div>
                <div className={style.Card}>
                    <img src={hiking}/>
                    <h4>Nature Hike</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sapien viverra, molestie urna nec, suscipit enim. </p>
                </div>
                <div className={style.Card}>
                    <img src={hiking}/>
                    <h4>Nature Hike</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sapien viverra, molestie urna nec, suscipit enim. </p>
                </div>
                <div className={style.Card}>
                    <img src={hiking}/>
                    <h4>Nature Hike</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sapien viverra, molestie urna nec, suscipit enim. </p>
                </div>
                <div className={style.Card}>
                    <img src={hiking}/>
                    <h4>Nature Hike</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sapien viverra, molestie urna nec, suscipit enim. </p>
                </div>
                <div className={style.Card}>
                    <img src={hiking}/>
                    <h4>Nature Hike</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sapien viverra, molestie urna nec, suscipit enim. </p>
                </div>
            </div>
            <div className={style.Antalya}>
                <div className={style.WrapperAntalya}>
                    <h4>OLYMPOS, ANTALYA</h4>
                    <h2>Explore &</h2>
                    <h2>Discover</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quasi repellendus, earum aliquid nam adipisci, unde voluptatibus deleniti, distinctio doloribus quos necessitatibus iure facilis esse? Quod, iure blanditiis. Omnis, magni?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores possimus ab necessitatibus eveniet debitis quam dolorum id officiis nostrum eligendi repudiandae, illo blanditiis libero aliquid facilis? Nihil vitae animi necessitatibus?</p>
                </div>
                <img src={antalya} className={style.AntalyaImg}/>
            </div>
            <div>
                <div className={style.WrapperImagenes}>   
                    <div className={style.Columna1}>
                        <img src={bike} className={style.ActivitieImg}/>
                        <img src={kayak} className={style.ActivitieImg}/>
                    </div>
                    <div className={style.Columna1}>
                        <img src={hiking2} className={style.ActivitieImg}/>
                        <img src={yoga} className={style.ActivitieImg}/>
                    </div>
                </div>
                
                <img src={adventure} className={style.ImageAdventure}/>
            </div>
        </div>
    )
}