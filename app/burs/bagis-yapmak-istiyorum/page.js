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
            {/*  {
                data?.map((i) => {
                    return (
                        <div key={i.id}>
                            <div>
                                <img src={i.logo} alt="" />
                            </div>
                            <div>{i.info}</div>
                        </div>


                    )
                })
            } */}

        </PageLayout>
    )
}

export default Page