import React from "react";
import { FooterMenuList, FooterSocials, footerLogo } from "./footerData";
import Link from "next/link";
function FooterComponent() {
  return (
    <section className="pb-[5.8rem]">
      <div>
        {footerLogo}
        <div className="flex justify-between mt-[1.38rem]">
          <p>Explore Property Intels</p>
          <div className="flex gap-[4.38rem]">
            {FooterMenuList.map(([item, link]) => (
              <Link href={link}>{item}</Link>
            ))}
          </div>
        </div>
        <div className="mb-[1.75rem] mt-[2.19rem] h-[0.0625rem] bg-[rgba(191,191,191,0.25)]"></div>
        <div className="flex justify-between items-center ">
          <p className="text-footer text-base leading-[1.25rem] font-normal ">
            © 2023. ThePropertyIntel. All Rights Reserved.
          </p>
          <div className="flex gap-[1.06rem]">
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
