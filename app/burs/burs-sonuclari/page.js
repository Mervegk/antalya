'use client'
import React, { useEffect, useState } from 'react'
import PageLayout from '@/components/layout/PageLayout';

const fetchData = async () => {
    const response = await fetch('/data/burs/burs-sonuclari.json');
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
            name: "Burs",
            link: "#"
        },
        {
            name: "Burs Sonuçları",
            link: "/burs/burs-sonuclari"
        }
    ];

    return (
        <PageLayout items={items} crumbPageTitle="Burs Sonuçları" pageTitle={data?.title} pageData={data?.content} contentClasses="text-center" />
    )
}

export default Page