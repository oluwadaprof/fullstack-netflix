import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'
import './list.scss'
import Listitem from '../listitem/Listitem'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function SamplePrevArrow(props) {
    const { onClick} = props;
    return (   
        <ArrowBackIosOutlined onClick={onClick} className='slider__arrow left' /> 
    );
}


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <ArrowForwardIosOutlined onClick={onClick} className='slider__arrow right' /> 
    )     
}



const List = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
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
    <div className='list' >
        <span className="list__title"> Continue to watch
            <div className="wrapper">
            <Slider {...settings}>
                {/* <div className="container"  > */}
                          <Listitem />
                          <Listitem />
                          <Listitem />
                          <Listitem />
                          <Listitem />
                          <Listitem />
                          <Listitem />
                          <Listitem />
                          <Listitem />
                          <Listitem /> 
                {/* </div> */}
                  </Slider>
                  
            </div>
        </span>
    </div>
  )
}

export default List;