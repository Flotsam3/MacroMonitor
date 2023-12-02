import {useState} from "react";
import { Link } from "react-router-dom";
import styles from "./MobileMenu.module.scss";
import cog from "../../assets/images/cogwheel.png";
import menu from "../../assets/images/burgerMenu.svg";

export default function MobileMenu() {
    const [menuClass, setMenuClass] = useState(styles.mobileMenu);

    function handleMenu(){
        if (menuClass.includes("slideMenu")){
           return setMenuClass(styles.mobileMenu);
        };
        setMenuClass(`${styles.mobileMenu} ${styles.slideMenu}`)
     };
  return (
    <div className={styles.mobileWrapper}>
        <div className={styles.burgerMenuWrapper}>
         <img onClick={handleMenu} src={menu} alt="Hamburger menu icon for mobile view" />
        </div>
        <ul className={menuClass} onClick={()=>setMenuClass(styles.mobileMenu)}>
            <li><Link to="/balance">Balance</Link></li>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/archive">Archive</Link></li>
            <li><Link className={styles.cogwheel} to="/options"><img className={styles.cog} src={cog} alt="cog wheel icon" /></Link></li>
        </ul>
    </div>
  )
}
