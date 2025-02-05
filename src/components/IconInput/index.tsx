import { ReactNode } from "react";
import Input, { InputProps } from "../Input";

type IconInputProps = {
    children: ReactNode;
} & InputProps;

export const IconInput = ({ children, ...props}: IconInputProps) => (
    <>
        <Input {...props} />
        {children}
    </>
)