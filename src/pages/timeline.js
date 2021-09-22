import { Container, Main, } from '../styles/HomeStyles';
import TopHeader from '../components/TopHeader/TopHeader';
import Header from '../components/Header/Header';

import Footer from './../components/Footer/Footer';
import Timeline from './../components/Timeline/Timeline';

export default function Home() {
  return (
    <Container>
      <Main>
        <TopHeader/>
        <Header/>
          <Timeline/>
          <Footer/>
          
        </Main>
    </Container>
  )
}
