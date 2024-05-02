import React from "react"
import style from "./MyInput.module.scss";
import MyButton from "../button/MyButton";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

const MyInput = (props: InputProps) => {
    return (
        <>
            <input className={style.input} {...props} />
        </>
    )
}
export default MyInput