'use client'
import React, { useState, useEffect } from 'react'
import PageLayout from '@/components/layout/PageLayout';
import Table from '@/components/Table';
import { MdWoman, MdMan } from "react-icons/md";

const fetchData = async () => {
    const response = await fetch('/data/faaliyetlerimiz/mezunlarimiz.json');
    const data = await response.json();
    return data;
}

export default function Page() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchData();
            setData(data.data);
        };
        loadData();
    }, []);

    const items = [
        {
            name: "Faaliyetlerimiz",
            link: "#"
        },
        {
            name: "Mezunlarımız",
            link: "/faaliyetlerimiz/mezunlarimiz"
        }
    ];

    const columns = [
        {
            name: 'Ad Soyad',
            selector: "name"
        },
        {
            name: 'Üniversite',
            selector: "universty"
        },
        {
            name: 'Bölüm',
            selector: "department"
        },
        {
            name: 'Dönem',
            selector: "semester"
        }
    ];

    return (
        <PageLayout items={items} crumbPageTitle="Mezunlarımız" pageTitle="Mezunlarımız">
            <Table
                data={data}
                columnsData={columns}
                className='mt-12'
            />
        </PageLayout>

    )
}

105