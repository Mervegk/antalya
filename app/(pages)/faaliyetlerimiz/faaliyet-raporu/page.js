'use client'
import React, { useEffect, useState } from 'react'
import PageLayout from '@/components/layout/PageLayout';

const fetchData = async () => {
    const response = await fetch('/data/faaliyetlerimiz/faaliyet-raporu.json');
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
            name: "Faaliyetlerimiz",
            link: "#"
        },
        {
            name: "Faaliyet Raporu",
            link: "/burs/faaliyet-raporu"
        }
    ];

    return (
        <PageLayout items={items} crumbPageTitle="Faaliyet Raporu" pageTitle="Faaliyetlerimiz" pageData={data?.content} contentClasses="text-center" />
    )
}

export default Page