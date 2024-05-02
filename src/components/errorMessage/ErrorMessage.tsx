import React from "react";
import style from "./ErrorMessage.module.scss"
interface ErrProps{
    errMessage:string 
}
const ErrorMassage = ({errMessage}:ErrProps) => {
    return(
        <article className={style.err}>
            <h3>
                {errMessage}
            </h3>
        </article>
    )
}

export default ErrorMassage