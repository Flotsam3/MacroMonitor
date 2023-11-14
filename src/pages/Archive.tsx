import Navigation from "../components/Organisms/Navigation";
import styles from "./Archive.module.scss";
import Button from "../components/Atoms/Button";
import Macronutrient from "../components/Molecules/Macronutrient";
import pasta from "../assets/images/nudeln_1.png"

export default function Archive() {
  return (
      <div className={styles.archive}>
        <div className={styles.archiveHeader}>
          <img src={pasta} alt="A plate with uncooked pasta" />
        </div>
          <Navigation />
          <h1>Archive</h1>
          <div className={styles.buttonWrapper}>
            <Button label="Reset" type="typeA" />
          </div>
        <div className={styles.panelWrapper}>
          <div className={styles.dateWrapper}>
            <p className={styles.date}>01.08.2023</p>
            <p className={styles.grams}>78g</p>
          </div>
            <Macronutrient label="Kcal" value={54} />
            <Macronutrient label="Carbs" value={54} />
            <Macronutrient label="Fat" value={54} />
            <Macronutrient label="Protein" value={54} />
            <Macronutrient label="Sat.fat" value={54} />
            <Macronutrient label="Sugar" value={54} />
            <Macronutrient label="Salt" value={54} />
            <span className={styles.close}>x</span>
        </div>
      </div>
  )
};
