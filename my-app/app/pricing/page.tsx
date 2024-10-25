"use client";
import CustomButton from "@/components/CustomButton";
import Logo from "@/components/Logo";
import PlanSwitch from "@/components/pricing/PlanSwitch";
import { CheckIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const page = () => {
  return (
    <main className="min-h-screen bg-[#1A1B1A] max-w-[1440px] mx-auto px-8  md:px-[7rem] pt-[3.25rem] pb-24">
      <div className="-ml-8 ">
        <Logo />
      </div>

      <Link className="mt-3 text-blueAccent" href="/pricing">
        Pricing
      </Link>
      <PlanSwitch />
      <section className="flex flex-col items-center lg:flex-row gap-8 ">
        <div className="w-full lg:w-[24rem] rounded-[10px] bg-cardBg px-8 flex flex-col items-center pt-10 pb-8 mt-24">
          <h2 className="font-semibold text-[48px] text-white">Free</h2>
          <h6 className="mb-8 mt-4 font-normal text-xl text-white">
            Basic plan
          </h6>

          <ul className="w-full flex flex-col gap-4">
            <li className="flex items-center gap-3 ">
              <CheckIcon className="bg-blueAccent text-white rounded-[16px] h-6 w-6" />
              <span className="text-white font-normal text-base">
                Basic access to puzzles
              </span>
            </li>
            <li className="flex items-center gap-3 ">
              <CheckIcon className="bg-blueAccent text-white rounded-[16px] h-6 w-6" />
              <span className="text-white font-normal text-base">
                GitHub integration
              </span>
            </li>
            <li className="flex items-center gap-3 ">
              <CheckIcon className="bg-blueAccent text-white rounded-[16px] h-6 w-6" />
              <span className="text-white font-normal text-base">
                Progress tracking
              </span>
            </li>
          </ul>
          <CustomButton
            title="Get started"
            styles="h-12 mt-10 w-full rounded-[1.8rem] bg-blueAccent text-white border border-[#373A41]"
          />
        </div>
        <div className="w-full lg:w-[24rem] rounded-[10px] bg-cardBg px-8 flex flex-col items-center pt-10 pb-8 mt-24">
          <h2 className="font-semibold text-[48px] text-white">Premium</h2>
          <h6 className="mb-2 mt-4 font-normal text-xl text-white">Users</h6>

          <h6 className="font-normal text-base text-white mb-8">
            Billed Monthly.
          </h6>
          <ul className="w-full flex flex-col gap-4">
            <li className="flex items-center gap-3 ">
              <CheckIcon className="bg-blueAccent text-white rounded-[16px] h-6 w-6" />
              <span className="text-white font-normal text-base">
                Exclusive puzzles
              </span>
            </li>
            <li className="flex items-center gap-3 ">
              <CheckIcon className="bg-blueAccent text-white rounded-[16px] h-6 w-6" />
              <span className="text-white font-normal text-base">
                Advanced analytics
              </span>
            </li>
            <li className="flex items-center gap-3 ">
              <CheckIcon className="bg-blueAccent text-white rounded-[16px] h-6 w-6" />
              <span className="text-white font-normal text-base">
                Advanced personalized challenges
              </span>
            </li>
            <li className="flex items-center gap-3 ">
              <CheckIcon className="bg-blueAccent text-white rounded-[16px] h-6 w-6" />
              <span className="text-white font-normal text-base">
                Token rewards boost
              </span>
            </li>
          </ul>
          <CustomButton
            title="Get started"
            styles="h-12 mt-10 w-full rounded-[1.8rem] bg-blueAccent text-white border border-[#373A41]"
          />
        </div>
        <div className="w-full lg:w-[24rem] rounded-[10px] bg-cardBg px-8 flex flex-col items-center pt-10 pb-8 mt-24">
          <h2 className="font-semibold text-[48px] text-white">Premium</h2>
          <h6 className="mb-2 mt-4 font-normal text-xl text-white">
            Interviewers
          </h6>

          <h6 className="font-normal text-base text-white mb-8">
            Billed Monthly.
          </h6>

          <ul className="w-full flex flex-col gap-4">
            <li className="flex items-center gap-3 ">
              <CheckIcon className="bg-blueAccent text-white rounded-[16px] h-6 w-6" />
              <span className="text-white font-normal text-base">
                Custom puzzle creation
              </span>
            </li>
            <li className="flex items-center gap-3 ">
              <CheckIcon className="bg-blueAccent text-white rounded-[16px] h-6 w-6" />
              <span className="text-white font-normal text-base">
                Extended coding session times
              </span>
            </li>
            <li className="flex items-center gap-3 ">
              <CheckIcon className="bg-blueAccent text-white rounded-[16px] h-6 w-6" />
              <span className="text-white font-normal text-base">
                Unlimited individual users
              </span>
            </li>
            <li className="flex items-center gap-3 ">
              <CheckIcon className="bg-blueAccent text-white rounded-[16px] h-6 w-6" />
              <span className="text-white font-normal text-base">
                Detailed candidate performance reports
              </span>
            </li>
          </ul>
          <CustomButton
            title="Get started"
            styles="h-12 mt-10 w-full rounded-[1.8rem] bg-blueAccent text-white border border-[#373A41]"
          />
        </div>
      </section>
    </main>
  );
};

export default page;
