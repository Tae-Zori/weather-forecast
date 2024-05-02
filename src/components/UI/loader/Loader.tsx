import React from "react";
import cloud from "./../../../img/loader/cloud.png"
import cl from "./Loader.module.scss"

interface CustomCSSProperties extends React.CSSProperties {
    '--i'?: number;
  }

const Loader = () => {

    return (
        <div className={cl.loader}>
            <div className={cl.loader__container}>
                <img src={cloud} alt="cloud" className={cl.loader__cloud} /> 
                <div className={cl.loader__rain}>
                    <span style={{"--i": 11} as CustomCSSProperties}></span>
                    <span style={{"--i": 12} as CustomCSSProperties}></span>
                    <span style={{"--i": 15} as CustomCSSProperties}></span>
                    <span style={{"--i": 17} as CustomCSSProperties}></span>
                    <span style={{"--i": 18} as CustomCSSProperties}></span>
                    <span style={{"--i": 13} as CustomCSSProperties}></span>
                    <span style={{"--i": 14} as CustomCSSProperties}></span>
                    <span style={{"--i": 19} as CustomCSSProperties}></span>
                    <span style={{"--i": 20} as CustomCSSProperties}></span>
                    <span style={{"--i": 10} as CustomCSSProperties}></span>
                    <span style={{"--i": 18} as CustomCSSProperties}></span>
                    <span style={{"--i": 13} as CustomCSSProperties}></span>
                    <span style={{"--i": 14} as CustomCSSProperties}></span>
                    <span style={{"--i": 19} as CustomCSSProperties}></span>
                    <span style={{"--i": 20} as CustomCSSProperties}></span>
                    <span style={{"--i": 10} as CustomCSSProperties}></span>
                </div> 
            </div>
        </div>
    )
};

export default Loader;
