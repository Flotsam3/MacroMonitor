import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
    label: string
    type?: "button" | "submit" | "reset" | undefined
    appearance: "typeA" | "typeB"
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    children?:JSX.Element
};

export default function Button({label, type, appearance, onClick, children}: ButtonProps) {
  return (
    <button className={styles[appearance]} type={type} onClick={onClick}>{label}{children}</button>
  )
};
