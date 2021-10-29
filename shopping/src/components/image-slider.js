import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

class ImageSlider extends Component{
  render(){
    return(
      <Carousel autoPlay="true">
        <div>
          <img src={require("../images/h4-slide.png").default}/>
        </div>
        <div>
          <img src={require("../images/h4-slide2.png").default}/>
        </div>
        <div>
          <img src={require("../images/h4-slide3.png").default}/>
        </div>
        <div>
          <img src={require("../images/h4-slide4.png").default}/>
        </div>
        <div>
          <img src={require("../images/h4-slide7.png").default}/>
        </div>
      </Carousel>
    )
  }
}

export default ImageSlider;