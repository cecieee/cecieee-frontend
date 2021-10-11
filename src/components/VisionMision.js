import React from "react";
import styled from "styled-components";
import LottieAnimation from "./Lottie";
import what from "../Animations/What.json";
import mission from "../Animations/Mission.json";
import vision from "../Animations/Vision.json";


const Header = () => (
  <>
    
    <Features>
      <Feature>
      <LottieAnimation lotti={what} height={120} width={120} />
        <FetureHead>What Is IEEE?</FetureHead>
        <FeatureLine />
        <FeatureText>
          The Institute of Electrical and Electronic Engineers (IEEE) is a
          global association and organization of professionals working toward
          the development, implementation and maintenance of technology-centered
          products and services.
        </FeatureText>
      </Feature>

      <Feature
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
       <LottieAnimation lotti={mission} height={120} width={120} />
        <FetureHead>Mission</FetureHead>
        <FeatureLine />
        <FeatureText>
        IEEE will be essential to the global technical community and to technical professionals everywhere,
         and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.

        </FeatureText>
      </Feature>

      <Feature>
      <LottieAnimation lotti={vision} height={120} width={120} />
        <FetureHead>Vision</FetureHead>
        <FeatureLine />
        <FeatureText>
        IEEE’s core purpose is to foster technological innovation and excellence for the benefit of humanity.
        </FeatureText>
      </Feature>
    </Features>
  </>
);

export default Header;
const Headerimage = styled.div`
  height: 100vh;
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1631119462023-21ec5afdd35e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80);
`;
const Feature = styled.div`
  height: auto;
  background: #fff;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;
const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 640px) {
    display: block;
  }
`;
export const FeatureLine = styled.div`
  width: 5rem;
  height: 6px;
  border-radius: 2rem;
  background-color: #103751;
  position: relative;
  top:5px;
  


`;
const FetureHead = styled.div`
  font-weight: 600;
  font-size: 28px;
  color: #000000;
  font-family: poppins;
  margin:0px 0px 5px 0px;
`;
const FeatureText = styled.div`
  font-family: 'Open Sans';
  color: #666;
  top:20px;
  font-size: 16px;
  position: relative;
  top:15px;
  font-weight:400px;
  line-height: 27.24px;
  text-align: center;
  padding:0px 0px 30px 0px;
  @media (max-width: 640px) {
    padding:0;
    top:10px;
  }
`;



