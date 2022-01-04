import React from 'react';
import Link from 'next/link';
import { Container2,Elements} from './HeaderStyles';
const ChapterElement = ()=>(
    <Container2 className="hide-container">
        <Link href="/cs" passHref><Elements>Computer Society</Elements></Link>
        <Link href="/ras" passHref><Elements>Robotics and Automation Society</Elements></Link>
        <Link href="/pes" passHref><Elements>Power and Energy Society</Elements></Link>
        <Link href="/ims" passHref><Elements>Instrumentation and Measurement Society</Elements></Link>
        <Link href="/sscs" passHref><Elements>Solid State Circuit Society</Elements></Link>
        <Link href="/ias" passHref><Elements>Industry Applications Society</Elements></Link>
        <Link href="/sight" passHref><Elements>IEEE SIGHT</Elements></Link>
        <Link href="/wie" passHref><Elements>WIE</Elements></Link>
        
    </Container2>
);

export default ChapterElement;