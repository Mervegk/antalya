import localFont from 'next/font/local';
import { Inter } from "next/font/google";
import "../globals.css";
import Transition from '@/Transition';
import Sidebar from '@/components/panel/layout/Sidebar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SunFlower | Yönetim Paneli",
  description: "Sunflower",
};

const Poppins = localFont({
  src: [
    {
      path: '../assets/font/Poppins/Poppins-Thin.ttf',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../assets/font/Poppins/Poppins-ExtraLight.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../assets/font/Poppins/Poppins-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../assets/font/Poppins/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/font/Poppins/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/font/Poppins/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../assets/font/Poppins/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../assets/font/Poppins/Poppins-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../assets/font/Poppins/Poppins-Black.ttf',
      weight: '900',
      style: 'normal'
    }
  ],
  variable: '--font-poppins'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` overflow-x-hidden`}>
        <Transition>
          <div className='flex'>
            <Sidebar />
            {children}
          </div>
        </Transition>
      </body>
    </html>
  );
}
