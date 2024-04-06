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

                <div className='text-center text-base md:text-xl text-thirdcolor'>

                    {/*    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d597.4740428791631!2d-98.9293679209625!3d-81.38757918811322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zODHCsDIzJzE1LjMiUyA5OMKwNTUnMzYuNSJX!5e0!3m2!1str!2str!4v1712438428884!5m2!1str!2str" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
            </div>


        </PageLayout >
    )
}

export default Page