import Head from 'next/head'
import { Container, Main, Heading1} from '../styles/HomeStyles';
import TopHeader from '../components/TopHeader/TopHeader';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BottomFooter from '../components/BottomFooter/BottomFooter';
import EventHero from '../components/EventHero/EventHero';
import BlueHorizontal from '@components/BlueHorizontal';

export default function Event() {
  return (
    <Container>
      <Main>
      <TopHeader/>
      <Header/>
        <Heading1>
          Events
          </Heading1>
          <BlueHorizontal><div /></BlueHorizontal>
        <EventHero/>
          <Footer/>
          <BottomFooter/>
        </Main>
        
    </Container>
  )
}
