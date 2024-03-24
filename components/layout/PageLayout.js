'use client'
import React, { useEffect, useState } from 'react'
import InsideHero from '@/components/InsideHero';

function PageLayout({ items, crumbPageTitle, pageTitle, pageData, contentClasses, children }) {

    return (
        <div className='min-h-[calc(100vh-545px)]'>
            <InsideHero items={items} pageTitle={crumbPageTitle} />
            <div className='custom-container mx-auto bg-white rounded-[10px] pt-20 px-5 md:px-16 pb-[60px] -mt-[50px] box-shadow'>
                <div>
                    <h1 className='text-title text-[40px] sm:text-[50px] text-center font-semibold'>{pageTitle}</h1>
                    {
                        pageData ? <div dangerouslySetInnerHTML={{ __html: pageData }} className={`mt-8 text-base md:text-xl text-thirdcolor ${contentClasses}`}></div> : null
                    }

                </div>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default PageLayout