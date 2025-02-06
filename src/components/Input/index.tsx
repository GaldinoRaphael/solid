import { CSSProperties, InputHTMLAttributes, ReactNode } from "react";
import Styles from "./Input.module.css";

export type InputProps = {
  variant?: "primary" | "secondary";
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  variant = "primary",
  type = "text",
  ...props
}: InputProps) => {
  return (
    <input
      className={Styles[variant]}
      type={type}
      {...props}
    />
  );
};

export default Input;
