import styles from "./Macronutrient.module.scss";

type MacronutrientProps = {
    label: string;
    value: number;
  };

export default function Macronutrient({label, value}: MacronutrientProps) {
  return (
    <div className={styles.singleMacroWrapper}>
        <h5>{label}</h5>
        <p>{value}</p>
    </div>
  )
}
