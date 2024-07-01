import React from "react";
import "../Investment.css";

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
            <button className='form-button'>Make your first investment</button>
        </div>
    );

}

export default Investment; 

