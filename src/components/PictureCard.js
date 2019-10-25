import React from "react";

const PictureCard = props => {
    if(!props.url) return <h3>Loading...</h3>;

    return (
        <div className="card-container">
            <div className="date">
                <p>{props.date}</p>
            </div>
            <div className="img-container">
                <img src={props.url} alt={props.alt}/>
            </div>
            <div className="title">{props.title}</div>
            <div className="explanation-container">
                <p>{props.explanation}</p>
            </div>
        </div>
    );
};

export default PictureCard;