/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import React from 'react';
import { Container,NavLink, Div1, Span } from './TopHeaderStyles';
const TopHeader = () => (
    <Container>
        <Div1>
    <Link href="https://www.ieee.org/" passHref><NavLink>IEEE.org</NavLink></Link><Span>|</Span>
    <Link href="https://ieeexplore.ieee.org/Xplore/home.jsp" passHref><NavLink>IEEE Xplore Digital Library</NavLink></Link><Span>|</Span>
    <Link href="https://standards.ieee.org/" passHref><NavLink>IEEE Standards</NavLink></Link><Span>|</Span>
    <Link href="https://spectrum.ieee.org/" passHref><NavLink>IEEE Spectrum</NavLink></Link><Span>|</Span>
    <Link href="https://ieeekerala.org/" passHref><NavLink>IEEE Kerala Section</NavLink></Link><Span>|</Span>
    <Link href="https://www.ieeer10.org/" passHref><NavLink>IEEE Region 10</NavLink></Link><Span>|</Span>
    <Link href="https://www.ieee.org/sitemap.html" passHref><NavLink>More Sites</NavLink></Link>
    </Div1>
    </Container>
);

export default TopHeader;