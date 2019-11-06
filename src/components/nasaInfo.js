import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

 const NasaInfo = () => {
    const [spacePic, setNasa] = useState([]);

    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=NGEx7XwPsCQU8uwuzQLcOwEG2FH19c4k42XGp1lg")
        .then(response => {
            console.log(response.data);
            setNasa(response.data)
        })
        .catch(error => {
            console.log( error);
        });
    }, []);

  return  <div className="container">
  { <NasaCard 
  imgUrl={spacePic.hdurl} 
  title={spacePic.title} 
  explanation={spacePic.explanation} 
  date={spacePic.date}/>} 
</div>
  };
export default NasaInfo;