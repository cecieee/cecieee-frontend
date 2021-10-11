import React from 'react'
import styled from 'styled-components';
import Counter from './Counter';

function CountSection() {
    return (
        <CountContainer>
            <Counter name= "Total Members" count="373"/>
            <Counter name= "Events per year" count="120"/>
            <Counter name= "Awards Won" count="27"/>
        </CountContainer>
    )
}

export default CountSection;

const CountContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);

    @media ${(props) => props.theme.breakpoints.sm} {
        grid-template-columns: 1fr;
      }
`;
