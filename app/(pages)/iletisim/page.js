"use client"
import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { RiPhoneFill, RiSmartphoneLine, RiGlobalFill, RiMailFill } from "react-icons/ri";

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
        <PageLayout items={items} crumbPageTitle="İletişim" pageTitle="İletişim">

            <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4 max-2xl:gap-20 text-center text-secondcolor mt-8'>
                {
                    data?.map((i) => {
                        if (i.map_iframe) {
                            return <div key={i.id} dangerouslySetInnerHTML={{ __html: i.map_iframe }} className='address-map max-lg:justify-self-center max-lg:w-full'></div>
                        }
                    })
                }
                <div className='text-black flex flex-col gap-6 lg:gap-8'>
                    <h3 className='text-center text-thirdcolor font-semibold text-2xl md:text-5xl'>Sunflower Vakfı</h3>
                    {
                        data?.map((i) => {
                            if (i.email) {
                                return <p key={i.id} className='contact-info'><RiMailFill /> {i.email}</p>
                            }
                            else if (i.phone) {
                                return <p key={i.id} className='contact-info'><RiPhoneFill /> {i.phone}</p>
                            }
                            else if (i.cellphone) {
                                return <p key={i.id} className='contact-info'><RiSmartphoneLine /> {i.cellphone}</p>
                            }
                            else if (i.address) {
                                return <p key={i.id} className='text-center text-black text-[22px] font-medium'> {i.address}</p>
                            }
                        })
                    }
                </div>
            </div>


        </PageLayout >
    )
}

export default Page