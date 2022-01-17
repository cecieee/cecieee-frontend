import Head from 'next/head'
import { Container, Main, Heading1} from '../styles/HomeStyles';
import FixedHeader from "@components/FixedHeader";
import Footer from './../components/Footer/Footer';

export default function ExeCom2017() {
  return (
    <Container>
      <FixedHeader/>
      <Main>
      
        <Heading1>
          ExeCom 2017
          </Heading1>
          <Footer/>
        </Main>
    </Container>
  )
}