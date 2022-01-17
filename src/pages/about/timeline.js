import { Container, Main, } from "@styles/HomeStyles";
import FixedHeader from "@components/FixedHeader";

import Footer from '@components/Footer/Footer';
import Timeline from '@components/Timeline/Timeline';

export default function TimeLine() {
  return (
    <Container>
       <FixedHeader/>
      <Main>
     
          <Timeline/>
          <Footer/>
          
        </Main>
    </Container>
  );
}
