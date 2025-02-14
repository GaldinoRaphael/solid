import { ButtonHTMLAttributes, CSSProperties, MouseEvent, ReactNode } from "react";
import classnames from "classnames"; // Para combinar classes dinamicamente
import Styles from "./Button.module.css";

type ButtonProps = {
  children?: ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large"; // Define diferentes tamanhos
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classnames(Styles.button, Styles[variant], Styles[size])}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
