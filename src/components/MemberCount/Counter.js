import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';

function Counter({name,count}) {
    return (
        <CounterSection>
            <Count><CountUp start = {7} end={count} duration={6.57} useEasing={true}/></Count> 
            <Name>{name}</Name>  
        </CounterSection>
    )
}

export default Counter;

const CounterSection = styled.div`
    background-color: ${props => props.theme.colors.primary1};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:start;
    padding: 1em;
    margin 2em;

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
