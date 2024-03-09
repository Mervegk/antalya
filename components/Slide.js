'use client'
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Slide({ images }) {
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        /* autoplaySpeed: 3000,
        autoplay: true, */
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 479,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='slider-container'>
            <Slider {...settings} className='gap-4'>
                {
                    images.map((i) => <div key={i} className='w-full flex items-center justify-center p-2 hover:shadow-md transition-all duration-300 ease-in-out'><img src={i.url} alt={i.name} className='!w-[100px] object-contain' /></div>)
                }
            </Slider>
        </div>
    )
}
