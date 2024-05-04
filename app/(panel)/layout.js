import localFont from 'next/font/local';
import { Inter } from "next/font/google";
import "../globals.css";
import Transition from '@/Transition';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SunFlower | Yönetim Paneli",
  description: "Sunflower",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` overflow-x-hidden`}>
        <Transition>
          {children}
        </Transition>
      </body>
    </html>
  );
}
