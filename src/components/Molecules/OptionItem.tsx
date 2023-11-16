import styles from "./OptionItem.module.scss";

type OptionProps = {
  label:string,
  placeholder:string,
  value:number
}

export default function OptionItem({label, placeholder, value}: OptionProps) {
  return (
    <div className={styles.valueWrapper}>
        <p>{label}</p>
        <div className={styles.inputWrapper}>
          <input type="text" placeholder={placeholder} />
          <p>{value}</p>
        </div>
    </div>
  )
};
