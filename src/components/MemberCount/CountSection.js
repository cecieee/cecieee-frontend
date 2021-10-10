import React from 'react'
import styled from 'styled-components';
import Counter from './Counter';

function CountSection() {
    return (
        <CountContainer>
            <Counter name= "Total Members" count="600"/>
            <Counter name= "Events" count="100"/>
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
