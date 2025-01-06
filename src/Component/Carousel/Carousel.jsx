import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import {img} from "./image/data"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import css from "./Carousel.module.css";

const CarouselImages = () => {
    return (
      <div>
        <Carousel   
         autoPlay ={true}
         infiniteLoop={true}
          showIndicators={false}
          showThumbs={false} 
            >
          { img?.map((images,i)=>{
     return <img src={images} key={i} />;
          })    } 
        </Carousel>
        <div className ={css.Fade__Effect}>
        </div>
      </div>
    );
}

export default CarouselImages;
