import React from "react";
import { FooterMenuList, FooterSocials, footerLogo } from "./footerData";
import Link from "next/link";
function FooterComponent() {
  return (
    <section className="pb-[5.8rem]">
      <div className="relative">
        {footerLogo}
        <div className="lg:flex justify-between mt-[1.38rem]">
          <p className="mb-5">Explore Property Intels</p>
          <div className="grid gap-[1.88rem] lg:gap-[4.38rem] grid-cols-2">
            {FooterMenuList.map(([item, link]) => (
              <Link
                className="text-base text-[#414356] leading-[1.8125rem] tracking-[-0.02rem] font-normal "
                href={link}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="mb-[1.75rem] mt-[2.19rem] h-[0.0625rem] bg-[rgba(191,191,191,0.25)]"></div>
        <div className="lg:flex justify-between items-center ">
          <p className="text-footer text-base leading-[1.25rem] font-normal max-lg:text-center ">
            © 2023. ThePropertyIntel. All Rights Reserved.
          </p>
          <div className="flex gap-[1.06rem] max-lg:absolute top-[215px] right-[20px]">
            {FooterSocials.map(([icon, link], key) => (
              <div key={key}>{icon}</div>
              //   <p></p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterComponent;
