import "./globals.css";
import Header from './components/layout/Header'
import Hero from './components/layout/hero'
import {Inter} from "next/font/google";
import ItemsSection from './components/layout/items'


const inter = Inter({ subsets: ['latin']});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      ><Header/>
      <Hero/>
      <ItemsSection/>
        {children}
      </body>
    </html>
  );
}
