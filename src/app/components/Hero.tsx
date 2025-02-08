"use client"

import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';

const Hero = () => {
    const slideData = [
        {
            id: 0,
            img:'/fashion1.jpg',
            title:'Trending Item',
            mainTitles:"WOMEN'S LATEST FASHION SALE",
            price: '$20'
        },
        {
            id: 1,
            img:'/fashion2.jpg',
            title:'Trending Accessories',
            mainTitles:"MODERN SUNGLASSES",
            price: '$15'
        },
        {
            id: 2,
            img:'/fashion3.jpg',
            title:'Sale Offer',
            mainTitles:"MAN FASHION SUMMER SALE",
            price: '$30'
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false
      };
  return (
    <section>
        <div className='container pt-6 lg:pt-3 mx-auto px-6'>
            <Slider {...settings}>
                {slideData.map((item)=>(
                    <Slide
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    mainTitles={item.mainTitles}
                    price={item.price}
                     />
                ))}
            </Slider>
        </div>
    </section>
  );
};

export default Hero;