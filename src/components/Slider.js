/* eslint-disable react/jsx-key */
import React from "react";
import styled from 'styled-components';
import Image from 'next/image'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import level1 from "../../public/images/carousal-images/level-1.jpg"
import level2 from "../../public/images/carousal-images/level-2.jpg"
import level3 from "../../public/images/carousal-images/level-3.jpg"
import level4 from "../../public/images/carousal-images/level-4.jpg"
import level5 from "../../public/images/carousal-images/level-5.jpg"


const handleDragStart = (e) => e.preventDefault();

const items = [
        <Image  src={level1} alt="AKPSC IEEE" className="sliderimg" onDragStart={handleDragStart} />,
        <Image src={level2} alt="" className="sliderimg" onDragStart={handleDragStart}  />,
        <Image alt="" src={level3} className="sliderimg" onDragStart={handleDragStart}  />,
        <Image alt="" src={level4} className="sliderimg"  onDragStart={handleDragStart}/>,
        <Image alt="" src={level5} className="sliderimg"  onDragStart={handleDragStart}/>
  ];

export function Slider(){
    return(
        <Div className="slider"><AliceCarousel mouseTracking  autoPlay autoPlayInterval="5000" animationType="fadeout" disableButtonsControls infinite autoPlayStrategy="none" items={items} >
        
</AliceCarousel></Div>
        
    );
}

const Div = styled.div`
    

    @media ${(props) => props.theme.breakpoints.sm}{
    
    }
`;

