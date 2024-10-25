import React, { useState } from "react";
import { Button } from "../ui/button";

const PlanSwitch = () => {
  const [isMonthly, setisMonthly] = useState(true);
  return (
    <div className="w-full mt-3">
      <h4 className="font-semibold text-[1.3rem] md:text-5xl text-[#F4F9FF]">
        Simple, transparent pricing
      </h4>
      <p className="text-[#F4F9FF] font-normal text-[1.06rem] md:text-xl mt-6 mb-8">
        We believe Untitled should be accessible to all companies, no matter the
        size.
      </p>
      <div className="w-full flex justify-between items-center bg-black border border-cardBorder rounded-[12px] px-[4px] py-[4px] mt-8 mb-[4.1rem]  md:mb-24 lg:my-5">
        <Button
          onClick={() => setisMonthly(true)}
          className={`w-full h-9 rounded-[6px] flex items-center justify-center text-white font-semibold ${
            isMonthly ? "bg-cardBg text-white" : "bg-transparent text-[#667085]"
          } text-sm drop-shadow-[0_1px_2px_rgba(16,24,40,0.06)]`}
        >
          Mothly billing
        </Button>
        <Button
          onClick={() => setisMonthly(false)}
          className={`w-full h-9 rounded-[6px] flex items-center justify-center  ${
            !isMonthly
              ? "bg-cardBg text-white"
              : "bg-transparent text-[#667085]"
          } font-semibold text-sm drop-shadow-[0_1px_3px_rgba(16,24,40,0.1)]`}
        >
          Annual billing
        </Button>
      </div>
    </div>
  );
};

export default PlanSwitch;
