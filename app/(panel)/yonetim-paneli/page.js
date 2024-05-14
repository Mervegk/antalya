import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='p-4'>
      <div className='my-4 bg-secondcolor rounded-xl p-6'>
        <div className='flex flex-col gap-6'>
          <h1 className=' font-semibold text-lg sm:text-xl md:text-2xl text-white'>Hızlı Erişim</h1>
          <div className='grid grid-cols-2 gap-2 justify-center items-center'>
            <Link href='/yonetim-paneli/burs/burs-sonuclari' className='text-white/90 font-medium'>Burs Sonuçları</Link>
            <Link href='/yonetim-paneli/burs/burs-sonuclari' className='text-white/90 font-medium'>Burs Sonuçları</Link>
            <Link href='/yonetim-paneli/burs/burs-sonuclari' className='text-white/90 font-medium'>Burs Sonuçları</Link>
            <Link href='/yonetim-paneli/burs/burs-sonuclari' className='text-white/90 font-medium'>Burs Sonuçları</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
