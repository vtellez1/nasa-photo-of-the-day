import React from "react";

const nasaCard = props => {
    return (
      <div className="nasa-card">
        <h1>{props.title}</h1>
        <h4>{props.date}</h4>
        <img className="nasa-image" alt="random space" src={props.imgUrl}/>
        <p>{props.explanation}</p>
      </div>
    );
  };
  
  export default nasaCard;