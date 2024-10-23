import Image from "next/image";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-[1440px] min-h-screen mx-auto bg-deepBlue pl-8 flex ">
      <section className="bg-transparent w-full relative  sm:w-3/5 text-white pt-8">
       <div className="w-[120px] h-[32px] relative">
       <Image src="/Logo.svg" alt="DevCasta Logo" fill />
       </div>
      <div className="px-[8.75rem] w-full">
      {children}
      </div>
       
        <p className="absolute left-8 bottom-8 mt-[2.6rem] font-normal text-sm text-[#94969C]">© DevPlayground {new Date().getFullYear()}</p>
      </section>
      <section className="bg-cardBorder  sm:w-4/5 pl-[6rem] py-[120px] relative hidden sm:block overflow-hidden">
      <div className="absolute -right-6 top-0 h-[125px] w-[298px] -z-0">
      <Image src="/line-pattern.svg" alt="Line pattern" fill/>
      </div>
     
      {/* <div className="relative h-full w-full"> */}
      <Image src="/screen-mock.svg" alt="Coding Screen Mock" className="h-full w-full" width={0} height={0} />
      {/* </div> */}
   
      <div className="absolute -left-6 -bottom-1 h-[125px] w-[298px]">
      <Image src="/line-pattern.svg" alt="Line pattern" fill/>
      </div>

      </section>
    </main>
  );
};

export default layout;
