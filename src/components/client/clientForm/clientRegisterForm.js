"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input, {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import { PhoneInput } from "react-international-phone";
import { UseMobileToggler } from "@/hooks/mobileViewQuery";
import ErrorMessageCtn from "@/components/errorMessage";
import {
  countriesOfProperties,
  registerFormFieldCompany,
} from "@/components/registerAgentForm/registerAgentdata";
import { postInformation } from "@/hooks/postRequest";
function ClientRegisterForm({ submitStatus }) {
  const { toggleQuery, router } = UseMobileToggler();
  const InitiaState = {
    fullName: "",
    phoneNumber: "",
    phoneNumberWork: "",
    email: "",
    country: "",
    city: "",
    // address: "",
    describeProperty: "",
  };

  const formik = useFormik({
    initialValues: InitiaState,
    validateOnMount: true, // Enable validateOnMount
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      phoneNumber: Yup.string().required("Required"),
      phoneNumberWork: Yup.string().required("Required"),
      email: Yup.string().email().required("Required"),
      country: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      describeProperty: Yup.string().required("Required").min(3),
      // address: Yup.string().required("Required").min(3),
    }),

    onSubmit: handleSubmit,
  });
  async function handleSubmit(values, { resetForm }) {
    console.log("Attempting to signup");
    // if (subPlan) {
    //   router.push(
    //     `/auth/email-verification?${subPlan && "plan=" + subPlan}&email=${
    //       // res.user.email
    //       "sopewenike"
    //     }`,
    //     {
    //       scroll: false,
    //     }
    //   );
    // }

    const filteredObject = Object.keys(values)
      .filter((key) => key !== "Confirm password")
      // .filter((key) => key !== "dateOfBirth" && key !== "Confirm password")
      .reduce((obj, key) => {
        obj[key] = values[key];
        return obj;
      }, {});

    console.log("this is filtered", filteredObject);
    try {
      console.log("from signup try block");
      // if successfull set submitstatus
      //   submitStatus(true);

      //   router.push("?selectService=true#Formsuccess");
      postInformation(values);
      // console.log("api called", res);
      // toast.success(, {});
      toggleQuery("client", "Select Service type");

      resetForm();

      // "User already registered."
      // console.log("succesful signup!!", res);
    } catch (error) {
      // if (!error) return "No server response";

      console.log("error from contact form", error);
    }
  }
  function handleChange(e) {
    const { name, value } = e.target;
    formik.setValues((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div>
      <p className="text-main_heading text-base md:text-[1.125rem] font-medium tracking-[-0.0225rem] mt-[1.56rem] mb-[1.25rem]">
        Fill in the following details
      </p>
      <form
        onSubmit={formik.handleSubmit}
        className=" flex flex-col items-center p-[1.88rem] shadow- [0px_0px_13px_0px_rgba(163,163,163,0.20)] gap-[.91rem] w-full max-w-[44.625rem] mx-auto"
      >
        {registerFormFieldCompany.map((item, index) => (
          <div key={item.name} className={` mb-[1.31rem] relative w-full`}>
            <span className="mb-[.5rem] inline-block">{item.placeholder}</span>
            <div
              className={` shadow-[0px_2px_4px_0px_rgba(192,192,192,0.25)]  relative flex flex-row  px-[0.94rem] py-[0.5rem] rounded-[0.5rem] border border-solid border-[rgba(229,229,229,0.60)] focus-within:border-primary`}
            >
              {item.name === "phoneNumber" ||
              item.name === "phoneNumberWork" ? (
                <div className="flex divide-x">
                  {/* <select>
                    {getCountries().map((country) => (
                      <option key={country} value={country}>
                        {getCountryCallingCode(country)}
                      </option>
                    ))}
                  </select> */}
                  <Input
                    //   international
                    className="focus:outline-0 pl-[5px] ml-[0.19rem] bg-transparent block w-full font-normal placeholder:tracking-[0.01744rem] tracking-[0.01744rem] placeholder:leading-[1.41713rem] leading-[1.41713rem] text-secondary placeholder:text-[0.87206rem] text-[0.87206rem] lg:text-[1.125rem]"
                    // className="w-full"import PhoneInput from "react-phone-number-input";
                    placeholder="Enter phone number"
                    value={item.name}
                    onChange={(number) => {
                      formik.setValues((prev) => ({
                        ...prev,
                        [item.name]: number,
                      }));
                    }}
                    onBlur={() => {
                      formik.setTouched({ [item.name]: true });
                      // console.log("clicked", item.name);
                    }}
                  />
                </div>
              ) : item.name === "country" ? (
                // ) : item.name === "country" || item.name === "city" ? (
                <select
                  onChange={handleChange}
                  name={item.name}
                  value={formik?.values[item.name]}
                  onBlur={() => {
                    formik.setTouched({ [item.name]: true });
                    // console.log("clicked", item.name);
                  }}
                  className="w-full"
                >
                  {countriesOfProperties[item.name].map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={item.type}
                  name={item.name}
                  onBlur={() => {
                    formik.setTouched({ [item.name]: true });
                    // console.log("clicked", item.name);
                  }}
                  value={formik?.values[item.name]}
                  placeholder={item.placeholder}
                  onChange={handleChange}
                  className={`  focus:outline-0 ml-[0.19rem] bg-transparent block w-full font-normal placeholder:tracking-[0.01744rem] tracking-[0.01744rem] placeholder:leading-[1.41713rem] leading-[1.41713rem] text-secondary placeholder:text-[0.87206rem] text-[0.87206rem] lg:text-[1.125rem]`}
                />
              )}
            </div>

            <ErrorMessageCtn>
              {formik.touched[item.name] && formik.errors[item.name]
                ? formik.errors[item.name]
                : null}
            </ErrorMessageCtn>
          </div>
        ))}
        <button
          type="submit"
          className={`${
            formik.isValid ? "bg-[#166BBF]" : "bg-[rgba(222,222,222,0.35)]"
          } p-[0.625rem] w-full lg:w-[11.3125rem] tracking-[-0.0225rem] font-semibold rounded-[6.25rem] text-[1.125rem] text-white ml-auto`}
        >
          Continue
        </button>
      </form>{" "}
    </div>
  );
}

export default ClientRegisterForm;
