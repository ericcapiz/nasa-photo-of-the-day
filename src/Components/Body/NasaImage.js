import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Image = styled.img `
padding: 0;
margin: 0 auto;
width: 100vh;
height: 100%;
`;

function NasaImage (){
    const [nasaPic, setNasaPic]=useState({})
    useEffect(()=>{
        axios.get('https://api.nasa.gov/planetary/apod?date=2017-01-01&api_key=kJyIRdMDp5CtmX53QRvUf90MmBwpN781eyhab7Ea').then(response=>{
            setNasaPic(response.data.url)
        });
    },[])
    return (
    <Image src={nasaPic}/>
    
    )
}
export default NasaImage;