import styles from "./Products.module.scss";
import Navigation from "../components/Navigation";
import NewFoodPanel from "../components/NewFoodPanel";
import Macronutrient from "../components/Macronutrient";

export default function Products() {
  return (
    <div className={styles.products}>
      <div className={styles.inputWrapper}>
        <Navigation />
        <NewFoodPanel />
      </div>
        <h2>Products</h2>
        <div className={styles.addButtonWrapper}>
          <button>+</button>
        </div>
        <div className={styles.productPanelWrapper}>
          <div className={styles.imageWrapper}>
            <p className={styles.image}></p>
            <p className={styles.title}>Apfel</p>
          </div>
          <Macronutrient label="Kcal" value={54}/>
          <Macronutrient label="Carbs" value={54}/>
          <Macronutrient label="Fat" value={54}/>
          <Macronutrient label="Protein" value={54}/>
          <Macronutrient label="Sat.Fat" value={54}/>
          <Macronutrient label="Sugar" value={54}/>
          <Macronutrient label="Salt" value={54}/>
          <div className={styles.gramsWrapper}>
            <p>g</p>
            <input type="text" />
          </div>
          <span className={styles.close}>x</span>
        </div>
    </div>
  )
}

