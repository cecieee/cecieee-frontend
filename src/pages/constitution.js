import Head from 'next/head'
import { Container, Main, Heading1} from '../styles/HomeStyles';
import FixedHeader from "@components/FixedHeader";
import Footer from './../components/Footer/Footer';
import Constitution from '../components/Constitution/Constitution'

export default function About() {
  return (
    <Container>
      <FixedHeader/>
      <Main>
      
      <Constitution />  
      <Footer/>
      </Main>
    </Container>
  )
}
