import { Link } from "react-router-dom";
import cog from "../assets/images/cogwheel.png";
import "./Navigation.module.scss";

export default function Navigation() {
  return (
   <nav>
      <ul>
         <li><Link to="/products">Products</Link></li>
         <li><Link to="/balance">Balance</Link></li>
         <li><Link to="/archive">Archive</Link></li>
         <li><img src={cog} alt="cog wheel icon" /></li>
      </ul>
   </nav>
  )
}
