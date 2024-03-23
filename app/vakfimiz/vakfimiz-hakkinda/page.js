'use client'
import React, { useEffect, useState } from 'react'
import PageLayout from '@/components/layout/PageLayout';

const fetchData = async () => {
    const response = await fetch('/data/vakfimiz/vakfimiz-hakkinda.json');
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
        <PageLayout items={items} crumbPageTitle="Vakfımız Hakkında" pageTitle={data?.title} pageData={data?.content} />
    )
}

export default Page