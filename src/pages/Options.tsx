import styles from "./Options.module.scss";
import Navigation from "../components/Navigation";
import OptionItem from "../components/OptionItem";
import Button from "../components/Button";

export default function Options() {
  return (
    <div className={styles.options}>
        <div className={styles.navWrapper}>
            <Navigation />
        </div>
        <h1>Options</h1>
        <h2>Limit values</h2>
        <OptionItem label="Calories" />
        <OptionItem label="Carbohydrates" />
        <OptionItem label="Fat" />
        <OptionItem label="Protein" />
        <OptionItem label="Saturated fat" />
        <OptionItem label="Sugar" />
        <OptionItem label="Salt" />
        <div className={styles.buttonWrapper}>
            <Button label="Save" type="typeB"/>
        </div>
    </div>
  )
}
