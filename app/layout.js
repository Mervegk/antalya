import localFont from 'next/font/local';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SunFlower",
  description: "Sunflower",
};

const Poppins = localFont({
  src: [
    {
      path: './assets/font/Poppins/Poppins-Thin.ttf',
      weight: '100',
      style: 'normal'
    },
    {
      path: './assets/font/Poppins/Poppins-ExtraLight.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: './assets/font/Poppins/Poppins-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './assets/font/Poppins/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './assets/font/Poppins/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './assets/font/Poppins/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './assets/font/Poppins/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './assets/font/Poppins/Poppins-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: './assets/font/Poppins/Poppins-Black.ttf',
      weight: '900',
      style: 'normal'
    }
  ],
  variable: '--font-poppins'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Poppins.className} overflow-x-hidden`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
