import styles from "./OptionItem.module.scss";

type OptionProps = {
    label:string,
}

export default function OptionItem({label}: OptionProps) {
  return (
    <div className={styles.valueWrapper}>
        <p>{label}</p>
        <input type="text" />
    </div>
  )
}
