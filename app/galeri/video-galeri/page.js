"use client"
import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Gallery from '@/components/Gallery';

const fetchData = async () => {
    const response = await fetch('/data/galeri/video.json');
    const data = await response.json();
    return data;
}
export default function Page() {
    const [data, setData] = useState();

    useEffect(() => {
        fetchData().then((res) => setData(res.data));
    }, []);

    const width = 1080;
    const height = 980;

    const urlArray = data?.map(i => ({
        src: i.url,
        width: width,
        height: height
    }));

    const items = [
        {
            name: "Galeri",
            link: "#"
        },
        {
            name: "Video Galerisi",
            link: "/galeri/video-galeri"
        }
    ];
    console.log(data);
    return (
        <PageLayout items={items} crumbPageTitle="Video Galerisi" pageTitle="Video Galerisi" contentClasses='mt-12'>
            {/*  <div className='grid grid-cols-2 gap-4'>
                {
                    data?.map((i) => {
                        return (
                            <video controls key={i.id}>
                                <source src={i.url} type='video/mp4' />
                            </video>
                        )

                    })
                }
            </div> */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center'>
                {
                    data?.slice(0, 2).map((i) => {
                        return (
                            <iframe key={i.id} src={`https://www.youtube.com/embed/${i.video_id}`} title={i.name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='w-full h-60'></iframe>
                        )

                    })
                }
            </div>
        </PageLayout>
    )
}

