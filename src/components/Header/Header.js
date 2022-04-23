/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import React from 'react';
import { Container,NavLink, Div1,Div2 } from './HeaderStyles';

// import sbLogo from '../../../public/images/IEEE-SB-logo.png';
import RightNav from './RightNav'
import Burger from './Burger';


const Header = () => (
    <Container>
        <Div1>
            <Link href="/"><a><img  src="/images/IEEE-SB-logo.png" alt="IEEE SB CEC LOGO" width="106px" height="25px"/></a></Link>
        </Div1>
       <Burger />
       
    </Container>
);

export default Header;