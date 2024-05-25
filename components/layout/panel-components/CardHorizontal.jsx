import React from 'react'
import '../../../app/assets/css/components.css'

export default function CardHorizontal({ children, title, bgColor, textColor, titleColor, icon, image }) {
  return (
    <div className={`grid grid-cols-[30%_70%] items-center justify-center horizontal-card relative`} style={{ background: bgColor }}>
      <div className='w-full h-full flex items-center'>
        {
          image && <img src={image.src} alt='' className='w-full h-full object-cover rounded-bl-[20px] rounded-tl-[20px]' />
        }
        {
          icon && icon
        }
      </div>
      <div className='flex flex-col justify-center gap-2 h-full p-2 border-dashed border-2 border-l-0 border-white rounded-r-[20px]'>
        <h1 className='font-semibold text-2xl' style={{ color: titleColor }}>{title}</h1>
        <div className='block' style={{ color: textColor }}>
          {children}
        </div>
      </div>
    </div>
  )
}
