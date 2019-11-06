import React from "react";

const nasaCard = props => {
    return (
      <div className="nasa-card">
        <h1>{props.title}</h1>
        <h4>{props.date}</h4>
        <div className="media">
          {props.media === "video" ? (
            <iframe title ="spacevideo" width="1080" height="720" alt="video of the day" src={props.imgUrl}/>
          ) : (<img alt="random space" src={props.imgUrl}/>
          )}
        </div>
        <p>{props.explanation}</p>
      </div>
    );
  };
  
  export default nasaCard;