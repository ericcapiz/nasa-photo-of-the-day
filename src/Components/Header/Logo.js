import React from 'react'
import styled from 'styled-components';
import Image from '../../Images/nasa.png';



const LogoImg= styled.img `
    width: 80px;
    height: 80px;
    -webkit-box-shadow: 10px 10px 5px 0px purple;
-moz-box-shadow: 10px 10px 5px 0px purple;
box-shadow: 10px 10px 5px 0px purple;
`;

const Logo = ()=>{
    return (
        <LogoImg src={Image}>
    
    </LogoImg>
    )
}

export default Logo