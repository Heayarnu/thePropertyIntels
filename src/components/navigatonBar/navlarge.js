// "use client"
import React from "react";
import Link from "next/link";
import { LogoLG } from "./NavData";

function NavLarge() {
  return (
    <div className="pt-[2.62rem] relative bg-transparent flex text-base font-medium tracking-[-0.02rem]  items-center justify-between">
      <div className=" bg-transparent flex items-center gap-[3.5rem]">
        <div className="absolute bottom-[-50px] left-0 right-0 h-[0.0625rem] bg-[rgba(212,69,69,0.05)]"></div>
        <Link href={"/"} className="text-white whitespace-nowrap ">
          About Us
        </Link>
        <Link href={"/"} className="text-white whitespace-nowrap">
          Contact Us
        </Link>
      </div>
      <Link href="/" className="">
        {LogoLG}
      </Link>
      <div className="flex gap-[3.5rem] items-center">
        <Link href={"/"} className="text-white block whitespace-nowrap">
          Our Services
        </Link>
        <Link
          href={"/"}
          className="text-primary w-[9.25rem] text-center p-[0.625rem] font-semibold font-base  tracking-[-0.02rem] rounded-[6.25rem] bg-[rgba(255,255,255,0.25)] shadow-[0px_0px_10px_0px_rgba(163,163,163,0.25)] whitespace-nowrap"
        >
          Register Now
        </Link>
      </div>
    </div>
  );
}

export default NavLarge;
