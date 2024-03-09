import React from 'react'
import Link from 'next/link';
import { RiHome4Fill } from "react-icons/ri";

export default function Breadcrumb({ items }) {
    return (
        <div className='container mx-auto flex max-md:flex-wrap items-center text-white max-md:text-[10px] text-sm font-medium'>
            <Link href={'/'} className='flex items-center gap-1 mr-1'><RiHome4Fill className='mb-[3px]' /><span>Ana Sayfa</span></Link>
            {
                items.map((i) => {
                    return (
                        <Link key={i} href={i.link} className='border-l pl-1 mr-1'>{i.name}</Link>
                    )
                })
            }
        </div>
    )
}
