'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from '../Dropdown';
// Image and
import Cagri from '../../app/assets/image/cagri-merkezi.png'
// Data
import { LogoImage } from '@/app/data/images';
import { SocialMedia } from '@/app/data/social-media';
import { Number } from '@/app/data/menu';

function Header() {

    return (
        <div>
            <div id='header-top' className='bg-[#F3F3F3] w-full'>
                <div className='custom-container mx-auto'>
                    <div className='grid grid-cols-2 justify-between w-full py-2'>
                        <div className='flex gap-2 items-center'>
                            <div><Image src={Cagri} alt='çağrı merkezi' width={80} /></div>
                            <h3 className='text-[#297BA1] font-bold text-2xl'>{Number.number}</h3>
                        </div>
                        <div>
                            <ul className='flex gap-2 items-center justify-end align-middle h-full'>
                                {
                                    SocialMedia.map((i) => {
                                        return <li key={i} className='hover:text-red-700'><a href={i.url} target='_blank' className='text-2xl'>{i.icon}</a></li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id='header-bottom' className='h-[80px]'>
                <div className='custom-container mx-auto'>
                    <ul className='flex gap-4 h-full items-center'>
                        <li className='h-full'><div><Image src={LogoImage.image.src} width={100} height={100} /></div></li>
                        <li className='h-full flex items-center text-lg'><Link href='/' className=''>Ana Sayfa</Link> </li>
                        <li className='h-full'>
                            <Dropdown title='Vakfımız'>
                                <Link href='/vakfimiz/vakfimiz-hakkinda' className='w-full hover:bg-neutral-100 align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Vakfımız Hakkında</Link>
                                <Link href='/vakfimiz/vakif-baskanlari' className='w-full hover:bg-neutral-100 align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Vakıf Başkanları</Link>
                                <Link href='/vakfimiz/vakif-senedi' className='w-full hover:bg-neutral-100 align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Vakıf Senedi</Link>
                                <Link href='/vakfimiz/mutevelli-heyeti' className='w-full hover:bg-neutral-100 align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Mütevelli Heyeti</Link>
                                <Link href='/vakfimiz/yonetim-kurulu' className='w-full hover:bg-neutral-100 align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Yönetim Kurulu</Link>
                            </Dropdown>
                        </li>
                        <li className='h-full'>
                            <Dropdown title='Burs'>
                                <Link href='/burs/burs-ve-odul-yonetmeligi' className='w-full hover:bg-neutral-100 align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Burs ve Ödül Yönetmeliği</Link>
                                <Link href='/burs/burs-basvurusu-yap' className='w-full hover:bg-neutral-100 align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Burs Başvurusu Yap</Link>
                                <Link href='/burs/burs-sonuclari' className='w-full hover:bg-neutral-100 align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Burs Sonuçları</Link>
                                <Link href='/burs/bagis-yapmak-istiyorum' className='w-full hover:bg-neutral-100 align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Bağış Yapmak İstiyorum</Link>
                            </Dropdown>
                        </li>
                        <li className='h-full'>
                            <Dropdown title='Faaliyetlerimiz'>
                                <Link href='/faaliyetlerimiz/faaliyet-raporu' className='w-full hover:bg-neutral-100 align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Faaliyet Raporu</Link>
                                <Link href='/faaliyetlerimiz/bursiyerlerimiz' className='w-full hover:bg-neutral-100 align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Bursiyerlerimiz</Link>
                                <Link href='/faaliyetlerimiz/mezunlarimiz' className='w-full hover:bg-neutral-100 align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Mezunlarımız</Link>
                            </Dropdown>
                        </li>
                        <li className='h-full'>
                            <Dropdown title='Galeri'>
                                <Link href='/galeri/fotograf-galeri' className='w-full hover:bg-neutral-100 align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Fotoğraf Galerisi</Link>
                                <Link href='/galeri/video-galeri' className='w-full hover:bg-neutral-100 align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Video Galerisi</Link>
                            </Dropdown>
                        </li>
                        <li className='h-full text-lg'> <Link href='./iletisim'>İletişim</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header