import style from "../styles/NavBar.module.css"
import Logo from "../images/logo-navbar.png"
import { Link } from "react-router-dom";
import Burger from "../assets/Burger";
import { useState } from "react";
import menu from "../images/menu.png"

export default function NavBar() {

    const [open, setOpen] = useState(false)

    const menuClosed = <img src={menu} onClick={() => setOpen(!open)}  className={style.Menu_Burger}/> 
    const menuOpen = <img src={menu} onClick={() => setOpen(!open)} className={style.Menu_Burger}/>
             
    function closeMenuWithLogo(e) {
        e.preventDefault()
        setOpen(false)
    }    
    
    return(
        <div className={style.Wrapper}> 
            <div className={style.Logo}>
                <Link to="/"><img src={Logo} alt="Olymplos Village Logo" onClick={(e) => closeMenuWithLogo(e)}/></Link>
            </div>
            <div>
                <div className={style.NavBar}>
                    <ol className={style.List}>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>Olympos Village</li></Link>
                        <Link to="/rooms"><li>Accommodation</li></Link>
                        <Link to="/activities"><li>Activities & Adventure</li></Link>
                        <Link to="/restaurant"><li>Restaurant</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                    </ol>
                </div>
                <div className={style.Mobile}>
                    <div className={style.ContainerMobile}>
                        <div className={style.LogosWrapper}>
                            {open ? menuOpen : menuClosed}
                        </div>
                        {open && <Burger setOpen={setOpen }/>}
                    </div>
                </div>
            </div>
        </div>
            
       
    )
}
