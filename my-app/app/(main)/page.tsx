import CustomButton from "@/components/CustomButton";
import { Faq } from "@/components/landingpage/Faqs";
import { featuresData } from "@/mocks/features";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section  */}
      <section className="bg-heroBg object-cover w-full pt-[6rem] md:px-[15rem] flex flex-col justify-center items-center">
        <h4 className="font-semibold text-[3.7rem] text-[#F7F7F7] leading-[72px] text-center">
          Connect Developers with Interviewers in Real-Time
        </h4>
        <p className="font-normal text-xl text-[#94979C] mt-6 text-center">
          Devcasta automates skill testing and enables live coding sessions,
          giving interviewers deeper insights into developer performance.
        </p>
        <div className="flex items-center gap-3 mt-12">
          <CustomButton
            title="Demo"
            styles="h-[3.7rem] w-[7.1rem] rounded-[1.8rem] bg-[#13161B] text-white border border-[#373A41] font-semibold text-lg"
            imgSrc="/play.svg"
            imgAlt="play button"
          />
          <CustomButton
            title="Sign up"
            styles="h-[3.7rem] w-[7.1rem] rounded-[1.8rem] bg-blueAccent text-white border border-[#373A41] font-semibold text-lg"
          />
        </div>
        <div className=" w-full md:w-[76rem] h-[31rem] relative mt-16 -z-1 ">
          <Image src="/Content.svg" alt="hero img" fill />
        </div>
      </section>
      <section className="bg-[#0C0E12] w-full pt-24">
        <h6 className="text-[#CECFD2] font-semibold text-base text-center">
          Features
        </h6>
        <div className="w-full mt-3 flex flex-col items-center px-[16rem]">
        <h4 className="font-semibold text-[2.2rem] text-[#F7F7F7] ">A Smarter Way to Evaluate Developers</h4>
        <p className="text-center text-[#94979C] font-normal text-xl mt-5">From automated tests tailored to a developer’s GitHub history to live coding sessions where interviewers can observe real-time problem-solving, Devcasta provides a complete view of a candidate’s skills and coding approach.</p>
        </div>
     <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8  mt-16">
     
        {featuresData.map((feature) => (
           <div key={feature.name} className="w-full flex flex-col items-center">
             <Image src={feature.imageSrc} alt={feature.name} width={48} height={48}/>
             <h5 className="mt-5 font-semibold text-xl text-[#F7F7F7]">{feature.name}</h5>
             <p className="mt-2 font-normal text-sm text-[#94979C] text-center">{feature.description}</p>
                </div>
        ))}
       
      </div>
 
      </section>
      <section className="bg-[#0C0E12] w-full pt-24 md:px-[14rem]">
<h4 className="font-semibold text-4xl text-center text-[#F7F7F7]">Frequently asked questions</h4>
<p className="font-normal text-xl text-center text-[#94979C] mt-5">Everything you need to know about the product and billing.</p>
<div className="w-full flex flex-col items-center mt-16">
  <Faq/>
  <Faq/>
  <Faq/>
  <Faq/>
  <Faq/>
</div>


      </section>
      <div className="w-full h-[19.1rem] bg-[#13161B] mt-16 rounded-[16px]  pb-10 flex flex-col items-center justify-center">
      
        <Image src="/avatars.svg" alt="avatars" className="my-8" width={120} height={56}/>

        <h5 className="font-semibold text-xl text-center text-[#F7F7F7]">Still have questions?</h5>
        <p className="mt-2 text-[#94979C] font-normal text-lg text-center">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        <CustomButton
          title="Get in touch"
          styles="h-12 w-[8.3rem] mt-8 rounded-[1.8rem] bg-blueAccent text-white border border-[#373A41] font-semiBold text-base"
        />
       

</div>
    </main>
  );
}
