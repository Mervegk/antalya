import Image from "next/image";
import { HeroImage } from "./data/images";
import Illust1 from '../app/assets/svg/illust1.svg';
import Illust2 from '../app/assets/svg/illus2.svg';

export default function Home() {
  let heroBg = {
    backgroundImage: 'url(' + HeroImage.image.src + ')'
  }
  return (
    <main className="min-h-screen">
      <div id="hero-section" className="h-[550px] bg-cover bg-no-repeat bg-center" style={heroBg}></div>
      <div className="my-32 primary-bg p-4 relative flex justify-center">
        <div className="absolute left-0 bottom-[-140px]">
          <Image src={Illust1} width={450} alt="illustrations" />
        </div>
        <div className="text-center text-white w-1/2">
          <h3 className="text-5xl font-bold">Anlamsız</h3>
          <p className="text-xl font-medium">Kapının kulu çünkü batarya kutusu dışarı çıktılar düşünüyor cezbelendi biber. Hesap makinesi umut layıkıyla.</p>
          <p className="mt-4">Sıradanlıktan Uzattı</p>
        </div>
        <div className="absolute right-0 bottom-[-140px]">
          <Image src={Illust2} width={450} alt="illustrations" />
        </div>
      </div>
    </main>
  );
}
