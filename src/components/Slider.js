import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export function Slider(){
    return(
        <AliceCarousel autoPlay autoPlayInterval="5000" animationType="fadeout" disableButtonsControls infinite autoPlayStrategy="none" >
      <img src="https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg" className="sliderimg" style={{height:"100vh",width:"100%"}} />
      <img src="https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg" className="sliderimg" style={{height:"100vh",width:"100%"}} />
      <img src="https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx" className="sliderimg" style={{height:"100vh",width:"100%"}} />
      <img src="https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg" className="sliderimg" style={{height:"100vh",width:"100%"}} />
</AliceCarousel>
    );
}



