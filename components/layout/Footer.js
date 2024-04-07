import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FooterBgImage, LogoImage } from '@/app/data/images';
import { FooterMenuItems, Address, CorpEmail } from '@/app/data/menu';

function Footer() {
    let footerBg = {
        backgroundImage: 'url(' + FooterBgImage.image.src + ')'
    };
    let currentYear = new Date().getFullYear();
    return (
        <footer className='sm:bg-contain bg-bottom bg-no-repeat relative flex flex-col justify-between max-h-[24rem] min-h-[24rem] mt-8 p-4 max-lg:pb-0' style={footerBg} >
            <div id='footer-top' className='container mx-auto'>
                <div className='flex max-lg:flex-col gap-2 items-center justify-center'>
                    <div><img src={LogoImage.image.src} alt='Logo' className='max-md:w-24 md:w-28 lg:w-[200px]' /></div>
                    <div className='flex gap-4 lg:gap-8 items-center justify-between text-lg max-md:px-4'>
                        <div className='flex-grow'>
                            <ul className='flex max-md:flex-col max-md:gap-2 md:
                            gap-8'>
                                {
                                    FooterMenuItems.map((i) => {
                                        return <li key={i.id}><Link href={i.url} className='text-base lg:text-xl'>{i.name}</Link></li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className='max-md:flex flex-col'>
                            <div className='text-center mb-2'>
                                <h3 className='text-xl lg:text-2xl font-bold'>Adres</h3>
                                <p className='text-thirdcolor text-base lg:text-xl'>{Address.address}</p>
                            </div>
                            <div className='text-center'>
                                <h3 className='text-xl lg:text-2xl font-bold'>E-posta</h3>
                                <a href={`mailto:${CorpEmail.email}`} className='text-[#c36] text-base lg:text-xl hover:text-[#336]'>{CorpEmail.email}</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id='footer-bottom' className='font-semibold text-center text-white max-sm:text-sm'>
                Copyright © SunFlower {currentYear}. Tüm hakları saklıdır.
            </div>
            {/*  <div className='absolute bottom-0 left-0 h-full flex items-end z-[-1] w-full'>
                <Image src={FooterBgImage.image} alt='footer' className='w-full object-cover' />
            </div> */}
        </footer>
    )
}

export default Footer