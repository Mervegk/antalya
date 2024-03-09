import { HeroImage } from "../app/data/images";
import Breadcrumb from "./Breadcrumb";

export default function InsideHero({ items, pageTitle }) {
    let heroBg = {
        backgroundImage: 'url(' + HeroImage.image.src + ')'
    }
    return (
        <div className="relative h-[230px] px-4 lg:px-8">
            <div style={heroBg} className="h-[230px] bg-cover bg-center bg-no-repeat blur-sm absolute left-0 top-0 z-[-1] w-full">
            </div>
            <div className="container mx-auto h-full grid grid-cols-2 items-center text-white">
                <div><Breadcrumb items={items} /></div>
                <div className="justify-self-end font-semibold text-base md:text-lg lg:text-2xl text-center">{pageTitle}</div>
            </div>
        </div>
    );
}