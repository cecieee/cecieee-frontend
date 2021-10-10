import React from 'react';
import styled from 'styled-components';

function Counter({name,count}) {
    return (
        <CounterSection>
            <Count>{count}</Count>
            <Name>{name}</Name>           
        </CounterSection>
    )
}

export default Counter;

const CounterSection = styled.div`
    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:start;
    padding: 1em;
    margin 0 2em 0 0;

    @media ${(props) => props.theme.breakpoints.sm} {
        align-items:center;
        margin:1em 0;
      }
`;

const Count = styled.h2`
    font-weight: 700;
    font-size: 50px;
    color: #fff;
    font-family: poppins;
    margin: 0 0 14px;
`;

const Name = styled.p`
    font-weight: 600;
    font-size: 15px;
    color: #fde428;
    font-family: poppins;
`;
