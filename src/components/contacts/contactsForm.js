"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { contactFormField } from "./contactsdata";
import Input, {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import { PhoneInput } from "react-international-phone";
import ErrorMessageCtn from "../errorMessage";
function ContactsForm() {
  const InitiaState = {
    fName: "",
    lName: "",
    email: "",
    phoneNumber: "",
    message: "",
  };

  const formik = useFormik({
    initialValues: InitiaState,
    validationSchema: Yup.object({
      fName: Yup.string().required("Required"),
      lName: Yup.string().required("Required"),
      email: Yup.string().email().required("Required"),
      phoneNumber: Yup.string().required("Required").min(3),
      message: Yup.string().required("Required").min(3),
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
  // console.log("signup values", formik.values);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-[1.88rem] shadow-[0px_0px_13px_0px_rgba(163,163,163,0.20)] md:flex flex-wrap gap-[.91rem] w-full max-w-[34.625rem]"
    >
      {contactFormField.map((item, index) => (
        <div
          key={item.name}
          className={` ${
            item.name === "message" ? "basis-[100%]" : "basis-[45%]"
          } mb-[1.31rem] relative`}
        >
          <span className="mb-[1rem] block">{item.placeholder}</span>
          <div
            className={` shadow-[0px_2px_4px_0px_rgba(192,192,192,0.25)]  relative flex items-center px-[0.94rem] py-[0.5rem] rounded-[0.5rem] border border-solid border-[rgba(229,229,229,0.60)] focus-within:border-primary`}
          >
            {item.name === "phoneNumber" ? (
              <div className="flex divide-x">
                <select>
                  {getCountries().map((country) => (
                    <option key={country} value={country}>
                      {getCountryCallingCode(country)}
                    </option>
                  ))}
                </select>
                <Input
                  //   international
                  className="focus:outline-0 pl-[.39rem] bg-transparent block w-full font-normal placeholder:tracking-[0.01744rem] tracking-[0.01744rem] placeholder:leading-[1.41713rem] leading-[1.41713rem] text-secondary placeholder:text-[0.87206rem] text-[0.87206rem] lg:text-[1.125rem]"
                  // className="w-full"import PhoneInput from "react-phone-number-input";
                  placeholder="Enter phone number"
                  value={item.name}
                  onChange={(number) => {
                    formik.setValues((prev) => ({
                      ...prev,
                      phoneNumber: number,
                    }));
                  }}
                />
              </div>
            ) : item.name === "message" ? (
              <textarea
                // type={item.type}
                name={item.name}
                onBlur={() => {
                  formik.setTouched({ [item.name]: true });
                  console.log("clicked", item.name);
                }}
                value={formik?.values[item.name]}
                placeholder={item.placeholder}
                onChange={handleChange}
                className={` h-[10.375rem] focus:outline-0 ml-[0.19rem] bg-transparent block w-full font-normal placeholder:tracking-[0.01744rem] tracking-[0.01744rem] placeholder:leading-[1.41713rem] leading-[1.41713rem] text-secondary placeholder:text-[0.87206rem] text-[0.87206rem] lg:text-[1.125rem]`}
              />
            ) : (
              <input
                type={item.type}
                name={item.name}
                onBlur={() => {
                  formik.setTouched({ [item.name]: true });
                  console.log("clicked", item.name);
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
      <button className="bg-[#166BBF] p-[0.625rem] w-full lg:w-[11.3125rem] tracking-[-0.0225rem] font-semibold rounded-[6.25rem] text-[1.125rem] text-white ml-auto">
        Send
      </button>
    </form>
  );
}

export default ContactsForm;
