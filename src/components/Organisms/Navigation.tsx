import { Link } from "react-router-dom";
import cog from "../../assets/images/cogwheel.png";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
   <nav>
      <ul>
         <li><Link to="/balance">Balance</Link></li>
         <li><Link to="/">Products</Link></li>
         <li><Link to="/archive">Archive</Link></li>
         <li><Link className={styles.cogwheel} to="/options"><img className={styles.cog} src={cog} alt="cog wheel icon" /></Link></li>
      </ul>
   </nav>
  )
}
