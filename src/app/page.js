"use client";
import NavMain from "@/components/navigatonBar/navMain";

import HeroComponent from "@/components/hero/heroComponent";
import ProductsComponent from "@/components/explore/productComponent";
import ServicesComponent from "@/components/services/servicesComponent";
import AboutComponent from "@/components/about/aboutComponent";
import FooterComponent from "@/components/footer/footerComponent";
import ContactsComponent from "@/components/contacts/contactsComponent";
import "react-phone-number-input/style.css";
import SocialMediaPopup from "@/components/socialMediaPopUp.js";
import AgentSelectPopCom from "@/components/agentSelectPop/agentSelectPopCom";
export default function Home() {
  return (
    // remove relative before production
    <main className=" relative">
      {/* <SocialMediaPopup /> */}
      <AgentSelectPopCom />
      <HeroComponent />

      <div className="px-[6.3rem]">
        <ProductsComponent />
        <ServicesComponent />
        <AboutComponent />
        <ContactsComponent />
        <FooterComponent />
      </div>
    </main>
  );
}
