import React from 'react';
import styled from 'styled-components';

const SloganStyle = styled.h1 `
    margin: 0 20px;
    letter-spacing: 3px;
    font-family: 'Orbitron', sans-serif;
    font-size: 30px;
    padding: 10px;
    text-shadow: -6px 6px blue;
`;
const SloganDiv = styled.div `

`;

const Slogan = ()=>{
    return (
        <SloganDiv>
        <SloganStyle>
            Be Salt - Be Light
    </SloganStyle>
    </SloganDiv>
    )

}

export default Slogan































