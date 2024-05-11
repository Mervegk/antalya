"use client"
import React, { createContext, useContext, useState } from 'react';
import Image from 'next/image';
import { RiHome4Line, RiArrowLeftDoubleLine, RiGraduationCapLine, RiSchoolLine, RiMegaphoneLine, RiGalleryLine, RiPhoneLine, RiOpenArmLine } from "react-icons/ri";
import { LogoImage } from '@/app/data/images';
import { usePathname } from 'next/navigation';

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <aside className={`h-screen transition-all duration-300 ${collapsed ? 'w-64' : 'w-20'}`}>
      <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
        <div className={`p-4 pb-2 flex items-center h-12 ${collapsed ? 'justify-between' : 'justify-center'}`}>
          <div className={collapsed ? 'w-12' : 'w-0'}>
            <img src={LogoImage.image.src} className={`overflow-hidden transition-all duration-300 $ `} alt='logo' />
          </div>
          <button onClick={() => setCollapsed((prev) => !prev)}
            className='p-1 bg-thirdcolor/5 rounded-lg text-3xl text-secondcolor hover:bg-thirdcolor/15 transition-all duration-100 ease-linear'><RiArrowLeftDoubleLine className={`transition-all ${collapsed ? 'rotate-180' : 'rotate-0'}`} />
          </button>
        </div>
        <SidebarContext.Provider value={{ collapsed }}>
          <ul className='flex-1 px-3 mt-4'>
            <SidebarItem icon={<RiHome4Line />} text='Panel' link='/yonetim-paneli' alert='Yönetim Paneli' />
            <SidebarItem icon={<RiGraduationCapLine />} text='Burs' alert='Burs' />
            <SidebarItem icon={<RiSchoolLine />} text='Vakıf' alert='Vakıf' />
            <SidebarItem icon={<RiOpenArmLine />} text='Faaliyet' alert='Faaliyet' />
            <SidebarItem icon={<RiGalleryLine />} text='Galeri' alert='Galeri' />
            <SidebarItem icon={<RiPhoneLine />} text='İletişim' link='/yonetim-paneli/iletisim' alert='İletişim' />
            <SidebarItem icon={<RiMegaphoneLine />} text='Duyurular' alert='Duyurular' />
          </ul>
          <div className={`border-t flex p-2 ${!collapsed ? 'justify-center' : ''}`} >
            <div className='min-w-12 min-h-12 w-12 h-12 rounded-md'><img src='https://placehold.co/600x400' className='h-full w-full object-cover' /></div>
            <div className={`flex items-center w-52 ml-3 transition-all duration-200 ease-linear ${!collapsed ? 'hidden' : ''}`}>
              <div>
                <h4 className='font-semibold'>Ayşe Fatma</h4>
              </div>
            </div>
          </div>
        </SidebarContext.Provider>
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, alert, link }) {
  const { collapsed } = useContext(SidebarContext);
  return (
    <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-all duration-150 ease-linear ${collapsed ? '' : 'justify-center group'} ${window.location.pathname == link ? 'sidebar-menu-active' : 'sidebar-menu'} `}
      onClick={() => { window.location.pathname = link }}
    > <i className='text-2xl'>{icon}</i> <span className={`overflow-hidden transition-all ${collapsed ? 'w-52 ml-3' : 'w-0'} `}>{text}</span>
      {!collapsed && <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-[#f8fbfe] text-secondcolor text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>{text}</div>}
    </li>
  );
}

/* 
${active ? 'bg-gradient-to-tr from-secondcolor/15 to-secondcolor/30 text-secondcolor' : 'hover:bg-secondcolor/50 text-thirdcolor hover:text-white'}
*/