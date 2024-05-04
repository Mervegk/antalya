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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` overflow-x-hidden`}>
        <Transition>
          <Sidebar />
          {children}
        </Transition>
      </body>
    </html>
  );
}
