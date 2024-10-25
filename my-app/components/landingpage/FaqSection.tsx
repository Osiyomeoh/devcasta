import React from "react";
import { Faq } from "./Faqs";
import { faqs } from "@/mocks/faqs";

const FaqSection = () => {
  return (
    <section className="bg-[#0C0E12] w-full pt-5 md:pt-24 md:px-5 lg:px-[14rem]">
      <h4 className="font-semibold text-4xl text-center text-[#F7F7F7]">
        Frequently asked questions
      </h4>
      <p className="font-normal text-xl text-center text-[#94979C] mt-5">
        Everything you need to know about the product and billing.
      </p>
      <div className="w-full flex flex-col items-center mt-16">
        {faqs.map((faq) => (
          <Faq key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
