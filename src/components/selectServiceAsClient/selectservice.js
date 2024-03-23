"use client";
// import { selectServiceData } from "../client/clientForm/clientData";
import { UseMobileToggler } from "@/hooks/mobileViewQuery";
import Cookies from "js-cookie";
import { useState } from "react";

function Selectservices() {
  const { toggleQuery, serviceType, registrationType, router } =
    UseMobileToggler();

  //   const initialState = {
  //     Property: "",
  //     Facility: "",
  //     Inspections: "",
  //     Investment: "",
  //   };
  const [pickedServices, setPickedservice] = useState({
    Property: false,
    Facility: false,
    Inspections: false,
    Investment: false,
  });
  function handleChange(e) {
    // console.log("elemente", e);
    // e.stopPropagation();
    const { name } = e.target;

    setPickedservice((prev) => ({ ...prev, [name]: !prev[name] }));
  }
  console.log("values", pickedServices);
  const selectServiceData = [
    {
      icon: (
        <svg
          className={`${
            pickedServices.Property === true
              ? "stroke-primary"
              : "stroke-[#414356]"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <g opacity="0.8" clipPath="url(#clip0_15_2745)">
            <path
              d="M16.6797 22.5341L24.9999 17.1555L33.3201 22.5341"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M30.8833 20.9592V31.8639H19.1167V20.9592"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.9612 31.8639H23.0391V27.0102C23.0391 26.4415 23.5 25.9806 24.0687 25.9806H25.9317C26.5004 25.9806 26.9613 26.4415 26.9613 27.0102V31.8639H26.9612Z"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24.0195 22.0583H25.9807"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.0001 37.7471C32.0402 37.7471 37.7473 32.04 37.7473 25C37.7473 17.9599 32.0402 12.2528 25.0001 12.2528C17.96 12.2528 12.2529 17.9599 12.2529 25C12.2529 32.04 17.96 37.7471 25.0001 37.7471Z"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.987 34.0132L10.7822 39.218"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M39.218 10.782L34.0132 15.9868"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.987 15.9868L10.7822 10.782"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M39.218 39.218L34.0132 34.0132"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.8209 15.6848H2.9377C1.85459 15.6848 0.976562 14.8067 0.976562 13.7236V2.9377C0.976562 1.85459 1.85459 0.976562 2.9377 0.976562H8.33066C9.28799 1.93389 9.82471 2.47061 10.782 3.42793V13.7237C10.782 14.8067 9.904 15.6848 8.8209 15.6848Z"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.89893 5.87927H6.86006"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.89893 10.782H6.86006"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M47.0622 15.6848H41.1789C40.0958 15.6848 39.2178 14.8067 39.2178 13.7236V2.9377C39.2178 1.85459 40.0958 0.976562 41.1789 0.976562H46.572C47.5293 1.93389 48.066 2.47061 49.0233 3.42793V13.7237C49.0233 14.8067 48.1453 15.6848 47.0622 15.6848Z"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M43.1401 5.87927H45.1013"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M43.1401 10.782H45.1013"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.8209 49.0235H2.9377C1.85459 49.0235 0.976562 48.1455 0.976562 47.0624V36.2763C0.976562 35.1932 1.85459 34.3152 2.9377 34.3152H8.33066C9.28799 35.2725 9.82471 35.8092 10.782 36.7666V47.0624C10.782 48.1455 9.904 49.0235 8.8209 49.0235Z"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.89893 39.218H6.86006"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.89893 44.1207H6.86006"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M47.0622 49.0235H41.1789C40.0958 49.0235 39.2178 48.1455 39.2178 47.0624V36.2763C39.2178 35.1932 40.0958 34.3152 41.1789 34.3152H46.572C47.5293 35.2725 48.066 35.8092 49.0233 36.7666V47.0624C49.0233 48.1455 48.1453 49.0235 47.0622 49.0235Z"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M43.1401 39.218H45.1013"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M43.1401 44.1207H45.1013"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_15_2745">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      desc: "Property Management",
      title: "Property",
    },
    {
      icon: (
        <svg
          className={`${
            pickedServices.Facility === true
              ? "stroke-primary"
              : "stroke-[#414356]"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="51"
          height="50"
          viewBox="0 0 51 50"
          fill="none"
        >
          <g opacity="0.8" clipPath="url(#clip0_15_2791)">
            <path
              d="M36.4831 39.9057C38.6495 39.9057 40.4057 38.1495 40.4057 35.9831C40.4057 33.8167 38.6495 32.0605 36.4831 32.0605C34.3167 32.0605 32.5605 33.8167 32.5605 35.9831C32.5605 38.1495 34.3167 39.9057 36.4831 39.9057Z"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.7773 39.1211H9.81006V1.46484H34.9143V23.431"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.80986 18.7239H1.96484V39.121H9.80986V18.7239Z"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M44.3281 26.0771V14.0168L39.6211 9.30981L34.9141 14.0168V23.4309"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.0859 23.4309V25"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.0859 15.5859V17.155"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.0859 7.74097V9.30991"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.3618 7.74097V9.30991"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28.6382 7.74097V9.30991"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.3618 15.5859V17.155"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.3618 23.4309V25"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28.6382 15.5859V17.155"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28.6382 23.4309V25"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M39.1756 26.1446L38.8367 23.431H34.1297L33.7908 26.1446C32.9569 26.3721 32.1661 26.7032 31.4318 27.1229L29.2721 25.4433L25.9435 28.7719L27.623 30.9317C27.2041 31.6652 26.8723 32.4568 26.6447 33.2907L23.9312 33.6296V38.3366L26.6447 38.6755C26.8723 39.5093 27.2033 40.3002 27.623 41.0344L25.9435 43.1942L29.2721 46.5228L31.4318 44.8432C32.1653 45.2622 32.9569 45.594 33.7908 45.8216L34.1297 48.5351H38.8367L39.1756 45.8216C40.0095 45.594 40.8003 45.263 41.5346 44.8432L43.6943 46.5228L47.0229 43.1942L45.3434 41.0344C45.7623 40.301 46.0941 39.5093 46.3217 38.6755L49.0353 38.3366V33.6296L46.3217 33.2907C46.0941 32.4568 45.7631 31.666 45.3434 30.9317L47.0229 28.7719L43.6943 25.4433L41.5346 27.1229C40.8011 26.7039 40.0095 26.372 39.1756 26.1446Z"
              //   stroke="#414356"
              strokeWidth="2.22222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_15_2791">
              <rect
                width="50"
                height="50"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      desc: "Facility Management",
      title: "Facility",
    },
    {
      icon: (
        <svg
          className={`${
            pickedServices.Inspections === true
              ? "stroke-primary"
              : "stroke-[#414356]"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <g opacity="0.8" clipPath="url(#clip0_15_3311)">
            <mask
              id="mask0_15_3311"
              // style="mask-type:luminance"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="50"
              height="50"
            >
              <path d="M0 3.8147e-06H50V50H0V3.8147e-06Z" fill="white" />
            </mask>
            <g mask="url(#mask0_15_3311)">
              <path
                d="M13.3789 19.043C13.3789 28.7511 21.2489 36.6211 30.957 36.6211C40.6651 36.6211 48.5352 28.7511 48.5352 19.043C48.5352 9.33486 40.6651 1.46484 30.957 1.46484C21.2489 1.46484 13.3789 9.33486 13.3789 19.043Z"
                // stroke="#414356"
                strokeWidth="2.63672"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.60801 48.5352L1.46484 44.392L12.0182 33.8387L16.1613 37.9818L5.60801 48.5352Z"
                // stroke="#414356"
                strokeWidth="2.63672"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.5274 31.4726L14.0898 35.9102"
                // stroke="#414356"
                strokeWidth="2.63672"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M42.6758 19.043C42.6758 25.515 37.4291 30.7617 30.957 30.7617C24.485 30.7617 19.2383 25.515 19.2383 19.043C19.2383 12.5709 24.485 7.32422 30.957 7.32422C37.4291 7.32422 42.6758 12.5709 42.6758 19.043Z"
                // stroke="#414356"
                strokeWidth="2.63672"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.0977 19.043L29.4922 23.4375L36.8164 16.1133"
                // stroke="#414356"
                strokeWidth="2.63672"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_15_3311">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      desc: "Property Inspections & Reports",
      title: "Inspections",
    },
    {
      icon: (
        <svg
          className={`${
            pickedServices.Investment === true
              ? "stroke-primary fill-primary"
              : "stroke-[#414356] fill-[#414356]"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <g opacity="0.8" clipPath="url(#clip0_15_3328)">
            <path
              d="M21.8475 12.1836C17.1574 13.2772 13.3819 16.9966 12.229 21.6593C11.0724 26.337 12.396 31.1048 15.7699 34.4133C16.9632 35.5837 17.6758 37.4596 17.6758 39.4314V39.7461C17.6758 41.0446 18.2423 42.2129 19.1407 43.0181V45.6055C19.1407 48.0286 21.1121 50 23.5352 50H26.4649C28.888 50 30.8594 48.0286 30.8594 45.6055V43.0181C31.7578 42.2129 32.3243 41.0447 32.3243 39.7461V39.4256C32.3243 37.4838 33.075 35.5723 34.3324 34.3122C36.8159 31.8233 38.1836 28.5161 38.1836 25C38.1836 16.5939 30.3937 10.1916 21.8475 12.1836ZM27.9297 45.6055C27.9297 46.4132 27.2726 47.0703 26.4649 47.0703H23.5352C22.7275 47.0703 22.0704 46.4132 22.0704 45.6055V44.1407H27.9297V45.6055ZM32.2584 32.2428C30.4384 34.0667 29.3946 36.6847 29.3946 39.4256V39.7461C29.3946 40.5538 28.7375 41.211 27.9297 41.211H22.0704C21.2626 41.211 20.6055 40.5538 20.6055 39.7461V39.4314C20.6055 36.6483 19.5906 34.0569 17.821 32.3216C15.1951 29.7464 14.1678 26.0235 15.0729 22.3625C15.964 18.7583 18.8843 15.8828 22.5127 15.0369C29.219 13.4731 35.254 18.4793 35.254 25C35.254 27.7348 34.1901 30.307 32.2584 32.2428Z"
              //   fill="#414356"
            />
            <path
              d="M13.6063 11.5346L9.46304 7.39146C8.89106 6.81938 7.96353 6.81938 7.39146 7.39146C6.81938 7.96353 6.81938 8.89097 7.39146 9.46304L11.5347 13.6062C12.1067 14.1783 13.0343 14.1783 13.6063 13.6062C14.1784 13.0341 14.1784 12.1067 13.6063 11.5346Z"
              //   fill="#414356"
            />
            <path
              d="M7.42188 23.5352H1.46484C0.655859 23.5352 0 24.191 0 25C0 25.809 0.655859 26.4648 1.46484 26.4648H7.42188C8.23086 26.4648 8.88672 25.809 8.88672 25C8.88672 24.191 8.23086 23.5352 7.42188 23.5352Z"
              //   fill="#414356"
            />
            <path
              d="M48.5352 23.5352H42.5781C41.7691 23.5352 41.1133 24.191 41.1133 25C41.1133 25.809 41.7691 26.4648 42.5781 26.4648H48.5352C49.3441 26.4648 50 25.809 50 25C50 24.191 49.3441 23.5352 48.5352 23.5352Z"
              //   fill="#414356"
            />
            <path
              d="M42.6087 7.39146C42.0369 6.81938 41.1093 6.81938 40.5372 7.39146L36.3939 11.5346C35.8218 12.1066 35.8218 13.0341 36.3939 13.6062C36.9659 14.1783 37.8934 14.1783 38.4655 13.6062L42.6087 9.46304C43.1808 8.89106 43.1808 7.96353 42.6087 7.39146Z"
              //   fill="#414356"
            />
            <path
              d="M25 0C24.191 0 23.5352 0.655859 23.5352 1.46484V7.42188C23.5352 8.23086 24.191 8.88672 25 8.88672C25.809 8.88672 26.4648 8.23086 26.4648 7.42188V1.46484C26.4648 0.655859 25.809 0 25 0Z"
              //   fill="#414356"
            />
            <path
              d="M25.0002 17.6758C24.398 17.6758 23.7846 17.7479 23.1781 17.89C20.6522 18.4796 18.5377 20.5588 17.9165 23.0638C17.7217 23.849 18.2003 24.6434 18.9855 24.8382C19.7709 25.0329 20.5652 24.5541 20.7599 23.769C21.1174 22.3278 22.3856 21.0835 23.8452 20.7428C24.234 20.6517 24.6227 20.6055 25.0002 20.6055C25.8091 20.6055 26.465 19.9496 26.465 19.1406C26.465 18.3316 25.8091 17.6758 25.0002 17.6758Z"
              //   fill="#414356"
            />
          </g>
          <defs>
            <clipPath id="clip0_15_3328">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      desc: "Property Investment Advice",
      title: "Investment",
    },
  ];
  return (
    <div>
      <div>
        <h3>Kindly select the services you`re interested in</h3>

        <div className="mt-[1.25rem] grid lg:grid-cols-2 gap-[.94rem] ">
          {selectServiceData.map(({ icon, desc, title }) => (
            <div
              key={title}
              // onClick={() => toggleQuery("serviceType", desc)}
              className={`${
                pickedServices[title] === true
                  ? "bg-[rgba(223,239,255,0.45)] border-primary"
                  : "bg-[#FFF] border-[#EFEFEF]"
              } relative py-[1.99rem] px-[6.69rem] cursor-pointer rounded-[0.625rem] flex flex-col gap-[.94rem] items-center text-sub_heading border-solid border-[1px]`}
            >
              <input
                type="checkbox"
                name={title}
                //   checked={pickedServices[title]}
                onChange={handleChange}
                className={` top-[.88rem] right-[.88rem] absolute w-[1.5rem] h-[1.5rem]`}
              />
              {icon}

              <h3
                className={`tracking-[-0.04rem] text-center text-[1.25rem] font-medium ${
                  pickedServices[title] === true
                    ? "text-primary"
                    : "text-[#414356]"
                } `}
              >
                {desc}
              </h3>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => {
            //   router.push(
            //     `/?registrationType=${registrationType}&client=Enter+property+details`
            //   );
            Cookies.set("clientService", JSON.stringify({ ...pickedServices }));
            toggleQuery("client", "Enter property details");
            //   toggleQuery("agent", picked);
          }}
          className={` ${
            Object.values(pickedServices).find((item) => item == true)
              ? "bg-primary text-white"
              : "bg-[rgba(222,222,222,0.35)] text-[#414356]"
          } p-[0.625rem] mt-[2.19rem] w-full block lg:w-[11.3125rem] tracking-[-0.0225rem] font-semibold rounded-[6.25rem] text-[1.125rem] text-white ml-auto`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Selectservices;
