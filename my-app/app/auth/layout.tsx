'use client'
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname()
  const isLogin = pathName === '/auth/login'
  return (
    <main className="max-w-[1440px] min-h-screen mx-auto relative bg-deepBlue  flex ">
      <section className="bg-transparent w-full h-full md:w-3/5 md:mx-auto   lg:w-3/5 text-white pt-8">
       <div className="w-[120px] h-[32px] relative ml-8">
       <Image src="/Logo.svg" alt="DevCasta Logo" fill />
       </div>
      <div className="px-5 lg:px-[8.75rem] w-full h-full">
      {children}
      </div>
       
   
      </section>
      <section className="bg-cardBorder  sm:w-4/5 pl-[6rem] py-[120px] relative hidden xl:block overflow-hidden">
      <div className="absolute -right-6 top-0 h-[125px] w-[298px] -z-0">
      <Image src="/line-pattern.svg" alt="Line pattern" fill/>
      </div>
     
      {/* <div className="relative h-full w-full"> */}
      <Image src={isLogin ? "/screen-mock.svg":"/coding-screen.svg"} alt="Coding Screen Mock" className="h-full w-full" width={0} height={0} />
      {/* </div> */}
   
      <div className="absolute -left-6 -bottom-1 h-[125px] w-[298px]">
      <Image src="/line-pattern.svg" alt="Line pattern" fill/>
      </div>

      </section>
      <p className="absolute left-8 bottom-8 font-normal text-sm text-[#94969C]">© DevPlayground {new Date().getFullYear()}</p>
    </main>
  );
};

export default layout;
