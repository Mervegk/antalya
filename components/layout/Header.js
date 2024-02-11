'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../app/assets/svg/logo.svg'


function Header() {
    const [vakif, setVakif] = useState(false);
    const [burs, setBurs] = useState(false);
    const [faaliyet, setFaaliyet] = useState(false);
    const [galeri, setGaleri] = useState(false);

    return (
        <div>
            <div>
                <ul className='flex gap-4'>
                    <li><div><Image src={Logo} /></div></li>
                    <li><Link href='/'>Ana Sayfa</Link> </li>
                    <li>
                        <button onClick={() => setVakif(true)}>Vakfımız</button>
                        <div className=''>
                            <Link href='/vakfimiz/vakfimiz-hakkinda'>Vakfımız Hakkında</Link>
                            <Link href='/vakfimiz/vakif-baskanlari'>Vakıf Başkanları</Link>
                            <Link href='/vakfimiz/vakif-senedi'>Vakıf Senedi</Link>
                            <Link href='/vakfimiz/mutevelli-heyeti'>Mütevelli Heyeti</Link>
                            <Link href='/vakfimiz/yonetim-kurulu'>Yönetim Kurulu</Link>
                        </div>
                    </li>
                    <li><button onClick={() => setBurs(true)}>Burs</button>
                        <div>
                            <Link href='/burs/burs-ve-odul-yonetmeligi'>Burs ve Ödül Yönetmeliği</Link>
                            <Link href='/burs/burs-basvurusu-yap'>Burs Başvurusu Yap</Link>
                            <Link href='/burs/burs-sonuclari'>Burs Sonuçları</Link>
                            <Link href='/burs/bagis-yapmak-istiyorum'>Bağış Yapmak İstiyorum</Link>
                        </div>
                    </li>
                    <li><button onClick={() => setFaaliyet(true)}>Faaliyetlerimiz</button>
                        <div>
                            <Link href='/faaliyetlerimiz/faaliyet-raporu'>Faaliyet Raporu</Link>
                            <Link href='/faaliyetlerimiz/bursiyerlerimiz'>Bursiyerlerimiz</Link>
                            <Link href='/faaliyetlerimiz/mezunlarimiz'>Mezunlarımız</Link>
                        </div>
                    </li>
                    <li><button onClick={() => setGaleri(true)}>Galeri</button>
                        <div>
                            <Link href='/galeri/fotograf-galerisi'>Fotoğraf Galerisi</Link>
                            <Link href='/galeri/video-galerisi'>Video Galerisi</Link>
                        </div>
                    </li>
                    <li>İletişim</li>
                </ul>
            </div>
        </div>
    )
}

export default Header