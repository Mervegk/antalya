
import React, { useCallback, useEffect, useState } from 'react'
import { RiArrowDownSFill } from "react-icons/ri";
import classNames from 'classnames';

function Dropdown({ children, title }) {

    const [open, setOpen] = useState(false);

    return (
        <div className='h-full'>
            <div className='dropdown h-full'>
                <p className='flex items-center gap-2 h-full text-lg'>{title} <RiArrowDownSFill /></p>
                <div className='children flex flex-col lg:w-48'>{children}</div>
            </div>
        </div>
        /*   <div className='py-2 relative'>
              <button onClick={() => setOpen((prev) => !prev)}
                  className={classNames(`dropdown text-[${textColor}] bg-[${bgColor}] text-[${fSize}px] px-1 flex gap-1 items-center`)}>{title}<RiArrowDownSLine className={classNames('transition-all duration-200 ease-in-out', {
                      'rotate-180': open,
                  })} /> </button>
              <div className={classNames('children lg:w-48 absolute top-8 left-0 z-50 py-2 rounded bg-white transition-all duration-200 ease-in-out',
                  { 'flex': open, 'hidden': !open })}> <div className='w-full flex flex-col gap-2 relative'>{children}</div></div>
  
          </div> */
    )
}

export default Dropdown;