import React from 'react';
import styled from 'styled-components';
import CountSection from './CountSection';

function MemberCount() {
    return (
        <Section>
            <Title>Our strength, <Mark>Our members.</Mark></Title>
            <CountSection />
        </Section>
    )
}

export default MemberCount

const Section = styled.section`
    height:450px;
    background-size:cover;
    background-image: url("./images/team.png");
    background-attachment: fixed;
    display:flex;
    flex-direction:column;
    align-items:start;
    padding : 5em 15em;
    justify-content:center;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 45px;
  color: #fde428;
  font-family: poppins;
  margin: 2.5rem 0;
`;

const Mark = styled.span`
    font-weight: 700;
    font-size: 45px;
    color: #fff;
    font-family: poppins;
    margin: 2.5rem 0;
`;
