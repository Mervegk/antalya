"use client"
import React from 'react'
import { Sidebar, SidebarItem } from '@/components/panel/layout/Sidebar'
import { RiGraduationCapLine, RiSchoolLine, RiMegaphoneLine, RiGalleryLine, RiPhoneLine, RiOpenArmLine } from "react-icons/ri";
export default function SideBar() {
  return (
    <Sidebar>
      <SidebarItem icon={<RiGraduationCapLine />} text='Burs' />
      <SidebarItem icon={<RiSchoolLine />} text='Vakıf' />
      <SidebarItem icon={<RiOpenArmLine />} text='Faaliyet' />
      <SidebarItem icon={<RiGalleryLine />} text='Galeri' />
      <SidebarItem icon={<RiPhoneLine />} text='İletişim' />
      <SidebarItem icon={<RiMegaphoneLine />} text='Duyurular' />
    </Sidebar>
  )
}
