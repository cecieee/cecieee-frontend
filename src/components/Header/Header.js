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
            <Link href="/"><a><img  src="/images/25_year_logo_IEEE_SB_CEC.png" alt="IEEE SB CEC LOGO" width="59px" height="59px"/></a></Link>
        </Div1>
       <Burger />
       
    </Container>
);

export default Header;