import styles from "./Products.module.scss";
import Navigation from "../components/Navigation";

export default function Products() {
  return (
    <div className={styles.products}>
      <div className={styles.inputWrapper}>
        <Navigation />
        <h1>New Food Item</h1>
      </div>
    </div>
  )
}

