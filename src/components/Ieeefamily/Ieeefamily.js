import React from "react";
import styled from "styled-components";
import BlueHorizontal from "../BlueHorizontal";
import Cards from "./Cards";

function Ieeefamily() {
    return (
        <Container>
            <BlueHorizontal><div /></BlueHorizontal>
            <Cards />
        </Container>
    )
}

export default Ieeefamily;

const Container = styled.div`
  height: auto;
  background: #fff;
`;


