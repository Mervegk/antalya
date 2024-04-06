"use client"
import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';

const fetchData = async () => {
    const response = await fetch('/data/contact.json');
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
            name: "İletişim",
            link: "/iletisim"
        }
    ];
    return (
        <PageLayout items={items} crumbPageTitle="İletişim">

            <div className='grid grid-cols-2 justify-center items-center gap-4'>
                {
                    data?.map((i) => {
                        if (i.map_iframe) {
                            return <div key={i.id} dangerouslySetInnerHTML={{ __html: i.map_iframe }} className='address-map'></div>
                        }
                    })
                }
                <div className='text-black flex flex-col gap-4'>
                    {
                        data?.map((i) => {
                            if (i.email) {
                                return <div key={i.id}>E-posta: {i.email}</div>
                            }
                            else if (i.phone) {
                                return <div key={i.id}>Telefon: {i.phone}</div>
                            }
                            else if (i.address) {
                                return <div key={i.id}>Adres: {i.address}</div>
                            }
                        })
                    }
                </div>
            </div>


        </PageLayout >
    )
}

export default Page