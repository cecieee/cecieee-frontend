import Head from 'next/head'
import { Container, Main, Heading1} from '../styles/HomeStyles';
import FixedHeader from "@components/FixedHeader";
import Footer from './../components/Footer/Footer';
import styled from 'styled-components';
import LottieAnimation from "../components/Lottie";
import mission from "../Animations/Mission.json";
import vision from "../Animations/Vision.json";



export default function About() {
  return (
    <Container>
       <FixedHeader/>
      <Main style={{
          backgroundColor: "#000000",
        }}>
     
      <Container2>
        <Heading1>
          <Logo src="/images/society/sight-logo.png" />
          <center><a href="https://sight.ieee.org/" target="_blank" rel="noreferrer"><Button >Go to Website</Button></a></center>
          </Heading1></Container2>
          <center><br/><br/>
          <ContainerMission>
          <Features>
      <Feature>
      <LottieAnimation lotti={mission} height={120} width={120} />
        <FetureHead>Mission</FetureHead>
        <FeatureLine />
        <FeatureText1>
        To be the leading provider of technical information, community services, and personalized services to the world’s computing professionals.
        </FeatureText1>
      </Feature>

      <Feature
        style={{
          backgroundColor: "#25282d",
        }}
      >
       <LottieAnimation lotti={vision} height={120} width={120} />
        <FetureHead>Vision</FetureHead>
        <FeatureLine />
        <FeatureText>
        Be essential to the global technical community and computer professionals everywhere and be universally recognized for the contributions of technical professionals in developing and applying technology to improve global conditions.
        </FeatureText>
      </Feature></Features></ContainerMission><br/><br/>
      <Section>
        <SocietyHead>ExCom</SocietyHead>
        <UnderLine color={"blue"} />
        <Container1>
        <Member>
            <Image alt="" src="/images/Excom_23/Ravisankar-V.webp" />
            <Name>Ravisankar V</Name>
<Position>SIGHT Coordinator</Position>

          </Member>
        </Container1></Section>
      </center>

          <Footer/>
        </Main>
    </Container>
  )
}

const Logo = styled.img`
width:300px;
height:auto;
@media (max-width: 640px) {
    width:200px;
    height:auto;
  }
`;

const Container2 = styled.div`
height:50vh;
margin:0;
background-image: url("/images/Society_bg.png");
background-size: contain;
`;

const Button = styled.div`
background-color: #000000;
width:200px;
padding:10px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
font-size:14px;
color:#fff;
border-radius: 10px;
`;

const Feature = styled.div`
  height: auto;
  background: #25282d;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;
  
  const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 640px) {
    display: block;
  }
`;

  const FeatureLine = styled.div`
  width: 5rem;
  height: 6px;
  border-radius: 2rem;
  background-color: blue;
  position: relative;
  top:5px;
  


`;
  const FetureHead = styled.div`
  font-weight: 600;
  font-size: 28px;
  color: #fff;
  font-family: poppins;
  margin:0px 0px 5px 0px;
`;

  const FeatureText = styled.div`
  font-family: 'Open Sans';
  color: #9ca8b2;
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

const ContainerMission = styled.div`
width:75%;
background: #25282d;
border-radius: 10px;
`;

const Section = styled.div`
  background-color: #f6f9ff;
  padding:30px;
`;

const Member = styled.div`
  height: auto;
  padding: 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  `;

const Image = styled.img`
  height: 180px;
  width:180px;
  border: 5px solid ${props => props.border};
	border-radius: 50%;
	padding: 12px;
  `;



const Name = styled.div`
font-weight: 600;
font-size: 18px;
color: #1D3547;
font-family: poppins;
margin:15px 0px 5px 0px;
@media (max-width: 640px) {
    font-size: 18px;
  }
`;

const Position = styled.div`
  font-family: 'Open Sans';
  color: #666;
  font-size: 13px;
  position: relative;
  font-weight:400px;
  text-align: center;
  padding:0px 0px 30px 0px;
  @media (max-width: 640px) {
    padding:0;
    font-size: 12px;
  }
`;

const SocietyHead = styled.div`
  font-weight: 600;
  font-size: 28px;
  color: #1D3547;
  font-family:${props => props.theme.fonts.title};
  margin:0px 0px 5px 0px;
  @media (max-width: 640px) {
  font-size: 24px;
  }
`;

const UnderLine = styled.div`
  width: 8rem;
  height: 8px;
  border-radius: 1rem;
  background-color: ${props => props.color};
  position: relative;
  top:5px;
  margin-bottom: 3rem;
  `;

const Container1 = styled.div`
  display: grid;
  width: 75%;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 640px) {
    display: block;
  }  `;

const FeatureText1 = styled.div`
font-family: 'Open Sans';
  color: #9ca8b2;
  font-size: 16px;
  position: relative;
  top:30px;
  margin-bottom: 60px;
  font-weight:400px;
  line-height: 27.24px;
  text-align: center;
  padding:0px 0px 30px 0px;
  @media (max-width: 640px) {
    padding:0;
    top:10px;
  }

`;