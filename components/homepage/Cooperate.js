'use client'
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const fetchData = async () => {
    const response = await fetch('https://api.slingacademy.com/v1/sample-data/photos');
    const data = await response.json()
    //console.log(data);
    return data;
}

const fetchData2 = async () => {
    const response = await fetch('/cooperate.json');
    const data = await response.json();
    console.log(data)
    return data
};

export default function Cooperate() {
    const [sliderImg, setSliderImg] = useState();
    const [myImg, setMyImg] = useState();
    useEffect(() => {
        fetchData().then((response) => setSliderImg(response));
    }, []);
    useEffect(() => {
        fetchData2().then((response) => setMyImg(response))
    }, [])
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,

    };
    return (
        <div className='slider-container'>
            <Slider {...settings} className='gap-4'>
                {/*  {
                    sliderImg.photos.map((i) => {
                        return (
                            <div key={i}><img src={i.url} /></div>
                        )
                    })
                } */}

                {
                    myImg.data.map((i) => <div key={i} className='w-[150px]'><img src={i.url} alt={i.name} className='w-full object-fit' /></div>)
                }
            </Slider>
        </div>
    )
}
