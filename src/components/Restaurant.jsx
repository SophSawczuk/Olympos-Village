import style from "../styles/Restaurant.module.css"
import flag from "../images/turkey-flag.png"
import restaurant from "../images/restaurant.jpg"
import leaf from "../images/leaf.png"
import breakfast from "../images/breakfast.jpg"
import drinks from "../images/drinks.jpg"

export default function Restaurant() {
    return(
        <div>
            <div className={style.Banner}>
                <h1>Seasonal & Delicious</h1>
                <div className={style.Subtitle}>
                    <img src={flag}/>
                    <h2>TURKISH AND MEDITERRANEAN DISHES</h2>
                </div>
            </div>
            <div className={style.Restaurant}>
                <img src={restaurant} alt="Restaurant in Olympos, Antyala" className={style.RestoImg}/>
                <div className={style.WrapperRestaurant}>
                    <h4>RESTAURANT</h4>
                    <h2>Turkish &</h2>
                    <h2>Mediterranean</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quasi repellendus, earum aliquid nam adipisci, unde voluptatibus deleniti, distinctio doloribus quos necessitatibus iure facilis esse? Quod, iure blanditiis. Omnis, magni?</p>
                    <a href="src\assets\Menu.pdf" target="_blank" rel="noopener noreferrer"><button>See menu</button></a>
                </div>
            </div>
            <div className={style.Attributes}>
                <div className={style.Attribute}>
                    <img src={leaf}/>
                    <h4>Healthy</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className={style.Attribute}>
                    <img src={leaf}/>
                    <h4>Healthy</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className={style.Attribute}>
                    <img src={leaf}/>
                    <h4>Healthy</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
            </div>
            <div className={style.FoodImages}>
                <img src={breakfast} />
                <img src={drinks}/>
                <img src={restaurant}/>
            </div>
        </div>
    )
}