import { Container, Main, Heading1} from '../styles/HomeStyles';
import FixedHeader from '../components/FixedHeader'
import VisionMision from './../components/VisionMision';
import About from '../components/About';
import { Slider } from '../components/Slider';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from './../components/Footer/Footer';
import BottomFooter from './../components/BottomFooter/BottomFooter';
import Ieeefamily from '../components/Ieeefamily/Ieeefamily';
import MemberCount from '../components/MemberCount/MemberCount';
import Benifits from '../components/Benifits/Benifits';

export default function Home() {
  return (
    <Container>
      <Main>
        <FixedHeader/>
        <Slider />
        <VisionMision/>
          <About/>
          <Heading1>Our IEEE family</Heading1>
          <Ieeefamily />
          <MemberCount />
          <Benifits />
          <Heading1>
            Testimonials
          </Heading1>
          <Testimonials/>
          <Footer/>
          <BottomFooter/>
        </Main>
    </Container>
  )
}
