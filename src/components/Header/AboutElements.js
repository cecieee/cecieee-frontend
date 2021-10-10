import React from 'react';
import Link from 'next/link';
import { Container2,Elements} from './HeaderStyles';
const AboutElement = ()=>(
    <Container2 className="hide-container">
        <Link href="/excom-2020" passHref><Elements>ExCom 2020</Elements></Link>
        <Link href="/excom-2019" passHref><Elements>ExCom 2019</Elements></Link>
        <Link href="/excom-2018" passHref><Elements>ExCom 2018</Elements></Link>
        <Link href="/excom-2017" passHref><Elements>ExCom 2017</Elements></Link>
        <Link href="/timeline" passHref><Elements>Timeline</Elements></Link>
    </Container2>
);

export default AboutElement;