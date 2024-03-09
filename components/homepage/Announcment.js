import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import moment from 'moment';
import 'moment/locale/tr';
import { RiCalendarLine } from "react-icons/ri";

const fetchAnnounmentData = async () => {
    const response = await fetch('/data/announcment.json');
    const data = await response.json();
    return data
};

export default function Announcment() {
    const [data, setData] = useState([]);
    let sortedData = [];
    moment.locale('tr');
    useEffect(() => {
        fetchAnnounmentData().then((response) => setData(response.data));
    }, []);

    sortedData = data.sort((a, b) => {
        return new Date(b.created_date) - new Date(a.created_date);
    });

    return (
        <div id="announcement" className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
            <div className="announcement-left flex items-center justify-end">
                <div className="w-1/2 mb-8">
                    <h4 className="text-white text-3xl md:text-4xl font-medium">Duymak<br />İstediklerin</h4>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {
                    sortedData.slice(0, 2).map((i) => <div key={i.id} className="secondary-bg p-4 rounded-lg flex flex-col justify-around">
                        <p className="text-white/50 flex gap-2 items-center"><RiCalendarLine /><span>{moment(i.created_date).format('DD MMMM YYYY')}</span></p>
                        <h4 className="text-white text-base xl:text-xl">{i.title}</h4>
                        <p className="text-white text-base xl:text-lg">{i.content.substring(0, 50) + '...'}</p>
                        <Link href={`/duyurular/${i.id}`} className="button">Devamını Oku</Link>
                    </div>)
                }
                {/*  <div className="secondary-bg p-4 rounded-lg flex flex-col justify-between">
                    <p className="text-white/50 flex gap-2 items-center"><RiCalendarLine /><span>Tarih</span></p>
                    <h4 className="text-white text-xl">Başlık</h4>
                    <p className="text-white text-lg">İçerik</p>
                    <button className="button">Devamını Oku</button>
                </div>
                <div className="secondary-bg p-4 rounded-lg flex flex-col justify-between">
                    <p className="text-white/50 flex gap-2 items-center"><RiCalendarLine /><span>Tarih</span></p>
                    <h4 className="text-white text-xl">Başlık</h4>
                    <p className="text-white text-lg">İçerik</p>
                    <button className="button">Devamını Oku</button>
                </div> */}
            </div>
        </div>
    )
}
