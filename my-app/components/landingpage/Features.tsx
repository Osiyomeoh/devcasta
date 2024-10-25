import { featuresData } from "@/mocks/features";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="bg-[#0C0E12] w-full pt-5 md:pt-24">
      <h6 className="text-[#CECFD2] font-semibold text-base text-center">
        Features
      </h6>
      <div className="w-full mt-3 flex flex-col items-center md:px-[8rem] lg:px-[16rem]">
        <h4 className="font-semibold text-[2.2rem] text-[#F7F7F7] text-center">
          A Smarter Way to Evaluate Developers
        </h4>
        <p className="text-center text-[#94979C] font-normal text-[1.06rem] md:text-xl mt-5">
          From automated tests tailored to a developer’s GitHub history to live
          coding sessions where interviewers can observe real-time
          problem-solving, Devcasta provides a complete view of a candidate’s
          skills and coding approach.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8  mt-16">
        {featuresData.map((feature) => (
          <div key={feature.name} className="w-full flex flex-col items-center">
            <div className="md:hidden">
              <Image
                src={feature.whiteImageSrc}
                alt={feature.name}
                width={48}
                height={48}
              />
            </div>
            <div className="hidden md:block">
              <Image
                src={feature.imageSrc}
                alt={feature.name}
                width={48}
                height={48}
              />
            </div>

            <h5 className="mt-5 font-semibold text-xl text-[#F7F7F7] text-center ">
              {feature.name}
            </h5>
            <p className="mt-2 font-normal text-sm text-[#94979C] text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
