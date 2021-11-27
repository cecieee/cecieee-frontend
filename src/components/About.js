import React from "react";
import styled from "styled-components";
import { FeatureLine } from "./VisionMision";

const About = () => (
  <AboutContainer>
    <AboutCEC
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <AboutHead>CEC</AboutHead>
      <AboutText>
      The Government College of Engineering Chengannur (established in 1993), commonly known as CEC, is an engineering institute in the state of Kerala, India.
      The college was set up under the auspices of the Institute of Human Resources Development (IHRD) and is affiliated with the APJ Abdul Kalam Technological University (KTU).
      It currently offers undergraduate degrees in four engineering streams and two postgraduate programs.
      </AboutText>
    </AboutCEC>

    <AboutCEC
      style={{
        backgroundColor: " rgba(1, 82, 161, 0.5)",
      }}
    >
      <AboutHead>IEEE SB CEC </AboutHead>
     
      <AboutText>
      IEEE Student Branch College of Engineering Chengannur was formed in mid-1997, with the goal of keeping the students in touch with the advancing technology. 
      It is equipped with an IEEE library that was inaugurated in December 1999 and currently functions as the headquarters of IEEE SB CEC.  
      The Student Branch comes under the Kochi Hub of IEEE Kerala Section and is one of the most active Student Branches in the country. 
      IEEE SB CEC has made numerous contributions to its student  community that has received widespread recognition across the globe and is the first Student Branch in the Asia-Pacific Region to establish a Women in Engineering Affinity Group.
      </AboutText>
    </AboutCEC>
  </AboutContainer>
);

export default About;
const AboutContainer = styled.div`

  background-size: cover;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3rem;
  color:#fff;
  background-image: url(https://images.unsplash.com/photo-1631258578554-75acc38b6f99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80);
  @media (max-width: 640px) {
    display: block;
    height: auto;
  }
`;

const AboutCEC = styled.div`
  background-color: #000;
  padding: 2rem;
  margin: 2rem;
  text-align: center;
  font-size: 2rem;

`;
const AboutText = styled.p`
  font-family: 'Open Sans';
  font-size: 16px;
  line-height: 27.24px;
`;
const AboutHead = styled.p`
  font-weight: 600;
  font-size: 36px;
  color: #fff;
  font-family: poppins;
  text-align: center;
  margin: 2.5rem 0;
`;