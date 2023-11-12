import styles from "./Button.module.scss";

type ButtonProps = {
    label: string;
    type: "typeA" | "typeB";
};

export default function Button({label, type}: ButtonProps) {
  return (
    <button className={styles[type]}>{label}</button>
  )
};
