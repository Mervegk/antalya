"use client"
import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';

const fetchData = async () => {
    const response = await fetch('/data/burs/bagis.json');
    const data = await response.json();
    return data;
}

function Page() {
    const [data, setData] = useState();

    useEffect(() => {
        fetchData().then((res) => setData(res.data));
    }, []);
    console.log(data)

    const items = [
        {
            name: "Burs",
            link: ""
        },
        {
            name: "Bağış Yapmak İstiyorum",
            link: "/burs/bagis-yapmak-istiyorum"
        }
    ];
    return (
        <PageLayout items={items} crumbPageTitle="Bağış Yapmak İstiyorum">
            {
                data?.map((i) => {
                    return (
                        <div key={i.id} className='flex flex-col justify-center items-center gap-2 mb-4'>
                            <div className=''>
                                <img src={i.logo} alt="" className='max-w-44' />
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: i.info }} className='text-center text-base md:text-xl text-thirdcolor'></div>
                        </div>
                    )
                })
            }

        </PageLayout>
    )
}

export default Page