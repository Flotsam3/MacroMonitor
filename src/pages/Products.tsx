import styles from "./Products.module.scss";
import Navigation from "../components/Navigation";
import NewFoodPanel from "../components/NewFoodPanel";

export default function Products() {
  return (
    <div className={styles.products}>
      <div className={styles.inputWrapper}>
        <Navigation />
        <NewFoodPanel />
        <h2>Products</h2>
      </div>
    </div>
  )
}

