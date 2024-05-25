import React from 'react'
import Link from 'next/link'
import { RiExternalLinkLine } from "react-icons/ri";
import CardHorizontal from '@/components/layout/panel-components/CardHorizontal';
import Image from '../../assets/image/indir.jpg';

export default function page() {
  return (
    <div className='p-4'>
      <CardHorizontal bgColor='#FABC3D'
        textColor='white'
        titleColor='#123075'
        title='Hızlı Erişim'
        image={Image}
      >
        <div className='flex flex-col'>
          <Link href='/yonetim-paneli/burs/burs-sonuclari' className='text-white text-lg hover:main-link-hover transition-colors duration-150 ease-in'>Burs Sonuçları</Link>
          <Link href='/yonetim-paneli/burs' className='text-white text-lg hover:main-link-hover transition-colors duration-150 ease-in'>Burs Form</Link>
        </div>
      </CardHorizontal>

    </div>
  )
}
