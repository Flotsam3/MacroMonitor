import styles from "./Options.module.scss";
import Navigation from "../components/Organisms/Navigation";
import OptionItem from "../components/Molecules/OptionItem";
import Button from "../components/Atoms/Button";

export default function Options() {
  return (
    <div className={styles.options}>
        <div className={styles.navWrapper}>
            <Navigation />
        </div>
        <h1>Options</h1>
        <h2>Limit values</h2>
        <OptionItem label="Calories" placeholder="g" value={2000}/>
        <OptionItem label="Carbohydrates"placeholder="%" value={2000}/>
        <OptionItem label="Fat" placeholder="%" value={2000}/>
        <OptionItem label="Protein" placeholder="%" value={2000}/>
        <OptionItem label="Saturated fat" placeholder="%" value={2000}/>
        <OptionItem label="Sugar" placeholder="%" value={2000}/>
        <OptionItem label="Salt" placeholder="g" value={10}/>
        <div className={styles.buttonWrapper}>
            <Button label="Save" type="typeB"/>
        </div>
    </div>
  )
}
