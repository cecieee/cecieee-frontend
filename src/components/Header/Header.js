/* eslint-disable @next/next/link-passhref */
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import { Container,NavLink, Div1,Div2 } from './HeaderStyles';
import sbLogo from '../../../public/images/IEEE-SB-logo.png';
import RightNav from './RightNav'
import Burger from './Burger';

const Header = () => (
    <Container>
        <Div1>
            <Link href="/"><a><Image
        src={sbLogo}
        alt="Landscape picture"
        width="300px"
        height="70px"
    /></a></Link>
        </Div1>
        <Burger />
    </Container>
);

export default Header;