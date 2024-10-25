import RightLayout from "@/components/auth/RightLayout";
import Logo from "@/components/Logo";
import React from "react";

import { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-sans",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  fallback: ["sans-serif"],

});


export const metadata: Metadata = {
  title: "Devcasta",
  description: "DevCasta",
};
const layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang="en">
    <body
      className={`${inter.variable} antialiased`}
    >
    <main className="max-w-[1440px] min-h-screen mx-auto relative bg-deepBlue  flex ">
      <section className="bg-transparent w-full h-full md:w-3/5 md:mx-auto   lg:w-3/5 text-white pt-8">
    <Logo/>
      <div className="px-5 lg:px-[8.75rem] w-full h-full">
      {children}
      </div>
       
   
      </section>
     <RightLayout/>
      <p className="absolute left-8 bottom-8 font-normal text-sm text-[#94969C]">© DevPlayground {new Date().getFullYear()}</p>
    </main>
    </body>
    </html>
  );
};

export default layout;
