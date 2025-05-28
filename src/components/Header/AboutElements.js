import React from "react";
import Link from "next/link";
import { Container2, Elements } from "./HeaderStyles";
const AboutElement = () => (
  <Container2 className="hide-container">
    <Link href="/about/execom2025" passHref>
      <Elements>ExCom 2025</Elements>
    </Link>
    <Link href="/about/execom2024" passHref>
      <Elements>ExCom 2024</Elements>
    </Link>
    <Link href="/about/execom2023" passHref>
      <Elements>ExCom 2023</Elements>
    </Link>
    <Link href="/about/timeline" passHref>
      <Elements>Timeline</Elements>
    </Link>
  </Container2>
);

export default AboutElement;
