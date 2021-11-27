import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import { Container,Div1,Div2,Paragraph,Heading4,Hr,Div3 } from './FooterStyles';
import sbWhiteLogo from '../../../public/images/IEEE-SB-logo-white-web.png';

const Footer = () => (
    <Container>
        <Div1>
            <Link href="/"><a><Image
        src={sbWhiteLogo}
        alt="Landscape picture"
        width="190px"
        height="45px"
    /></a></Link>
        <Paragraph>Want to be an IEEE member? <br /> Get started  <Link href="https://www.ieee.org/">here</Link></Paragraph>
        </Div1>
        <Div1>
            <Heading4>
                Recent News
            </Heading4>
            <Hr/>
        
        </Div1>
        <Div1>
        <Heading4>
                Follow Us
            </Heading4>
            <Hr/>
        
        </Div1>
        <Div2>
            <Heading4>
                Contact Us
            </Heading4>
            <Hr/>
        <Paragraph>IEEE Student Branch,<br/>
College of Engineering, Chengannur
Alapuzha, Kerala<br/>
Pin:689121<br/>
Email: chairman_ieee@ceconline.edu
</Paragraph>

        </Div2>
        
    </Container>
);

export default Footer;