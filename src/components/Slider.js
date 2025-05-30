/* eslint-disable react/jsx-key */
import React from "react";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const StyledImg = styled.img`
  width: 100%;
  height: fit-content;
  object-fit: cover;
  border-radius: 10px;
`;

const items = [
  <StyledImg
    src="/images/carousal-images/level1.jpg"
    alt="AKPSC IEEE"
    onDragStart={handleDragStart}
  />,
  <StyledImg
    src="/images/carousal-images/level2.jpg"
    alt=""
    onDragStart={handleDragStart}
  />,
  <StyledImg
    src="/images/carousal-images/level3.jpg"
    alt=""
    onDragStart={handleDragStart}
  />,
  <StyledImg
    src="/images/carousal-images/level4.jpg"
    alt=""
    onDragStart={handleDragStart}
  />,
  <StyledImg
    src="/images/carousal-images/level5.jpg"
    alt=""
    onDragStart={handleDragStart}
  />,
];

export function Slider() {
  return (
    <Div className="slider">
      <AliceCarousel
        mouseTracking
        autoPlay
        autoPlayInterval="5000"
        animationType="fadeout"
        disableButtonsControls
        infinite
        autoPlayStrategy="none"
        items={items}
      ></AliceCarousel>
    </Div>
  );
}

const Div = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
