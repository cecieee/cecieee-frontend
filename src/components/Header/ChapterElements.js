import React from 'react';
import Link from 'next/link';
import { Container2,Elements} from './HeaderStyles';
const ChapterElement = ()=>(
    <Container2 className="hide-container">
        <Link href="/computer-society" passHref><Elements>Computer Society</Elements></Link>
        <Link href="/robotics-and-automation-society" passHref><Elements>Robotics and Automation Society</Elements></Link>
        <Link href="/power-and-energy-society" passHref><Elements>Power and Energy Society</Elements></Link>
        <Link href="/instrumentation-and-measurement-soceity" passHref><Elements>Instrumentation and Measurement Society</Elements></Link>
        <Link href="/solid-state-circuit-society" passHref><Elements>Solid State Circuit Society</Elements></Link>
        <Link href="/industry-applications-society" passHref><Elements>Industry Applications Society</Elements></Link>
        <Link href="/ieee-sight" passHref><Elements>IEEE SIGHT</Elements></Link>
        <Link href="/women-in-engineering" passHref><Elements>WIE</Elements></Link>
        
    </Container2>
);

export default ChapterElement;