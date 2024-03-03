'use client'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const fetchData = async () => {
    const response = await fetch('https://api.slingacademy.com/v1/sample-data/photos');
    const data = await response.json()
    //console.log(data);
    return data;
}

export default function Cooperate() {
    const [sliderImg, setSliderImg] = useState();
    useEffect(() => {
        fetchData().then((response) => setSliderImg(response));
    }, [])
    console.log(sliderImg)
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,

    };
    return (
        <div className='slider-container'>
            <Slider {...settings} className='gap-4'>
                {
                    sliderImg.photos.map((i) => {
                        return (
                            <div key={i}><img src={i.url} /></div>
                        )
                    })
                }



            </Slider>
        </div>
    )
}
