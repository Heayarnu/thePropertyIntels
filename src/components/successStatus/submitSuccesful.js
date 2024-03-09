import { UseMobileToggler } from "@/hooks/mobileViewQuery";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";

function SubmitSuccesful({ submitStatus }) {
  const { router } = UseMobileToggler();
  return (
    <div
      id="Formsuccess"
      className="rounded-[0.9375rem] relative p-[2.7rem] bg-white flex flex-col items-center max-lg:w-[90%] w-full max-w-[36.25rem] mx-auto mt-[7.94rem]"
    >
      <IoCloseOutline
        onClick={() => {
          submitStatus("submitted");
          router.push("/");
        }}
        className=" absolute top-[1.9rem] cursor-pointer right-[1.9rem]"
      />

      <svg
        className="w-[77px] h-[77px] lg:w-[126px] lg:h-[126px]"
        xmlns="http://www.w3.org/2000/svg"
        // width="126"
        // height="126"
        viewBox="0 0 126 126"
        fill="none"
      >
        <path
          d="M63 0.5C28.625 0.5 0.5 28.625 0.5 63C0.5 97.375 28.625 125.5 63 125.5C97.375 125.5 125.5 97.375 125.5 63C125.5 28.625 97.375 0.5 63 0.5ZM63 113C35.4375 113 13 90.5625 13 63C13 35.4375 35.4375 13 63 13C90.5625 13 113 35.4375 113 63C113 90.5625 90.5625 113 63 113ZM91.6875 35.375L50.5 76.5625L34.3125 60.4375L25.5 69.25L50.5 94.25L100.5 44.25L91.6875 35.375Z"
          fill="#16BA16"
        />
      </svg>

      <p className="font-semibold tracking-[-0.0275rem] text-[1.125rem] md:text-[1.375rem] mt-[1.38rem] mb-[.94rem] text-main_heading ">
        Registration successful
      </p>

      <p className="text-center text-main_heading  text-base md:text-[1.125rem] font-light tracking-[-0.0225rem]">
        Your form has been successfully submitted
      </p>
    </div>
  );
}

export default SubmitSuccesful;
