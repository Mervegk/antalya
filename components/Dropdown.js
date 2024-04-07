
import React, { useCallback, useEffect, useState } from 'react'
import { RiArrowDownSFill } from "react-icons/ri";
import classNames from 'classnames';

const triggerOptions = {
    hover: "hover",
    click: "click"
}

function Dropdown({ children, title, trigger }) {

    const [open, setOpen] = useState(false);

    const getTriggerOptions = (trigger) => {
        switch (trigger) {
            case triggerOptions.hover:
                return (
                    <div className='h-full'>
                        <div className='dropdown h-full'>
                            <p className='flex items-center gap-2 h-full text-lg'>{title} <RiArrowDownSFill /></p>
                            <div className='dropdown-items flex flex-col lg:w-48'>{children}</div>
                        </div>
                    </div>
                )
            case triggerOptions.click:
                return (
                    <div className='w-full cursor-pointer'>
                        <p className='flex items-center gap-2 h-full text-lg justify-between' onClick={() => setOpen((prev) => !prev)}>{title} <RiArrowDownSFill /></p>
                        <div className={classNames('flex-col lg:w-4 transition-all duration-150 ease-linear delay-75', {
                            'flex mt-0 translate-x-2 opacity-1': open,
                            'hidden -mt-[100] translate-x-0 opacity-0': !open
                        })}>{children}</div>
                    </div>
                )
        }
    }
    return (
        <>
            {
                getTriggerOptions(trigger)
            }
        </>
    )

}

export default Dropdown;