import React from 'react';
import { Container} from './TestimonialsStyles';
import MessageCard from './MessageCard';
import BlueHorizontal from '../BlueHorizontal'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
const Testimonials = ()=>(
    <Container>
        <BlueHorizontal><div /></BlueHorizontal>
        <AliceCarousel mouseTracking autoPlay autoPlayInterval="8000" animationType="slide" disableDotsControls disableButtonsControls infinite autoPlayStrategy="none">

            <MessageCard p="My stint with IEEE student branch CEC and WIE student affinity group was one of the most value-adding experiences I had during my college days. Various workshops, seminars and access to journals that my IEEE membership gave me access to, had helped significantly in expanding my technical knowledge base. In addition to this volunteering with the student branch for its activities helped in grooming my organizing skills and time management skills. It also helped a lot in polishing my communication skills and team skills, all which helped later in my professional space too. The way the group works, keeping the interests of members and the whole institution in mind is commendable. Various awards, recognition and opportunities that the group and members have got in the past at regional and international levels speak for their hard work and dedication. I am sure the group will continue to work in the same momentum in the years to come and add value to all stakeholders."  img="https://static.thenounproject.com/png/895245-200.png" name="Seenu Chrispin"
            designation="WIE Chairperson, IEEE SB CEC 2004"/>

           <MessageCard img="https://static.thenounproject.com/png/895245-200.png"
             name="Jaison Abey Sabu"  p="In an era where the world is getting increasingly focused on sustainable growth, IEEE-CEC has been a prime example of sustained growth and achievements. To win an award or be at the top once or twice is reasonably easy, but maintaining that across generations is quite challenging. IEEE-CEC has been accumulating significant achievements for the last 23 years. As a former chair of the SB, I feel proud to see the sustained growth and accolades that the student branch is able to drive."designation="Chairman, IEEE SB CEC 2006"/>

            <MessageCard p="IEEE CEC has always stood out as an exemplary student branch, made possible only because of the selfless commitment and infectious passion shown by countless volunteers. It can help you become a thorough professional, a master technician, a skillful organizer and/or an inspirational leader – it all depends on how you use it. IMO it is a must-have experience in your college and will influence your career in more ways than you can imagine."img="https://static.thenounproject.com/png/895245-200.png" name="Leroy Vargis" designation="Chairman, IEEE SB CEC 2015"/>

            <MessageCard p="One thing that makes CEC an exemplary student branch is its consistency. Since its start in 1996, the SB has continuously performed at the top level. Recently, the focus on diversification into multiple societies and building amazing chapters giving more opportunities for volunteers and more value to members is also a commendable one." 
            
            img="https://static.thenounproject.com/png/895245-200.png"  name="Arjun R Pillai"  designation="Secretary, IEEE SB CEC 2009"/>

            <MessageCard p="Our journey has only brought us higher. IEEE computer society gave and continues to give me great opportunities for personal knowledge and career improvement." name="Sooraj P" designation="CS Chairman, IEEE SB CEC 2017"
            img="https://static.thenounproject.com/png/895245-200.png" 
            />
            <MessageCard p="People talk about job security. No one can give you that. Job security depends on the company. What IEEE can do – and I use the phrase carefully – is offer security. You can be the most valuable engineer by being current in technology and by networking with others. If you take advantage of the products and services that IEEE offers, you will become the most valuable engineer in your organization. And if your job goes away, you’ll have no trouble finding another." 
            
            img="https://static.thenounproject.com/png/895245-200.png"  name="Karthik Iyer"  designation="Chairman , IEEE SB CEC 2017"/>

            </AliceCarousel>
            
            
    </Container>
    
);

export default Testimonials;