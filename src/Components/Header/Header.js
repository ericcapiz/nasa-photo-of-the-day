import React from 'react';
import styled from 'styled-components';
import Slogan from './slogan'
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
const Header = ()=>{
   return (
   <Heading>
      <Logo />
       <Company>NASA: Photo Of The Day</Company>
   </Heading>
   )
}

export default Header;