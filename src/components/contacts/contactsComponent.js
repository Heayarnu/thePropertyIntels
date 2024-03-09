import React from "react";
import { contacsInfo } from "./contactsdata";
import { FooterSocials } from "../footer/footerData";
import ContactsForm from "./contactsForm";

function ContactsComponent() {
  return (
    <section className="pb-[5.7rem] ">
      <div className="flex justify-between">
        <div>
          <p className="text-[0.875rem] leading-[1.8125rem] tracking-[-0.0175rem] font-normal text-sub_heading">
            NEED TO REACH OUT TO US ?{" "}
          </p>
          <h2 className="mt-[.94rem] mb-[.] text-[2.375rem] tracking-[-0.0475rem] font-bold text-main_heading">
            Contact Us
          </h2>
          <div className="my-[1.25rem] h-[0.0625rem] bg-[rgba(191,191,191,0.35)]"></div>
          <div>
            <div className="">
              <div className="flex mb-[2.5rem] gap-[.94rem]">
                {contacsInfo.email}
                <div>
                  <h3 className="text-[1.25rem] font-medium tracking-[-0.05rem] text-main_heading">
                    Send us a mail
                  </h3>
                  <h4 className="text-sub_heading text-[1.125rem] leading-[2rem] tracking-[-0.0225rem]">
                    via support@thepropertyintels.com
                  </h4>{" "}
                </div>
              </div>
              <div className="flex gap-[.94rem]">
                {contacsInfo.tell}
                <div>
                  <h3 className="text-[1.25rem] font-medium tracking-[-0.05rem] text-main_heading">
                    Call us
                  </h3>
                  <h4 className="text-sub_heading text-[1.125rem] leading-[2rem] tracking-[-0.0225rem]">
                    via +234 8000000000
                  </h4>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[2.81rem] flex gap-[1.06rem]">
            {FooterSocials.map(([icon, link], key) => (
              <div key={key}>{icon}</div>
              //   <p></p>
            ))}
          </div>
        </div>
        <ContactsForm />
      </div>
    </section>
  );
}

export default ContactsComponent;
