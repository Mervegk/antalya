'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import Dropdown from '../Dropdown';
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
// Image and
import Cagri from '../../app/assets/image/cagri-merkezi.png'
// Data
import { LogoImage } from '@/app/data/images';
import { SocialMedia } from '@/app/data/social-media';
import { Number, HeaderMenuItems } from '@/app/data/menu';

function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header>
            <div className={classNames('bg-white absolute w-screen h-full py-4 px-2 flex flex-col justify-between transition-all duration-200 linear', {
                'opacity-0 -mr-[100px] z-[-10]': !openMenu,
                'opacity-1 mr-0  z-[100]': openMenu
            })}>
                <div>
                    <div className='w-full flex items-center justify-end text-3xl px-4'>
                        <button onClick={() => setOpenMenu(false)} className='border rounded p-1'><RiCloseFill /></button>
                    </div>
                    <ul className='h-full list-none flex flex-col justify-evenly'>
                        <li className='flex items-center text-lg'><Link href='/' className=''>Ana Sayfa</Link></li>
                        {
                            HeaderMenuItems.map((i) => {
                                return (
                                    i.subItems ? <li key={i.id} className='flex gap-4 items-center text-lg'>
                                        <Dropdown title={i.name} trigger="click">
                                            {
                                                i.subItems.map((item) => <Link key={item.id} href={item.url} className='w-full align-middle text-[14px] px-2 py-2 transition-all duration-200 ease-in-out'>{item.name}</Link>)
                                            }
                                        </Dropdown></li> : <li key={i.id} className='text-lg'> <Link href={i.url}>{i.name}</Link></li>
                                )
                            })
                        }
                    </ul>
                    {/* <ul className='grid grid-cols-1 gap-4'>
                        <li>
                            <p>Vakfımız</p>
                            <ul className='grid grid-cols-1 gap-2 mt-1'>
                                <li>
                                    <Link href='/vakfimiz/vakfimiz-hakkinda' className='w-full align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Vakfımız Hakkında</Link>
                                </li>
                                <li>
                                    <Link href='/vakfimiz/vakif-baskanlari' className='w-full align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Vakıf Başkanları</Link>
                                </li>
                                <li>
                                    <Link href='/vakfimiz/vakif-senedi' className='w-full align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Vakıf Senedi</Link>
                                </li>
                                <li>
                                    <Link href='/vakfimiz/mutevelli-heyeti' className='w-full align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Mütevelli Heyeti</Link>
                                </li>
                                <li>
                                    <Link href='/vakfimiz/yonetim-kurulu' className='w-full align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Yönetim Kurulu</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>Burs</p>
                            <ul className='grid grid-cols-1 gap-2 mt-1'>
                                <li>
                                    <Link href='/burs/burs-ve-odul-yonetmeligi' className='w-full align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Burs ve Ödül Yönetmeliği</Link>
                                </li>
                                <li>
                                    <Link href='/burs/burs-basvurusu-yap' className='w-full align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Burs Başvurusu Yap</Link>
                                </li>
                                <li>
                                    <Link href='/burs/burs-sonuclari' className='w-full align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Burs Sonuçları</Link>
                                </li>
                                <li>
                                    <Link href='/burs/bagis-yapmak-istiyorum' className='w-full align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Bağış Yapmak İstiyorum</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>Faaliyetlerimiz</p>
                            <ul className='grid grid-cols-1 gap-2 mt-1'>
                                <li>
                                    <Link href='/faaliyetlerimiz/faaliyet-raporu' className='w-full align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Faaliyet Raporu</Link>
                                </li>
                                <li>
                                    <Link href='/faaliyetlerimiz/bursiyerlerimiz' className='w-full align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Bursiyerlerimiz</Link>
                                </li>
                                <li>
                                    <Link href='/faaliyetlerimiz/mezunlarimiz' className='w-full align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Mezunlarımız</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>Galeri</p>
                            <ul className='grid grid-cols-1 gap-2 mt-1'>
                                <li>
                                    <Link href='/galeri/fotograf-galeri' className='w-full align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Fotoğraf Galerisi</Link>
                                </li>
                                <li>
                                    <Link href='/galeri/video-galeri' className='w-full align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>Video Galerisi</Link>
                                </li>
                            </ul>
                        </li>
                    </ul> */}
                </div>

                <div className='grid grid-cols-1 justify-center w-full py-2'>
                    <div className='flex gap-2 items-center justify-center'>
                        <div><Image src={Cagri} alt='çağrı merkezi' width={80} /></div>
                        <h3 className='text-[#297BA1] font-bold text-2xl'>{Number.number}</h3>
                    </div>
                    <div>
                        <ul className='flex gap-2 items-center justify-center align-middle h-full'>
                            {
                                SocialMedia.map((i, index) => {
                                    return <li key={index} className='hover:text-red-700'><a href={i.url} target='_blank' className='text-2xl'>{i.icon}</a></li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div id='header-top' className='bg-[#F3F3F3] w-full max-md:hidden'>
                <div className='custom-container mx-auto'>
                    <div className='grid grid-cols-2 justify-between w-full py-2'>
                        <div className='flex gap-2 items-center'>
                            <div><Image src={Cagri} alt='çağrı merkezi' width={80} /></div>
                            <h3 className='text-[#297BA1] font-bold text-2xl'>{Number.number}</h3>
                        </div>
                        <div>
                            <ul className='flex gap-2 items-center justify-end align-middle h-full'>
                                {
                                    SocialMedia.map((i, index) => {
                                        return <li key={index} className='hover:text-red-700'><a href={i.url} target='_blank' className='text-2xl'>{i.icon}</a></li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id='header-bottom' className='h-[80px]'>
                <div className='flex md:hidden p-4'>
                    <div className='w-full flex justify-end items-center text-2xl'>
                        <button
                            onClick={() => setOpenMenu(true)}
                            className={classNames('bg-white text-black p-2 border rounded', {
                                'hidden': openMenu,
                                'block': !openMenu
                            })}><RiMenuFill />
                        </button>
                    </div>
                </div>
                <div className='custom-container mx-auto hidden md:block'>
                    <ul className='flex gap-4 h-full items-center max-lg:gap-3'>
                        <li className='h-full'><div><img src={LogoImage.image.src} className='lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px]' alt='' /></div></li>
                        <li className='h-full flex items-center text-lg'><Link href='/' className=''>Ana Sayfa</Link> </li>
                        {
                            HeaderMenuItems.map((i) => {
                                return (
                                    i.subItems ? <li key={i.id} className='h-full flex items-center text-lg'>
                                        <Dropdown title={i.name} trigger="hover">
                                            {
                                                i.subItems.map((item) => <Link key={item.id} href={item.url} className='w-full hover:bg-neutral-100 align-middle text-[14px] px-2 py-3 transition-all duration-200 ease-in-out'>{item.name}</Link>)
                                            }
                                        </Dropdown></li> : <li key={i.id} className='h-full text-lg'> <Link href={i.url}>{i.name}</Link></li>
                                )

                            })
                        }
                    </ul>
                    {/* <ul className='flex gap-4 h-full items-center'>
                        <li className='h-full'><div><Image src={LogoImage.image.src} width={100} height={100} alt='' /></div></li>
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
                        <li className='h-full text-lg'> <Link href='/iletisim'>İletişim</Link></li>
                    </ul> */}
                </div>
            </div>
        </header>
    )
}

export default Header