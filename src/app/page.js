"use client";
import HeroComponent from "@/components/hero/heroComponent";
import ProductsComponent from "@/components/explore/productComponent";
import ServicesComponent from "@/components/services/servicesComponent";
import AboutComponent from "@/components/about/aboutComponent";
import FooterComponent from "@/components/footer/footerComponent";
import ContactsComponent from "@/components/contacts/contactsComponent";
import TeamsComponent from "@/components/teams/teamsComponent";
import "react-phone-number-input/style.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SocialMediaPopup from "@/components/socialMediaPopUp.js";
import AgentSelectPopCom from "@/components/agentSelectPop/agentSelectPopCom";
import TestPage from "@/components/TestSIde";
import { Suspense } from "react";

import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  return (
    // remove relative before production
    <Suspense>
      <ToastContainer />
      <main className=" relative">
        {/* <SocialMediaPopup /> */}
        <AgentSelectPopCom />
        <SocialMediaPopup />
        <HeroComponent />

        <div className=" xl:px-[6.3rem] max-xl:w-[90%] mx-auto">
          <ProductsComponent />
          <ServicesComponent />
          <AboutComponent />
          <TeamsComponent/>
          <ContactsComponent />
          <FooterComponent />
        </div>
      </main>
    </Suspense>
  );
}
