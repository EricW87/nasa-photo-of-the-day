import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Pictures() {
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod`)
        .then(response => {
            console.log(response);
            setPictures(response.data);
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
    }, []);

    return (
        <div className="pictures">
            {pictures.map((pic) =>{
                return (
                    <div>
                        <img src={pic.url}/>
                    </div>
                );
            })}

        </div>
    );
}