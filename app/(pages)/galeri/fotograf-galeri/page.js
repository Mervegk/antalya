"use client"
import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Gallery from '@/components/Gallery';

const fetchData = async () => {
    const response = await fetch('/data/galeri/fotograf.json');
    const data = await response.json();
    return data;
}
export default function Page() {
    const [data, setData] = useState();

    useEffect(() => {
        fetchData().then((res) => setData(res.data));
    }, []);

    const width = 1080;
    const height = 980;

    const urlArray = data?.map(i => ({
        src: i.url,
        width: width,
        height: height
    }));

    const items = [
        {
            name: "Galeri",
            link: "#"
        },
        {
            name: "Fotoğraf Galerisi",
            link: "/galeri/fotograf-galeri"
        }
    ];

    return (
        <PageLayout items={items} crumbPageTitle="Fotoğraf Galerisi" pageTitle="Fotoğraf Galerisi" contentClasses='mt-12'>
            <Gallery photos={urlArray} />
        </PageLayout>
    )
}

