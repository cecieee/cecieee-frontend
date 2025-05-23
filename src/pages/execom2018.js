import Head from 'next/head'
import { Container, Main, Heading1} from '../styles/HomeStyles';
import FixedHeader from "@components/FixedHeader";
import Footer from './../components/Footer/Footer';

export default function ExeCom2018() {
  return (
    <Container>
      <FixedHeader/>
      <Main>
      
        <Heading1>
          ExeCom 2018
          </Heading1>
          <Footer/>
        </Main>
    </Container>
  )
}