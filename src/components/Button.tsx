import styles from "./Button.module.scss";

type ButtonProps = {
    label: string;
    type: "typeA" | "typeB";
    children?:JSX.Element
};

export default function Button({label, type, children}: ButtonProps) {
  return (
    <button className={styles[type]}>{label}{children}</button>
  )
};
