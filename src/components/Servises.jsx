import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/3.jpg';
import img2 from '../assets/4.jpg';

const Servises = () => {
  return (
    <div className='servise'>

        <Carousel>
            <div>
                <img src={img1} alt="img" />
                <p>fullstack</p>
            </div>
            <div>
                <img src={img2} alt="img" />
                <p>fullstack</p>
            </div>
        </Carousel>
      
    </div>
  )
}

export default Servises
