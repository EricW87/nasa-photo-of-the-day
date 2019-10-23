import React, { useState, useEffect } from "react";
import axios from "axios";
import PictureCard from "./PictureCard"

export default function Pictures() {
    const [picture, setPicture] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`)
        .then(response => {
            console.log(response);
            setPicture(response.data);
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
    }, []);

    return (
        <div className="picture">
            <PictureCard 
                url={picture.url} 
                alt={picture.title} 
                explanation={picture.explanation}
            />
        </div>
    );
}