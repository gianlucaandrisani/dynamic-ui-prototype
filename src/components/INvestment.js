import React from "react";
import "../Investment.css";
import Button from "./Button";

const Investment = () => {

    return (
        <div className="investment">
            <div className="investment-container">
                <p>
                    Capital at risk
                </p>
                <h2>
                    $0
                </h2>
                <p>
                    $0 0.00%
                </p>
            </div>
            <Button className='form' text="Make your first investment"/>
        </div>
    );

}

export default Investment; 

