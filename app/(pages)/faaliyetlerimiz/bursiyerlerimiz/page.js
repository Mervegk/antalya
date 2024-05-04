'use client'
import React, { useState, useEffect } from 'react'
import PageLayout from '@/components/layout/PageLayout';
import Table from '@/components/Table';
import { MdWoman, MdMan } from "react-icons/md";

const fetchUniData = async () => {
    const response = await fetch('/data/faaliyetlerimiz/bursiyerlerimiz.json');
    const data = await response.json();
    return data;
}
const fetchQuantitiyData = async () => {
    const response = await fetch('/data/faaliyetlerimiz/ilceler-toplami.json');
    const data = await response.json();
    return data;
}
const fetchGenderData = async () => {
    const response = await fetch('/data/faaliyetlerimiz/cinsiyet-toplami.json');
    const data = await response.json();
    return data;
}

export default function Page() {
    const [data, setData] = useState([]);
    const [quantitiy, setQuantitiy] = useState([]);
    const [genderTotal, setGenderTotal] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchUniData();
            const quantities = await fetchQuantitiyData();
            const genderTot = await fetchGenderData();
            setData(data.data);
            setQuantitiy(quantities.data);
            setGenderTotal(genderTot.data)
        };
        loadData();
    }, []);


    const items = [
        {
            name: "Faaliyetlerimiz",
            link: "#"
        },
        {
            name: "Bursiyerlerimiz",
            link: "/faaliyetlerimiz/bursiyerlerimiz"
        }
    ];

    const columns = [
        {
            name: 'Üniversite',
            selector: "universty"
        },
        {
            name: 'Kişi',
            selector: "number_of_people"
        }
    ];

    return (
        <PageLayout items={items} crumbPageTitle="Bursiyerlerimiz" pageTitle="Bursiyerlerimiz">
            <div className='flex-class !gap-12 mt-12'>
                {
                    genderTotal.map((i, index) => {
                        if (i.gender == "Kadın") {
                            return <div key={index} className='flex flex-col items-center justify-center gap-2 text-3xl'><MdWoman className='text-[#C80064] h-16 w-16' />
                                <p className='text-thirdcolor font-bold'><span className='text-[#C80064]'>{i.gender.toLocaleUpperCase()}: </span>{i.total}</p>
                            </div>
                        } else if (i.gender == "Erkek") {
                            return <div key={index} className='flex flex-col items-center justify-center gap-2 text-3xl'><MdMan className='text-[#0076C5] h-16 w-16' />
                                <p className='text-thirdcolor font-bold'><span className='text-[#0076C5]'>{i.gender.toLocaleUpperCase()}: </span>{i.total}</p>
                            </div>
                        }
                        //i.gender == "Kadın" ? <p key={index}><MdWoman />{i.gender}</p> : <p key={index}><MdMan />{i.gender}</p>
                    })
                }
            </div>
            <div className='flex-class flex-wrap mt-4 md:mt-8 px-6'>
                {
                    quantitiy.map((i, insex) => <div key={insex}> <p><span>{i.district}: </span><span>{i.number_of_people}</span></p></div>)
                }
            </div>
            <Table
                data={data}
                columnsData={columns}
                className='mt-8'
            />
        </PageLayout>

    )
}

105