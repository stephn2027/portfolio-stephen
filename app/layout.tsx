import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import ThemeSwitch from '@/components/ThemeSwitch';
import ThemeContextProvider from '@/context/theme-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Stephen | Personal Portfolio',
  description: 'Stephen is an enthusiastic self-taught Frontend Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#f0f2f0] text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#bbd2c5] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#9bc5c3]/60"></div>
        <div className="bg-[#6b8492] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#616161]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
