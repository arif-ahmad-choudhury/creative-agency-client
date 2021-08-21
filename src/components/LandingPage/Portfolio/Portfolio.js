import React from 'react';
import slider1 from '../../../images/photo1.jpg';
import slider2 from '../../../images/photo2.jpg';
import slider3 from '../../../images/photo3.jpg';
import slider4 from '../../../images/photo4.jpg';
import Slider from "react-slick";
import './Portfolio.css'

const Portfolio = () => {    
    const settings = {
        dots: true,
        infinite: false,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ] 
      };
    return (
        <div className="container py-5" style={{backgroundColor: '#111430'}}>
             <h4 className="py-5" style={{ textAlign: 'center', color:'white'}}>Here are some of <span style={{color: '#7AB259'}}> our works</span> </h4>           
            <Slider {...settings}>
                <div>
                    <img src={slider1} alt="" className="w-75 h-75"/>
                </div>
                <div>
                    <img src={slider2} alt="" className="w-75 h-75"/>
                </div>            
                <div>
                    <img src={slider3} alt="" className="w-75 h-75"/>
                </div>
                <div>
                    <img src={slider4} alt="" className="w-75 h-75"/>
                </div>   
                <div>
                    <img src={slider1} alt="" className="w-75 h-75"/>
                </div>
                <div>
                    <img src={slider2} alt="" className="w-75 h-75"/>
                </div>       
                <div>
                    <img src={slider3} alt="" className="w-75 h-75"/>
                </div>
                <div>
                    <img src={slider4} alt="" className="w-75 h-75"/>
                </div>  
            </Slider>
      </div>
    );
  }


export default Portfolio;