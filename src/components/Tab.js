import React from "react";
import '../TabNavigation.css';

const Tab = ({text, Icon, onClick, onSubmit, className}) => {
   return (
       <div onClick={onClick} onSubmit={onSubmit} className={`tab ${className}`}>
           {text && <span>{text}</span>}
           {Icon && <img src={Icon}></img>}
       </div>
   )
};

export default Tab;