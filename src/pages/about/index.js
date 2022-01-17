import Head from "next/head";
import { Container, Main, Heading1 } from "@styles/HomeStyles";
import FixedHeader from "@components/FixedHeader";
import {
  StyledAcheivements,
  StyledBanner,
  StyledMain,
} from "@styles/AboutStyles";
import Footer from "@components/Footer/Footer";
import BottomFooter from "@components/BottomFooter/BottomFooter";
import UnderLinedTitle from "@components/UnderlinedTitle.styled";
import { BlueLine } from "@components/BlueHorizontal";
import BlueHorizontal from "@components/BlueHorizontal";
import Achievement from "@components/Achievements/Achievement";

export default function About() {
  return (
    <Container>
      <FixedHeader/>
      <Main>
        
        <Heading1>About Us</Heading1>
        <BlueHorizontal><div /></BlueHorizontal>
        <StyledMain>
          <StyledMain.Paragraph>
            The IEEE Student Branch of College of Engineering, Chengannur formed
            on the 16th of September, 1996. What started as a small initiative
            for the technical advancement of the students, is now one of the
            most vibrant Student Branches of the Asia Pacific Region (Region 10)
            and Kerala Section. The student branch has always taken pride in
            raising the calibre, nurturing technical interests, exploring
            managerial skills, enculturating fidelity, accelerating career
            goals, strengthening ambition and brightening the future of its
            student members thereby contributing productive and socially
            committed engineers to society. Through seminars, workshops,
            technical festivals and competitions, the Student Branch is ardent
            in helping its student members to update their knowledge and skills
            with technology which is advancing by leaps and bounds.
          </StyledMain.Paragraph>
          <StyledMain.Paragraph>
            A Developer Community (DevCom) was created with the sole intention
            of developing and fostering technical expertise in students by
            providing them with a platform to acquire the much needed technical
            skills in today&lsquo;s times.
          </StyledMain.Paragraph>
        </StyledMain>
        <StyledAcheivements>
          <Heading1>Achievements</Heading1>
          <BlueHorizontal><div /></BlueHorizontal>
          <Achievement />
        </StyledAcheivements>
        <Footer />
        <BottomFooter />
      </Main>
    </Container>
  );
}
