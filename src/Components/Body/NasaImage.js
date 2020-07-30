import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'

const BodyDiv = styled.div `
display: flex;
flex-flow:row;
justify-content: space-evenly;
padding: 0;
width: 100%;
height: 100%;
background-color: black;

img{
    width:600px;
    height: 700px;
}

`;
const TextDiv = styled.div `
color:purple;
display: flex;
flex-flow:column;
justify-content:center;
align-items:center;
padding: 0 25px;

`;

function NasaImage (){
    const [nasaData, setNasaData]=useState([])
    const randomNum = Math.floor(Math.random() * 31) + 1;
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    useEffect(()=>{
        axios.get(`https://api.nasa.gov/planetary/apod?date=2017-${randomMonth}-${randomNum}&api_key=kJyIRdMDp5CtmX53QRvUf90MmBwpN781eyhab7Ea`).then(response=>{
            console.log(response);
            setNasaData(response.data)
        });
    },[])
    return (
        <BodyDiv>
    <img src={nasaData.url} alt=''/>
    <TextDiv>
    <h2> {nasaData.title}</h2>
    <h3>{nasaData.explanation}</h3>
    <h3>{nasaData.date}</h3>
    </TextDiv>
    </BodyDiv>
    
    )
}
export default NasaImage;