"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UseMobileToggler } from "@/hooks/mobileViewQuery";
import ErrorMessageCtn from "@/components/errorMessage";
import {
  locationOfProperties,
  registerpropertFields,
} from "./propertyFormFields";
function PropertyRegisterForm({ submitStatus }) {
  const { toggleQuery, router } = UseMobileToggler();
  const InitiaState = {
    noOfproperties: "",
    country: "",
    city: "",
    location: "",
  };

  const formik = useFormik({
    initialValues: InitiaState,
    validationSchema: Yup.object({
      noOfproperties: Yup.string().required("Required"),
      country: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      location: Yup.string().required("Required").min(3),
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

    // const lowercaseValues = {
    //   ...filteredObject,
    //   email: filteredObject?.email.toLowerCase(),
    // };
    console.log("this is filtered", filteredObject);
    try {
      console.log("from signup try block");
      // if successfull set submitstatus
      //   submitStatus(true);

      //   router.push("?selectService=true#Formsuccess");
      toggleQuery("selectService", true);
      //   toast.success(res?.message, {});

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
        Fill in the following property details
      </p>
      <form
        onSubmit={formik.handleSubmit}
        className=" flex flex-col items-center p-[1.88rem] shadow- [0px_0px_13px_0px_rgba(163,163,163,0.20)] gap-[.91rem] w-full max-w-[44.625rem] mx-auto"
      >
        {registerpropertFields.map((item, index) => (
          <div key={item.name} className={` mb-[1.31rem] relative w-full`}>
            <span className="mb-[.5rem] inline-block">{item.placeholder}</span>
            <div
              className={` shadow-[0px_2px_4px_0px_rgba(192,192,192,0.25)]  relative flex flex-row  px-[0.94rem] py-[0.5rem] rounded-[0.5rem] border border-solid border-[rgba(229,229,229,0.60)] focus-within:border-primary`}
            >
              {item.name === "location" ? (
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
              ) : (
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
                  {locationOfProperties[item.name].map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
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

export default PropertyRegisterForm;