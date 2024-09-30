 import React from "react";
 import '../Button.css';

 const Button = ({text, Icon, onClick, onSubmit, className}) => {
    return (
        <button onClick={onClick} onSubmit={onSubmit} className={`button ${className}`}>
            {text && <span>{text}</span>}
            {Icon && <img src={Icon}></img>}
        </button>
    )
 };

 export default Button;