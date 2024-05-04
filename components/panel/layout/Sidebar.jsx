"use client"
import React, { createContext, useContext, useState } from 'react';
import Image from 'next/image';
import { RiArrowLeftDoubleLine, RiGraduationCapLine, RiSchoolLine, RiMegaphoneLine, RiGalleryLine, RiPhoneLine, RiOpenArmLine } from "react-icons/ri";
import { LogoImage } from '@/app/data/images';

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <aside className={`h-screen transition-all duration-300 ${collapsed ? 'w-64' : 'w-20'}`}>
      <nav className='h-screen flex flex-col bg-white border-r shadow-sm'>
        <div className={`p-4 pb-2 flex items-center ${collapsed ? 'justify-between' : 'justify-center'}`}>
          <div>
            <img src={LogoImage.image.src} className={`overflow-hidden transition-all duration-300 ${collapsed ? 'w-12' : 'w-0'} `} alt='logo' />
          </div>
          <button onClick={() => setCollapsed((prev) => !prev)}
            className='p-1 bg-thirdcolor/5 rounded-lg text-3xl text-secondcolor hover:bg-thirdcolor/15 transition-all duration-100 ease-linear'><RiArrowLeftDoubleLine className={`transition-all ${collapsed ? 'rotate-180' : 'rotate-0'}`} />
          </button>
        </div>
        <SidebarContext.Provider value={{ collapsed }}>
          <ul className='flex-1 px-3'>
            <SidebarItem icon={<RiGraduationCapLine />} text='Burs' active />
            <SidebarItem icon={<RiSchoolLine />} text='Vakıf' />
            <SidebarItem icon={<RiOpenArmLine />} text='Faaliyet' />
            <SidebarItem icon={<RiGalleryLine />} text='Galeri' />
            <SidebarItem icon={<RiPhoneLine />} text='İletişim' />
            <SidebarItem icon={<RiMegaphoneLine />} text='Duyurular' />
          </ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active, alert }) {
  const { collapsed } = useContext(SidebarContext);
  return (
    <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-all duration-150 ease-linear ${collapsed ? '' : 'justify-center'} ${active ? 'bg-gradient-to-tr from-secondcolor/15 to-secondcolor/30 text-secondcolor' : 'hover:bg-secondcolor/50 text-thirdcolor hover:text-white'}`}> <i className='text-2xl'>{icon}</i> <span className={`overflow-hidden transition-all ${collapsed ? 'w-52 ml-3' : 'w-0'} `}>{text}</span> {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-300 ${collapsed ? '' : 'top-2'}`}></div>} </li>
  );
}
