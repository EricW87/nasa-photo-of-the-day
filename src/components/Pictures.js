import React, { useState, useEffect } from "react";
import axios from "axios";
import PictureCard from "./PictureCard"

const Pictures = props => {
    const [picture, setPicture] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${props.date.getFullYear()}-${props.date.getMonth() + 1}-${props.date.getDate()}`)
        .then(response => {
            console.log(response);
            setPicture(response.data);
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
    }, [props.date]);

    return (
        <div className="picture">
            <PictureCard
                title={picture.title} 
                date={picture.date}
                url={picture.url} 
                alt={picture.title} 
                explanation={picture.explanation}
            />
        </div>
    );
}

export default Pictures;