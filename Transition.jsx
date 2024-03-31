"use client"
import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation';
import Loader from './components/Loader';

export default function Transition({ children }) {
    const pathname = usePathname();
    const [transition, setTransition] = useState(false);
    useEffect(() => {
        // Simulate a loading state change based on pathname change
        setTransition(true);
        const timer = setTimeout(() => {
            setTransition(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [pathname]);
    return transition ?
        <Loader /> : children

}
