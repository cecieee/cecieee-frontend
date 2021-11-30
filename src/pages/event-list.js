import Head from 'next/head'
import { Container, Main, Heading1} from '../styles/HomeStyles';
import TopHeader from '../components/TopHeader/TopHeader';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BottomFooter from '../components/BottomFooter/BottomFooter';
import EventHero from '../components/EventHero/EventHero';
export default function Event() {
  return (
    <Container>
      <Main>
      <TopHeader/>
      <Header/>
        <Heading1>
          Event List
          </Heading1>
        <EventHero/>
          <Footer/>
          <BottomFooter/>
        </Main>
        
    </Container>
  )
}
