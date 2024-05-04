import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='min-h-[calc(100vh-545px)] w-full flex flex-col items-center justify-center gap-4'>
            <h2 className='text-maincolor text-[80px] md:text-[100px] lg:text-[150px] xl:text-[250px] font-black leading-none mt-4'>404</h2>
            <p>Aradığınız Sayfa Bulunamadı.</p>
            <Link href="/" className='button'>Ana Sayfa</Link>
        </div>
    )
}