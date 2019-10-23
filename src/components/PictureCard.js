import React from "react";

const PictureCard = props => {
    return (
        <div className="object-container">
            <div className="img-container">
                <img src={props.url} alt={props.alt}/>
            </div>
            <div className="explanation-container">
                <p>{props.explanation}</p>
            </div>
        </div>
    );
};

export default PictureCard;