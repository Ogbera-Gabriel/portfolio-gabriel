import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel | Frontend Developer Portfolio",
  description: "Explore Gabriel's portfolio, showcasing expertise in modern frontend development, UI/UX design, and responsive web applications. Discover projects that highlight skills in HTML, CSS, JavaScript, React, Next.js, Tailwind, Framer Motion, Node.js, Express, MongoDB, PostgreSQL and more.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-slate-500 text-slate-950 relative pt-28 sm:pt-36`}>
        <div className="bg-gray-100 absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-white absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider>
        <Header />
        {children}
        <Footer />
        <Toaster position="top-right"/>
        </ActiveSectionContextProvider>
        <Analytics />
        </body>
    </html>
  );
}
