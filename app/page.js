import Image from "next/image";
import { RiCalendarLine } from "react-icons/ri";
import { HeroImage } from "./data/images";
import Illust1 from '../app/assets/svg/illust1.svg';
import Illust2 from '../app/assets/svg/illus2.svg';
import { Announcment } from "./data/announcment";

export default function Home() {
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
        <div className="absolute md:right-[-30px] xl:right-0 xl:bottom-[-130px]">
          <Image src={Illust2} width={450} alt="illustrations" className="xl:w-[450px] lg:w-[350px] md:w-[250px] md:block hidden " />
        </div>
      </div>
      <div id="announcement" className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
        <div className="announcement-left flex items-center justify-end">
          <div className="w-1/2 mb-8">
            <h4 className="text-white text-3xl md:text-4xl font-medium">Duymak<br />İstediklerin</h4>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="secondary-bg p-4 rounded-lg flex flex-col justify-between">
            <p className="text-white/50 flex gap-2 items-center"><RiCalendarLine /><span>Tarih</span></p>
            <h4 className="text-white text-xl">Başlık</h4>
            <p className="text-white text-lg">İçerik</p>
            <button className="button">Devamını Oku</button>
          </div>
          <div className="secondary-bg p-4 rounded-lg flex flex-col justify-between">
            <p className="text-white/50 flex gap-2 items-center"><RiCalendarLine /><span>Tarih</span></p>
            <h4 className="text-white text-xl">Başlık</h4>
            <p className="text-white text-lg">İçerik</p>
            <button className="button">Devamını Oku</button>
          </div>
        </div>
      </div>
    </main>
  );
}
