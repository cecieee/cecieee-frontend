import Head from 'next/head'
import { Container, Main, Heading1} from '../styles/HomeStyles';
import TopHeader from '../components/TopHeader/TopHeader';
import Header from '../components/Header/Header';
import Footer from './../components/Footer/Footer';
import Constitution from '../components/Constitution/Constitution'

export default function About() {
  return (
    <Container>
      <Main>
      <TopHeader/>
      <Header/>
      <Constitution />  
      <Footer/>
      </Main>
    </Container>
  )
}
