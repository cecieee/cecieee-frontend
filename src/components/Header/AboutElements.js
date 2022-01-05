import React from "react";
import Link from "next/link";
import { Container2, Elements } from "./HeaderStyles";
const AboutElement = () => (
  <Container2 className="hide-container">
    <Link href="/about/execom2020" passHref>
      <Elements>ExCom 2020</Elements>
    </Link>
    <Link href="/about/timeline" passHref>
      <Elements>Timeline</Elements>
    </Link>
  </Container2>
);

export default AboutElement;
