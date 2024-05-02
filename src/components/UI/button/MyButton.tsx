import React from "react";
import style from "./MyButton.module.scss"

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
}

const MyButton = ({ children, ...props }: BtnProps): JSX.Element => {
    return (
        <button className={style.btn}{...props}>
            {children}
        </button>
    );
}

export default MyButton;