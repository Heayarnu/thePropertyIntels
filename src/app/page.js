"use client";
import HeroComponent from "@/components/hero/heroComponent";
import ProductsComponent from "@/components/explore/productComponent";
import ServicesComponent from "@/components/services/servicesComponent";
import AboutComponent from "@/components/about/aboutComponent";
import FooterComponent from "@/components/footer/footerComponent";
import ContactsComponent from "@/components/contacts/contactsComponent";
import "react-phone-number-input/style.css";
import SocialMediaPopup from "@/components/socialMediaPopUp.js";
import AgentSelectPopCom from "@/components/agentSelectPop/agentSelectPopCom";
import { Suspense } from "react";

import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    // remove relative before production
    <Suspense>
      <main className=" relative">
        {/* <SocialMediaPopup /> */}
        <AgentSelectPopCom />
        <HeroComponent />

        <div className=" xl:px-[6.3rem] max-xl:w-[90%] mx-auto">
          <ProductsComponent />
          <ServicesComponent />
          <AboutComponent />
          <ContactsComponent />
          <FooterComponent />
        </div>
      </main>
    </Suspense>
  );
}
