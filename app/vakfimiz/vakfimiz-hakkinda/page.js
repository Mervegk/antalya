'use client'
import React, { useEffect, useState } from 'react'
import InsideHero from '@/components/InsideHero';

const fetchData = async () => {
    const response = await fetch('/data/vakfimiz-hakkinda.json');
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
            name: "Vakfımız Hakkında",
            link: "/vakfimiz/vakfimiz-hakkinda"
        }
    ]
    return (
        <div>
            <InsideHero items={items} pageTitle="Vakfımız Hakkında" />
            <div className='custom-container mx-auto bg-white rounded-[10px] pt-20 px-10 pb-[60px] -mt-[50px] box-shadow'>
                <h1 className='text-title text-[50px] text-center font-semibold'>{data?.title}</h1>
                <div className='mt-8'>
                    <p dangerouslySetInnerHTML={{ __html: data?.content }} className='text-base md:text-xl text-thirdcolor'></p>
                </div>
            </div>
        </div>
    )
}

export default Page