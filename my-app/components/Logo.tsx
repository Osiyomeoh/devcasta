import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="w-[120px] h-[32px] relative ml-8">
      <Link href="/">
        <Image src="/Logo.svg" alt="DevCasta Logo" fill />
      </Link>
    </div>
  );
};

export default Logo;
