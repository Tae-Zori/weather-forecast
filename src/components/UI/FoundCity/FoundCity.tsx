import React from "react";
import style from "./FoundCity.module.scss"

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
}

const FoundCity = ({ children, ...props }: BtnProps): JSX.Element =>  {
    console.log(children.split(""));
    
    return(
        
            <button className={style.btn}{...props}>
                {children.split("").map((el)=>
                    <span className={style.btn__letter}>{el}</span>
                )}
            </button> 
        
    )
}

export default FoundCity