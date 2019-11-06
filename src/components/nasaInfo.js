import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

 const NasaInfo = () => {
    const [spacePic, setNasa] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=NGEx7XwPsCQU8uwuzQLcOwEG2FH19c4k42XGp1lg&date=2019-10-01`)
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
  imgUrl={spacePic.url} 
  title={spacePic.title} 
  explanation={spacePic.explanation} 
  date={spacePic.date}
  media={spacePic.media_type}/>} 
</div>
  };
export default NasaInfo;