import React from 'react';
import styled from 'styled-components';
import Logo from './Logo'
//css for main header div
const Heading = styled.div `
    color: dodgerblue;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #26457a;
    margin:0;
    padding: 10px;

`;
const Company = styled.h1 `
    font-size: 40px;
    letter-spacing: 15px;
    font-family: 'Krona One', sans-serif;

`
const Button = styled.button `
    padding: 15px;
    border-radius: 10px;
    background-color: #26457a;
    color: dodgerblue;
    -webkit-box-shadow: 5px 5px 3px 0px purple;
    -moz-box-shadow: 5px 5px 3px 0px purple;
    box-shadow: 5px 5px 3px 0px purple;
    outline: none;
    cursor:pointer;
`;

const Header = ()=>{
   return (
   <Heading>
      <Logo />
       <Company>NSA: Photo Of The Day</Company>
       <Button onClick={() => window.location.reload(false)}>Click to get a random picture</Button>
   </Heading>
   )
}

export default Header;