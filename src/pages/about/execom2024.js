import Head from 'next/head'
import styled from "styled-components";
import { Container, Main, Heading1} from '../../styles/HomeStyles';
import FixedHeader from "@components/FixedHeader";
import Footer from '../../components/Footer/Footer';

export default function ExeCom2020() {
  return (
    <Container>
      <FixedHeader/>
      <Main>
      
      <HeadingExecom>
        ExCom 2024</HeadingExecom>
        <center>

        <br/><br/><br/><br/>
        <SocietyHead>RAS Chapter</SocietyHead>
        <UnderLine color={"#0066a1"} />
        <Container1>
        <Member>
            <Image alt="" src="/images/Excom_24/Alan George Cheriyan.JPG" />
            <Name>Alan George Cheriyan</Name>
<Position>Chairperson</Position>

          </Member>
          <Member>
            <Image alt="" src ="/images/Excom_24/Ashna sunil .JPG" />
            <Name>Ashna Sunil</Name>
<Position>Vice Chairperson</Position>

          </Member>
          <Member>
          <Image alt="" src ="/images/Excom_24/Mark J Philip.JPG" />
            <Name>Mark J Philip</Name>
<Position>Secretary</Position>

          </Member>
        </Container1>

        <br/><br/><br/><br/>
        <Section>
        <SocietyHead>WIE Affinity Group</SocietyHead>
        <UnderLine color={"#0066a1"} />
        <Container1>
        <Member>
            <Image alt="" src="/images/Excom_24/Vrindha Vinod .jpg" />
            <Name>Vrindha Vinod</Name>
<Position>Chairperson</Position>

          </Member>
          <Member>
            <Image alt="" src ="/images/Excom_24/Richa Anna George .webp" />
            <Name>Richa Anna George</Name>
<Position>Vice Chairperson</Position>

          </Member>
          <Member>
          <Image alt="" src ="/images/Excom_24/Swetha Saira John.JPG" />
            <Name>Swetha Saira John</Name>
<Position>Secretary</Position>

          </Member>
        </Container1></Section>

        <br/><br/><br/><br/>
        <SocietyHead>IAS Chapter</SocietyHead>
        <UnderLine color={"#0066a1"} />
        <Container1>
        <Member>
            <Image alt="" src="/images/Excom_24/Akash G Nair .JPG" />
            <Name>Akash G Nair</Name>
<Position>Chairperson</Position>

          </Member>
          <Member>
            <Image alt="" src ="/images/Excom_24/Archana Krishna-1.JPG" />
            <Name>Archana Krishna</Name>
<Position>Vice Chairperson</Position>

          </Member>
          <Member>
          <Image alt="" src ="/images/Excom_24/Shweta Liju.JPG" />
            <Name>Shweta Liju</Name>
<Position>Secretary</Position>

          </Member>
        </Container1>

        <br/><br/><br/><br/>
        <Section>
        <SocietyHead>IEEE SIGHT</SocietyHead>
        <UnderLine color={"#0066a1"} />
        <Container1>
        <Member>
            <Image alt="" src="/images/Excom_24/Muhammed Abnas.JPG" />
            <Name>Muhammed Abnas</Name>
<Position>Chairperson</Position>

          </Member>
        <Member>
            <Image alt="" src ="/images/Excom_24/Megha Aji.JPG" />
            <Name>Megha Aji</Name>
<Position>Vice Chairperson</Position>

          </Member>
          <Member>
          <Image alt="" src ="/images/Excom_24/Manas Ravi Chandran.JPG" />
            <Name>Manas Ravi Chandran</Name>
<Position>Secretary</Position>

          </Member>
          
        </Container1></Section>
        
       
        </center>
          <Footer/>
        </Main>
    </Container>
  )
}



const Container1 = styled.div`
  display: grid;
  width: 75%;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 640px) {
    display: block;
  }
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
  border: 3px solid ${props => props.border};
	border-radius: 50%;
	padding: 12px;
  object-fit: cover;
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

const HeadingExecom = styled.h1`
  text-align: center;
  font-family: ${props => props.theme.fonts.title};
  font-weight: 700;
  margin-top:0;
  margin-bottom:6rem;
  padding: 30px;
  font-size:2.8em;
  color:#fff;
  background-color: #0066a1;
  @media (max-width: 640px) {
    font-size:2.4rem ;
    margin-bottom: 3rem;
  }
`

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

  const Section = styled.div`
  background-color: #f6f9ff;
  padding:30px;
  `;