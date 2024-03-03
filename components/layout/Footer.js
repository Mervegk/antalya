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
        <div className='bg-contain bg-bottom bg-no-repeat relative flex flex-col justify-between max-h-[24rem] min-h-[24rem] mt-8 p-4 max-lg:pb-0' style={footerBg} >
            <div id='footer-top' className='container mx-auto'>
                <div className='grid grid-cols-[20%_50%_30%] gap-4 items-center justify-center text-lg'>
                    <div><img src={LogoImage.image.src} alt='Logo' className='max-md:w-24 md:w-28 lg:w-[200px]' /></div>
                    <div className='w-full'>
                        <ul className='flex gap-8 list-disc'>
                            {
                                FooterMenuItems.map((i) => {
                                    return <li key={i.id}><Link href={i.url} className='text-xl'>{i.name}</Link></li>
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <div className='text-center mb-2'>
                            <h3 className='text-2xl font-bold'>Adres</h3>
                            <p className='text-thirdcolor text-xl'>{Address.address}</p>
                        </div>
                        <div className='text-center'>
                            <h3 className='text-2xl font-bold'>E-posta</h3>
                            <a href={`mailto:${CorpEmail.email}`} className='text-[#c36] text-xl hover:text-[#336]'>{CorpEmail.email}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id='footer-bottom' className='font-semibold text-center text-white'>
                Copyright © SunFlower {currentYear}. Tüm hakları saklıdır.
            </div>
            {/*  <div className='absolute bottom-0 left-0 h-full flex items-end z-[-1] w-full'>
                <Image src={FooterBgImage.image} alt='footer' className='w-full object-cover' />
            </div> */}
        </div>
    )
}

export default Footer