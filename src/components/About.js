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
        The Government College of Engineering Chengannur (established in 1993),
        commonly known as CEC, is an engineering institute in the state of
        Kerala, India. The college is located in Chengannur, Alappuzha. The
        college was set up under the auspices of the Institute of Human
        Resources Development (IHRD), is affiliated to the Cochin University of
        Science and Technology, Kochi, and the courses are recognised by AICTE
        and accredited by NBA, the National Board of Accreditation, India. CEC
        is the Best Engineering College after Model Engineering College in
        Kerala under KTU, as per the statistics of Director of Technical
        Education, Kerala, who is the final voice of technical education in
        Kerala State.
      </AboutText>
    </AboutCEC>

    <AboutCEC
      style={{
        backgroundColor: " rgba(1, 82, 161, 0.5)",
      }}
    >
      <AboutHead>IEEE SB CEC </AboutHead>
     
      <AboutText>
      An IEEE student branch was formed in CEC in mid-1997, with the goal of keeping the students in touch with technological advances. 
      An IEEE library was inaugurated in December 1999.
       The library houses journals and magazines of IEEE. 
      The IEEE Student Branch comes under the IEEE Kerala Section. 
      CEC’s IEEE student members have presented projects at State and National level conferences and competitions. 
      An IEEE Robotics Initiative Program has begun, with groups designing robots.
     IEEE-CEC is known for its consistent achievements since its inception in 1996. 
     IEEE-CEC is also known for many firsts including being the first IEEE Student Branch in the world to win the IEEE WIE SB Affinity Group of the year award in 2005.
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
  background-color: red;
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