import React from "react";
import '../TabNavigation.css';
import Tab from "./Tab";

const TabNavigation = ({selectedChat, setSelectedChat}) => {

    const tabs = [
        {id: 'superbank', text:'SuperBank'},
        {id: 'shopping', text:'Shopping'},
    ]

   return (
       <div className="tab-navigation">
        {tabs.map((tab) => (
            <Tab 
            key={tab.id}
            className={selectedChat === tab.id ? "active" : "default"}
            text={tab.text}
            onClick={()=> setSelectedChat(tab.id)}
            />
        ))}
       </div>
   )
};

export default TabNavigation;