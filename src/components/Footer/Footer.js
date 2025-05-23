/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

import { Container,Div1,Div2,Paragraph,Heading4,Hr,Div3 } from './FooterStyles';
import {AiFillInstagram,AiFillLinkedin,AiFillFacebook,AiFillYoutube} from 'react-icons/ai';

const Footer = () => (
    <Container>
        <Div1>
            <Link href="/"><a><img
        src="/images/IEEE-SB-logo-white-web.png"
        alt="Landscape picture"
        width="190px"
        height="45px"
    /></a></Link>
        <Paragraph>Want to be an IEEE member? <br /> Get started  <Link href="https://www.ieee.org/">here</Link></Paragraph>
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
        <Div1>
        <Heading4>
                Follow Us
            </Heading4>
            <Hr/>
            <Div3><Link href="https://www.instagram.com/ieee_sb_cec/" passHref><a><li><AiFillInstagram color="white" size="2em"/> <p className="social-text">Instagram</p></li></a>
            </Link>
            
            <Link href="https://www.linkedin.com/company/cecieee/" passHref><a><li><AiFillLinkedin color="white" size="2em"/><p className="social-text">LinkedIn</p></li></a></Link>
            
            <Link href="https://www.facebook.com/IEEECEC/" passHref><a><li><AiFillFacebook color="white" size="2em"/><p className="social-text">Facebook</p></li></a></Link>
            
            <Link href="https://www.youtube.com/channel/UCXh6fVbDGCIidsVHabpZFiw" passHref><a><li><AiFillYoutube color="white" size='2em'/><p className="social-text">YouTube</p></li></a></Link>
            
            </Div3>
        </Div1>
        
    </Container>
);

export default Footer;