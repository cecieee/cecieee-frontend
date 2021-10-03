import { Container, Main, Heading1} from '../styles/HomeStyles';
import TopHeader from '../components/TopHeader/TopHeader';
import Header from '../components/Header/Header';
import VisionMision from './../components/VisionMision';
import About from '../components/About';
import { Slider } from '../components/Slider';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from './../components/Footer/Footer';

export default function Home() {
  return (
    <Container>
      <Main>
        <TopHeader/>
        <Header/>
        <Slider />
        <VisionMision/>
          <About/>
        <Heading1>
            Testimonials
          </Heading1>
          <Testimonials/>
          <Footer/>
        </Main>
    </Container>
  )
}
