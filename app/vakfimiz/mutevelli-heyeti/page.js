'use client'
import React, { useEffect, useState } from 'react'
import InsideHero from '@/components/InsideHero';

const fetchData = async () => {
    const response = await fetch('/data/vakfimiz/mutevelli-heyeti.json');
    const data = await response.json();
    return data;
}

function Page() {
    const [data, setData] = useState();

    useEffect(() => {
        fetchData().then((res) => setData(res.data));
    }, []);

    const items = [
        {
            name: "Vakfımız",
            link: "#"
        },
        {
            name: "Mütevelli Heyeti",
            link: "/vakfimiz/mutevelli-heyeti"
        }
    ];

    return (
        <div className='min-h-[calc(100vh-130px)]'>
            <InsideHero items={items} pageTitle="Mütevelli Heyeti" />
            <div className='custom-container mx-auto bg-white rounded-[10px] pt-20 px-5 md:px-10 pb-[60px] -mt-[50px] box-shadow'>
                <h1 className='text-title text-[40px] sm:text-[50px] text-center font-semibold'>{data?.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: data?.content }} className='mt-8 text-base md:text-xl text-thirdcolor'></div>
            </div>
        </div>
    )
}

export default Page