import styles from "../pages/Products.module.scss";

type MacronutrientProps = {
    label: string;
};

export default function MacronutrientInput({label}: MacronutrientProps) {
  return (
    <div className={styles.singleMacroWrapper}>
        <h5>{label}</h5>
        <input type="text"/>
    </div>
  )
}
