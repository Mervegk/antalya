
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
                            <div className='children flex flex-col lg:w-48'>{children}</div>
                        </div>
                    </div>
                )
            case triggerOptions.click:
                return (
                    <div>
                        <p className='flex items-center gap-2 h-full text-lg' onClick={() => setOpen((prev) => !prev)}>{title} <RiArrowDownSFill /></p>
                        <div className={classNames('flex-col lg:w-4 transition-all duration-150 ease-linear', {
                            'flex mt-0': open,
                            'hidden -mt-[100]': !open
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