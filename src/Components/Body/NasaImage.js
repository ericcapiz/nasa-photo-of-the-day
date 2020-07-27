import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'

const BodyDiv = styled.div `
display: flex;
flex-flow:row;
justify-content: space-evenly;

width: 100%;
height: 100%;
background-color: black;

img{
    width:100vh;
}

`;
const TextDiv = styled.div `
color:purple;
display: flex;
flex-flow:column;
justify-content:center;

`;

function NasaImage (){
    const [nasaPic, setNasaPic]=useState({})
    const [nasaTitle, setNasaTitle]=useState("")
    const [nasaDate, setNasaDate]=useState("")
    useEffect(()=>{
        axios.get('https://api.nasa.gov/planetary/apod?date=2017-01-01&api_key=kJyIRdMDp5CtmX53QRvUf90MmBwpN781eyhab7Ea').then(response=>{
            console.log(response);
            setNasaPic(response.data.url)
            setNasaTitle(response.data.title)
            setNasaDate(response.data.date)
        });
    },[])
    return (
        <BodyDiv>
    <img src={nasaPic}/>
    <TextDiv>
    <h2> Title: {nasaTitle}</h2>
    <h2></h2>
    <h2>Date: {nasaDate}</h2>
    </TextDiv>
    </BodyDiv>
    
    )
}
export default NasaImage;