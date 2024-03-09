import { IoCloseOutline } from "react-icons/io5";
import { UseMobileToggler } from "../../hooks/mobileViewQuery";
import AgentRegisterForm from "../registerAgentForm/registerAgentForm";
import { useState } from "react";
import SubmitSuccesful from "../successStatus/submitSuccesful";
import CompanyAsAgentForm from "../registerAgentForm/companyAsAgent";
import { customEncodeURIComponent } from "@/hooks/customencoder";
function AgentSelectPopCom() {
  const [submitStatus, setSubmitStatus] = useState(false);
  const {
    toggleQuery,
    agent,
    client,
    agentType,
    registrationType,
    agencyFormType,
    router,
    createQueryString,
  } = UseMobileToggler();

  const registeragent = ["Select Agent type", "Enter details"];
  const registerClient = [
    "Enter client details",
    "Select Service type",
    "Enter property details",
  ];

  const agencyType = [
    [
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
      >
        <g opacity="0.8" clipPath="url(#clip0_46_3519)">
          <path
            d="M25 50C19.0806 50 13.3393 47.8941 8.83369 44.0702C7.77578 43.1729 6.7834 42.1781 5.88438 41.1137C2.08955 36.6156 0 30.8933 0 25C0 18.3222 2.60039 12.0441 7.32227 7.32227C12.0441 2.60039 18.3222 0 25 0C31.6778 0 37.9559 2.60039 42.6777 7.32227C47.3996 12.0441 50 18.3222 50 25C50 30.8934 47.9104 36.6157 44.1161 41.1131C43.2166 42.1781 42.2242 43.173 41.166 44.0705C36.6607 47.8941 30.9194 50 25 50ZM25 3.125C12.9381 3.125 3.125 12.9381 3.125 25C3.125 30.1567 4.95303 35.1635 8.27236 39.0979C9.05947 40.0299 9.92871 40.9013 10.8555 41.6874C14.7973 45.0327 19.8204 46.875 25 46.875C30.1796 46.875 35.2027 45.0327 39.1442 41.6876C40.0713 40.9013 40.9405 40.0298 41.7281 39.0973C45.047 35.1636 46.875 30.1568 46.875 25C46.875 12.9381 37.0619 3.125 25 3.125Z"
            fill="#414356"
          />
          <path
            d="M25 25C19.8306 25 15.625 20.7944 15.625 15.625C15.625 10.4556 19.8306 6.25 25 6.25C30.1694 6.25 34.375 10.4556 34.375 15.625C34.375 20.7944 30.1694 25 25 25ZM25 9.375C21.5537 9.375 18.75 12.1787 18.75 15.625C18.75 19.0713 21.5537 21.875 25 21.875C28.4463 21.875 31.25 19.0713 31.25 15.625C31.25 12.1787 28.4463 9.375 25 9.375Z"
            fill="#414356"
          />
          <path
            d="M40.1564 44.4418C40.0305 44.4418 39.9025 44.4265 39.7748 44.3944C38.9379 44.1844 38.4297 43.3355 38.6397 42.4985C38.9202 41.3811 39.0625 40.225 39.0625 39.0625C39.0625 31.4175 32.8471 25.1107 25.2058 25.001L25 25L24.7942 25.001C17.1529 25.1107 10.9375 31.4175 10.9375 39.0625C10.9375 40.225 11.0798 41.3811 11.3603 42.4985C11.5703 43.3355 11.0621 44.1844 10.2252 44.3944C9.38828 44.6045 8.53936 44.0964 8.3293 43.2594C7.98633 41.8933 7.8125 40.4812 7.8125 39.0625C7.8125 34.5139 9.57197 30.2263 12.7668 26.9893C15.9585 23.7555 20.2165 21.9396 24.7564 21.8762C24.7638 21.8761 24.771 21.8761 24.7783 21.8761L25 21.875L25.2217 21.876C25.229 21.876 25.2362 21.876 25.2436 21.8761C29.7835 21.9395 34.0415 23.7554 37.2332 26.9892C40.428 30.2263 42.1875 34.5139 42.1875 39.0625C42.1875 40.4812 42.0137 41.8933 41.6707 43.2594C41.4927 43.9686 40.856 44.4417 40.1564 44.4418Z"
            fill="#414356"
          />
        </g>
        <defs>
          <clipPath id="clip0_46_3519">
            <rect width="50" height="50" fill="white" />
          </clipPath>
        </defs>
      </svg>,
      "As an Individual",
    ],
    [
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
      >
        <g opacity="0.8" clipPath="url(#clip0_46_3527)">
          <path
            d="M11.2056 14.0198H18.8436V17.2267H11.2056V14.0198Z"
            fill="#414356"
          />
          <path
            d="M11.2056 21.3123H18.8436V24.5192H11.2056V21.3123Z"
            fill="#414356"
          />
          <path
            d="M11.2056 28.6045H18.8436V31.8114H11.2056V28.6045Z"
            fill="#414356"
          />
          <path
            d="M11.2056 35.897H18.8436V39.1039H11.2056V35.897Z"
            fill="#414356"
          />
          <path
            d="M26.6517 43.3741V17.1704L43.3974 17.1509V34.8281H46.6026V15.5455C46.6026 14.6707 45.8717 13.942 44.9981 13.942L25.0472 13.9653C24.1629 13.9663 23.4466 14.6839 23.4466 15.5688V43.3741H6.60256V11.6438L23.4466 7.1125V10.753H26.6517V5.02094C26.6517 3.98355 25.6356 3.20278 24.633 3.47243L4.58387 8.86592C3.88397 9.05427 3.39744 9.68921 3.39744 10.4144V43.3741H0V46.5811H50V43.3741H26.6517Z"
            fill="#414356"
          />
          <path
            d="M43.3975 37.7144H46.6026V40.7016H43.3975V37.7144Z"
            fill="#414356"
          />
          <path
            d="M31.1564 21.3123H38.7944V24.5192H31.1564V21.3123Z"
            fill="#414356"
          />
          <path
            d="M31.1564 28.6045H38.7944V31.8114H31.1564V28.6045Z"
            fill="#414356"
          />
          <path
            d="M31.1564 35.897H38.7944V39.1039H31.1564V35.897Z"
            fill="#414356"
          />
        </g>
        <defs>
          <clipPath id="clip0_46_3527">
            <rect width="50" height="50" fill="white" />
          </clipPath>
        </defs>
      </svg>,
      "As a Company",
    ],
  ];
  const picked = agent ?? "Select Agent type";
  const ClientSelection = client ?? "Enter client details";
  return (
    <>
      {submitStatus !== "submitted" && registrationType && (
        <section className="bg-[rgba(89,89,89,0.60)] absolute z-50 left-0 right-0 top-0 bottom-0">
          {submitStatus === false && (
            <div className=" max-lg:w-[90%] w-full max-w-[44rem] rounded-[0.9375rem] px-[.94rem] py-[2.5rem] bg-[white] absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
              <div className="absolute top-[5.3rem] left-0 right-0 bg-[#E9E9E9] h-[1px] w-full"></div>
              <IoCloseOutline
                onClick={() => router.push("/")}
                className=" absolute top-[1.9rem] cursor-pointer right-[1.9rem]"
              />
              <h3 className=" text-[1.25rem] font-bold tracking-[-0.0225rem] mb-[.9rem] text-main_heading">
                Register as{" "}
                {registrationType === "agent" ? "an agent" : "a client"}
              </h3>

              {registrationType == "agent" ? (
                <div className=" mb-[.9rem] flex w-fit items-center bg-[#F8F9F9] divide-x rounded-[0rem_0rem_0.625rem_0.625rem] border-[#E9E9E9] border-[1px] border-solid">
                  {registeragent.map((item, index) => (
                    <button
                      type="button"
                      key={item}
                      onClick={
                        () =>
                          router.push(
                            `/?registrationType=${registrationType}&agentType=${customEncodeURIComponent(
                              agentType
                            )}&agent=${customEncodeURIComponent(item)}
                          
                            `,
                            { scroll: false }
                          )
                        //   &agencyFormType=${customEncodeURIComponent(
                        //     agencyFormType
                        //   )}
                        // toggleQuery("agent", item)
                      }
                      className={` ${
                        picked == item
                          ? "text-primary bg-white"
                          : "text-[#414356] bg-[#F8F9F9]"
                      } text-[0.75rem] font-medium py-[.94rem] px-[.81rem] flex items-center tracking-[-0.03rem] border-r-[#E9E9E9] border-r`}
                    >
                      <span
                        className={`  ${
                          picked == item
                            ? "bg-primary text-white"
                            : "bg-[#FFF] text-[#414356] "
                        }  rounded-full grid place-items-center text-center w-[1.125rem] h-[1.125rem] mr-[.38rem]`}
                      >
                        {index + 1}
                      </span>
                      {item}
                    </button>
                  ))}
                </div>
              ) : (
                <div className=" mb-[.9rem] flex w-fit items-center bg-[#F8F9F9] divide-x rounded-[0rem_0rem_0.625rem_0.625rem] border-[#E9E9E9] border-[1px] border-solid">
                  {registerClient.map((item, index) => (
                    <button
                      key={item}
                      onClick={() => toggleQuery("client", item)}
                      className={` ${
                        ClientSelection == item
                          ? "text-primary bg-white"
                          : "text-[#414356] bg-[#F8F9F9]"
                      } text-[0.75rem] font-medium py-[.94rem] px-[.81rem] flex items-center tracking-[-0.03rem] border-r-[#E9E9E9] border-r`}
                    >
                      <span
                        className={`  ${
                          ClientSelection == item
                            ? "bg-primary text-white"
                            : "bg-[#FFF] text-[#414356] "
                        }  rounded-full grid place-items-center text-center w-[1.125rem] h-[1.125rem] mr-[.38rem]`}
                      >
                        {index + 1}
                      </span>
                      {item}
                    </button>
                  ))}
                </div>
              )}
              {registrationType === "agent" && !agencyFormType && (
                <>
                  <div className="mt-[1.25rem] flex flex-col lg:flex-row gap-[.94rem]">
                    {agencyType.map(([icon, text]) => (
                      <div
                        key={text}
                        onClick={() => toggleQuery("agentType", text)}
                        className={`${
                          agentType === text
                            ? "bg-[rgba(223,239,255,0.45)] border-primary"
                            : "bg-[#FFF] border-[#EFEFEF]"
                        } relative py-[1.99rem] px-[6.69rem] cursor-pointer rounded-[0.625rem] flex flex-col gap-[.94rem] items-center text-sub_heading border-solid border-[1px]`}
                      >
                        <svg
                          className={`${
                            agentType !== text ? "hidden" : ""
                          } top-[-.63rem] right-[-.37rem] absolute`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_14_865)">
                            <rect
                              width="25"
                              height="25"
                              rx="12.5"
                              fill="white"
                            />
                            <path
                              d="M12.5 0C5.63428 0 0 5.63428 0 12.5C0 19.3657 5.63428 25 12.5 25C19.3657 25 25 19.3657 25 12.5C25 5.63428 19.3657 0 12.5 0ZM10.9873 18.1855L5.51338 12.7117L7.58477 10.6403L11.0831 14.1387L18.1062 7.7543L20.0774 9.92153L10.9873 18.1855Z"
                              fill="#166BBF"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_14_865">
                              <rect
                                width="25"
                                height="25"
                                rx="12.5"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        {icon}

                        <h3 className="tracking-[-0.04rem] text-base font-medium ">
                          {text}
                        </h3>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      router.push(
                        `/?registrationType=${registrationType}&agencyFormType=${customEncodeURIComponent(
                          agentType
                        )}&agent=Enter+details`
                      );
                      //   toggleQuery("agencyFormType", agentType);
                      //   toggleQuery("agent", picked);
                    }}
                    className={` ${
                      agentType
                        ? "bg-primary text-white"
                        : "bg-[rgba(222,222,222,0.35)] text-[#414356]"
                    } rounded-[6.25rem] mt-[2.5rem] w-full h-[3.125rem]  text-base font-semibold tracking-[-0.02rem]`}
                  >
                    Continue
                  </button>
                </>
              )}
              {registrationType === "agent" &&
                agencyFormType === "As an Individual" && (
                  <AgentRegisterForm submitStatus={setSubmitStatus} />
                )}
              {registrationType === "agent" &&
                agencyFormType === "As a Company" && (
                  <CompanyAsAgentForm submitStatus={setSubmitStatus} />
                )}
            </div>
          )}
          {submitStatus === true && (
            <SubmitSuccesful submitStatus={setSubmitStatus} />
          )}
        </section>
      )}
    </>
  );
}

export default AgentSelectPopCom;
