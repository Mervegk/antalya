'use client'
import React, { useEffect, useState } from 'react'
import PageLayout from '@/components/layout/PageLayout';

const fetchData = async () => {
    const response = await fetch('/data/burs/burs-ve-odul-yonetmeligi.json');
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
            name: "Burs ve Ödül Yönetmeliği",
            link: "/burs/burs-ve-odul-yonetmeligi"
        }
    ];

    return (
        <PageLayout items={items} crumbPageTitle="Burs ve Ödül Yönetmeliği" pageTitle={data?.title} pageData={data?.content} />
    )
}

export default Page