import React from 'react';

import styled from 'styled-components';

const FooterDiv = styled.div `
color: black;
display: flex;
flex-direction: row;
justify-content: center;
font-size: 20px;
background-color: #26457a;
position: fixed;
left: 0;
bottom: 0;
width: 100%
`;

const Logo2 = styled.h1 `
    background-color: black;
    font-size: 10px;
    padding: 10px;
    color: dodgerblue;
    border-radius: 10px;
    -webkit-box-shadow: 5px 5px 5px 0px purple;
    -moz-box-shadow: 5px 5px 5px 0px purple;
    box-shadow: 5px 5px 5px 0px purple;
`;
const  LogoDiv = styled.div `
    margin 0 20px;
    display:flex;
    align-items:center;
`;
const Heading3 = styled.h3 `
text-shadow: -3px 4px purple;
`;

const Footer =()=>{
    return (
        <FooterDiv>
            <LogoDiv>
            <Logo2>NASA</Logo2>
            </LogoDiv>
            <Heading3>&#169; 2020</Heading3>
            
           
        </FooterDiv>
    )
}
 export default Footer