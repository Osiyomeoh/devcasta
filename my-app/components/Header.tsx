"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Header = () => {
  return (
    <nav className="w-full sticky top-0 z-50 h-16 flex items-center justify-between p-4 border border-[#22262F] rounded-[16px] bg-bgBlack">
      <div className="w-full flex items-center justify-between md:justify-start md:gap-8">
        <div className="w-[6.5rem] h-5  md:w-[120px] md:h-[32px] relative ">
          <Link href="/">
            <Image src="/Logo.svg" alt="DevCasta Logo" fill />
          </Link>
        </div>
        <ul className="hidden md:flex items-center justify-between gap-5">
          <li className="flex gap-1 items-center justify-center font-semibold text-base text-[#94979C]">
            {" "}
            <span>Products</span>
            <ChevronDown size={20} />
          </li>
          <li className=" font-semibold text-base text-[#94979C]">
            <Link href="/pricing">Pricing</Link>
          </li>
          <li className="flex gap-1 items-center justify-center font-semibold text-base text-[#94979C]">
            <span>Resources</span>
            <ChevronDown size={20} />
          </li>
          <li className=" font-semibold text-base text-[#94979C]">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between gap-3">
        <CustomButton
          title="Login"
          styles="h-10 w-[4.5rem] rounded-[1.8rem] bg-[#13161B] text-white border border-[#373A41]"
        />
        <CustomButton
          title="Sign up"
          styles="h-10 w-[5.1rem] rounded-[1.8rem] bg-blueAccent text-white border border-[#373A41]"
        />
      </div>
    </nav>
  );
};

export default Header;
