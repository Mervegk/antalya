'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slide from "@/components/Slide";
import Announcment from "@/components/homepage/Announcment";
import { RiFolderImageLine, RiFolderVideoLine } from "react-icons/ri";
import { HeroImage, BursBasvuruImg, BursSonucImg, BagisYap, Galeri } from "./data/images";
import Illust1 from '../app/assets/svg/illust1.svg';
import Illust2 from '../app/assets/svg/illus2.svg';


const fetchSliderData = async () => {
  const response = await fetch('/data/cooperate.json');
  const data = await response.json();
  return data
};

const fetchAdData = async () => {
  const response = await fetch('/data/ad.json');
  const data = await response.json();
  return data
}

export default function Home() {
  const [sliderImg, setSliderImg] = useState([]);
  const [adImage, setAdImage] = useState([]);


  useEffect(() => {
    fetchSliderData().then((response) => setSliderImg(response.data));
    fetchAdData().then((res) => setAdImage(res.data));
  }, [])

  let heroBg = {
    backgroundImage: 'url(' + HeroImage.image.src + ')'
  }
  return (
    <main className="min-h-screen">
      <div id="hero-section" className="h-44 md:h-80 lg:h-[550px] bg-cover bg-no-repeat bg-center" style={heroBg}></div>
      <div className="my-0 md:my-16 lg:my-32 primary-bg py-6 px-7 relative flex justify-center">
        <div className="absolute md:left-[-20px] xl:left-0 bottom-[-20px] xl:bottom-[-140px]">
          <Image src={Illust1} width={450} alt="illustrations" className="xl:w-[450px] lg:w-[350px] md:w-[250px] md:block hidden " />
        </div>
        <div className="text-center text-white w-1/2">
          <h3 className="text-3xl md:text-5xl font-bold">Anlamsız</h3>
          <p className="text-base md:text-xl font-medium">Kapının kulu çünkü batarya kutusu dışarı çıktılar düşünüyor cezbelendi biber. Hesap makinesi umut layıkıyla.</p>
          <p className="mt-4 text-sm md:text-base">Sıradanlıktan Uzattı</p>
        </div>
        <div className="absolute right-0 xl:bottom-[-130px]">
          <Image src={Illust2} width={200} alt="illustrations" className="xl:w-[450px] lg:w-[350px] md:w-[230px] md:block hidden " />
        </div>
      </div>
      <div className="custom-container mx-auto">
        <Announcment />
        <div id="burs-bagis" className="flex flex-col gap-4 mt-12">
          <div className="flex max-md:flex-col gap-4">
            <div><Link href="/burs/burs-basvurusu-yap"><img src={BursBasvuruImg.image.src} alt="burs-basvuru" /></Link></div>
            <div><Link href="/burs/burs-sonuclari"><img src={BursSonucImg.image.src} alt="burs-sonuc" /></Link></div>
          </div>
          <div><Link href="/burs/bagis-yapmak-istiyorum"><img src={BagisYap.image.src} alt="bagis" /></Link></div>
        </div>
      </div>
      <div className="container mx-auto mt-16">
        <div id="years" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
          <div>
            <h5 className="text-maincolor font-semibold text-4xl text-center">Masa Göze Çarpan</h5>
            <h3 className="text-secondcolor text-9xl font-black text-center">100<br />YIL</h3>
          </div>
          <div className="flex items-center">
            <p className="text-thirdcolor text-lg md:text-[26px] align-middle">Gazete çünkü ötekinden dolayı filmini mi sıradanlıktan göze çarpan lakin layıkıyla cesurca yaptı salladı. Otobüs bilgiyasayarı balıkhaneye Adana&apos;ya öyle ki gazete ona</p>
          </div>
          <div className="foto-galeri max-md:h-64 relative inline-block w-full">
            <Link href='/galeri/fotograf-galeri'>
              <div className="h-40">
                <img src={Galeri.image.src} alt="foto" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-0 left-0 h-full w-full bg-secondcolor/90 z-10 flex items-center justify-center">
                <h3 className="text-white flex items-center justify-center gap-4 text-5xl font-semibold"><RiFolderImageLine className="text-8xl" />Foto<br />Galeri</h3>
              </div>
            </Link>
          </div>
          <div className="foto-galeri max-md:h-64 relative inline-block w-full">
            <Link href='/galeri/video-galeri'>
              <div className="h-40">
                <img src={Galeri.image.src} alt="foto" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-0 left-0 h-full w-full bg-maincolor/90 z-10 flex items-center justify-center">
                <h3 className="text-white flex items-center justify-center gap-4 text-5xl font-semibold"><RiFolderVideoLine className="text-8xl" />Video<br />Galeri</h3>
              </div>
            </Link>
          </div>
        </div>
        <div id="slider" className="mt-20 px-4">
          <Slide images={sliderImg} />
        </div>
      </div>
      <div id="ad" className="bg-[#F3F5F7] mt-20 p-8">
        {
          adImage.map((i) => <a key={i} href="#" className="flex justify-center items-center">
            <div><img src={i.url} alt={i.name} className="max-w-[760px] xl:w-[760px] md:w-[650px] w-[450px] object-cover" /></div>
          </a>)
        }
      </div>
    </main>
  );
}
