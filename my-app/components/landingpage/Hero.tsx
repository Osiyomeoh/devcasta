import React from 'react'
import CustomButton from '../CustomButton'
import Image from 'next/image'

const Hero = () => {
  return (

    <section className="bg-heroBg object-cover w-full pt-10 md:pt-[6rem] md:px-5 lg:px-[15rem] flex flex-col justify-center items-center -z-1">
    <h4 className="font-semibold text-[38px] md:text-[3.7rem] text-[#F7F7F7] leading:[1.8rem] md:leading-[72px] text-center">
      Connect Developers with Interviewers in Real-Time
    </h4>
    <p className="font-normal text-[1.06rem] text-[#94979C] mt-6 text-center">
      Devcasta automates skill testing and enables live coding sessions,
      giving interviewers deeper insights into developer performance.
    </p>
    <div className="flex items-center gap-3 mt-12">
      <CustomButton
        title="Demo"
        styles="h-[3.7rem] w-[7.1rem] rounded-[1.8rem] bg-cardBorder md:bg-[#13161B] text-white border border-[#373A41] font-semibold text-lg"
        imgSrc="/play.svg"
        imgAlt="play button"
      />
      <CustomButton
        title="Sign up"
        styles="h-[3.7rem] w-[7.1rem] rounded-[1.8rem] bg-blueAccent text-white border border-[#373A41] font-semibold text-lg"
      />
    </div>
    <div className="md:hidden w-full h-[14.6rem] relative mt-[2.1rem]">
      <Image src="/mobile-content.svg" alt="hero img" fill />
    </div>
    <div className="hidden md:block md:w-[50rem] lg:w-[76rem] h-[31rem] relative mt-16">
      <Image src="/Content.svg" alt="hero img" fill />
    </div>
  </section>
  )
}

export default Hero