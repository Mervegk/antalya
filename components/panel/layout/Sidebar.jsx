"use client"
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { RiHome4Line, RiArrowLeftDoubleLine, RiGraduationCapLine, RiSchoolLine, RiMegaphoneLine, RiGalleryLine, RiPhoneLine, RiOpenArmLine, RiMore2Line } from "react-icons/ri";
import { LogoImage } from '@/app/data/images';

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside className={`h-screen transition-all duration-300 ${!collapsed ? 'w-64' : 'w-20'}`}>
      <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
        <div className={`p-4 pb-2 flex items-center h-12 ${!collapsed ? 'justify-between' : 'justify-center'}`}>
          <div className={!collapsed ? 'w-12' : 'w-0'}>
            <img src={LogoImage.image.src} className={`overflow-hidden transition-all duration-300 $ `} alt='logo' />
          </div>
          <button onClick={() => setCollapsed((prev) => !prev)}
            className='p-1 bg-thirdcolor/5 rounded-lg text-3xl text-secondcolor hover:bg-thirdcolor/15 transition-all duration-300 ease-linear'><RiArrowLeftDoubleLine className={`transition-all ${!collapsed ? 'rotate-180' : 'rotate-0'}`} />
          </button>
        </div>
        <SidebarContext.Provider value={{ collapsed }}>
          <ul className='flex-1 px-3 mt-4'>
            <SidebarItem icon={<RiHome4Line />} text='Panel' link='/yonetim-paneli' alert='Yönetim Paneli' />
            <SidebarItem icon={<RiGraduationCapLine />} text='Burs' link='/yonetim-paneli/burs' alert='Burs' />
            <SidebarItem icon={<RiSchoolLine />} text='Vakıf' link='/yonetim-paneli/vakfimiz' alert='Vakıf' />
            <SidebarItem icon={<RiOpenArmLine />} text='Faaliyet' link='/yonetim-paneli/faaliyetlerimiz' alert='Faaliyet' />
            <SidebarItem icon={<RiGalleryLine />} text='Galeri' link='/yonetim-paneli/galeri' alert='Galeri' />
            <SidebarItem icon={<RiPhoneLine />} text='İletişim' link='/yonetim-paneli/iletisim' alert='İletişim' />
            <SidebarItem icon={<RiMegaphoneLine />} text='Duyurular' link='/yonetim-paneli/duyurular' alert='Duyurular' />
          </ul>
        </SidebarContext.Provider>
        <div className={`border-t flex p-3 ${collapsed ? 'mx-auto' : ''}`}>
          <img
            src="https://placehold.co/600x400"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${!collapsed ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Ayşe Fatma</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <RiMore2Line size={20} />
          </div>
        </div>
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, alert, link }) {
  const { collapsed } = useContext(SidebarContext);
  const [isMounted, setIsMounted] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  const handleClick = () => {
    if (menuRef.current) {
      window.location.pathname = link;
    }
  };

  return (
    <li ref={menuRef} className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-all duration-300 ease-linear ${!collapsed ? '' : 'justify-center group'} ${isMounted && window.location.pathname == link ? 'sidebar-menu-active' : 'sidebar-menu'} `}
      onClick={handleClick}
    > <i className='text-2xl'>{icon}</i> <span className={`overflow-hidden transition-all ${!collapsed ? 'w-52 ml-3' : 'w-0'} `}>{text}</span>
      {collapsed && <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-[#f8fbfe] text-secondcolor text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>{text}</div>}
    </li>
  );
}

/* 
${active ? 'bg-gradient-to-tr from-secondcolor/15 to-secondcolor/30 text-secondcolor' : 'hover:bg-secondcolor/50 text-thirdcolor hover:text-white'}
*/