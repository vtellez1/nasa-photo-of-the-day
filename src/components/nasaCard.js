import React from "react";
import styled from "styled-components";

const ContainerCard = styled.div`
width: 95%;
height: 90%;
background-color: rgba(255,255,255,.4);
margin: 2rem 0rem;
`
const BottomPart = styled.div`
display: flex;
align-items: center;
padding: 2rem;
`

const TopPart = styled.div`
`

const Title = styled.h1`  
font-size: 3rem;  color: white;
background-color: black;
font-family: 'Bowlby One SC', cursive;
margin: 0rem;
`

const Date = styled.h4`
background-color: #DCDCDC;
margin: 0rem;
`

const Media = styled.div`
img{
  border: 2px solid black;
  box-shadow: 5px 10px;
max-width: 100%;
height: auto;}
`

const nasaCard = props => {
    return (
      <ContainerCard>

        <TopPart>
           <Title>{props.title}</Title>
          <Date>Date: {props.date}</Date>
        </TopPart>

        <BottomPart>
            <Media>
              {props.media === "video" ? (
                <iframe title ="spacevideo" width="1080" height="720" alt="video of the day" src={props.imgUrl}/>
              ) : (<img alt="random space" src={props.imgUrl}/>
              )}
            </Media>
        </BottomPart>
      </ContainerCard>
    );
  };
  
  export default nasaCard;