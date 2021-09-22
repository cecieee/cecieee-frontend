import { Container, Main, Heading1} from '../styles/HomeStyles';
import TopHeader from '../components/TopHeader/TopHeader';
import Header from '../components/Header/Header';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from './../components/Footer/Footer';

export default function Home() {
  return (
    <Container>
      <Main>
        <TopHeader/>
        <Header/>
        <Heading1>
            Testimonials
          </Heading1>
          <Testimonials/>
          <Footer/>
          
        </Main>
    </Container>
  )
}
