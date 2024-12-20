export const contacsInfo = {
  email: (
    <svg
      className="h-[42px] w-[42px]"
      xmlns="http://www.w3.org/2000/svg"
      // width="54"
      // height="54"
      viewBox="0 0 54 54"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.091 13.8506C49.091 12.5946 48.5924 11.3907 47.704 10.5039C46.8172 9.6155 45.6132 9.11688 44.3572 9.11688C36.7153 9.11688 17.2848 9.11688 9.64294 9.11688C8.38692 9.11688 7.18297 9.6155 6.29618 10.5039C5.40781 11.3907 4.90918 12.5946 4.90918 13.8506V35.9415C4.90918 37.1976 5.40781 38.4015 6.29618 39.2883C7.18297 40.1767 8.38692 40.6753 9.64294 40.6753H44.3572C45.6132 40.6753 46.8172 40.1767 47.704 39.2883C48.5924 38.4015 49.091 37.1976 49.091 35.9415V13.8506ZM18.2489 27.3766L10.0895 37.5195H43.9107L35.7512 27.3766C34.309 28.8109 32.3508 29.6299 30.2932 29.6299C28.3066 29.6299 25.6936 29.6299 23.707 29.6299C21.6493 29.6299 19.6896 28.8109 18.2489 27.3766ZM8.06502 35.0027L16.1945 24.8961L8.06502 14.7895V35.0027ZM37.8057 24.8961L45.9351 35.0027V14.7895L37.8057 24.8961ZM10.0895 12.2727L20.1393 24.7651C21.0087 25.846 22.32 26.474 23.707 26.474H30.2932C31.6802 26.474 32.9914 25.846 33.8609 24.7651L43.9107 12.2727H10.0895Z"
        fill="#151941"
      />
    </svg>
  ),
  tell: (
    <svg
      className="h-[42px] w-[42px]"
      xmlns="http://www.w3.org/2000/svg"
      // width="54"
      // height="54"
      viewBox="0 0 54 54"
      fill="none"
    >
      <mask
        id="mask0_38_8067"
        // style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="7"
        y="7"
        width="40"
        height="40"
      >
        <path
          d="M46.9609 46.9609V7.03906H7.03906V46.9609H46.9609Z"
          fill="white"
          stroke="white"
          strokeWidth="0.078125"
        />
      </mask>
      <g mask="url(#mask0_38_8067)">
        <path
          d="M22.7821 31.453C26.5892 35.2527 31.3759 36.4524 31.3759 36.4524L35.5737 32.095C37.0021 30.6694 38.6415 30.9842 40.7509 32.0774L42.9753 33.3268C44.4873 34.1761 45.442 35.7713 45.4384 37.5056C45.4383 37.5191 45.4383 37.5326 45.4382 37.5461C45.4283 38.8616 44.8915 40.3586 43.5634 41.6867C40.3221 44.9281 35.8828 45.4684 32.2353 45.4362C26.0802 45.3818 20.5791 41.4369 16.5321 37.3899C12.4852 33.3429 8.61776 27.92 8.56339 21.7649C8.53112 18.1172 9.04604 13.6781 12.2874 10.4367C13.6155 9.10861 15.1126 8.57189 16.428 8.56197C16.4416 8.56189 16.4551 8.56182 16.4686 8.56182C18.2028 8.55822 19.798 9.51283 20.6473 11.0249L21.8967 13.2492C22.8342 15.2024 23.3048 16.9981 21.8792 18.4264L17.678 22.7811C17.678 22.7811 18.9824 27.646 22.7821 31.453Z"
          stroke="#151941"
          strokeWidth="3.125"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M45.4385 25.7493C45.4385 16.2568 37.7434 8.56177 28.251 8.56177"
          stroke="#151941"
          strokeWidth="3.125"
          strokeMiterlimit="10"
        />
        <path
          d="M32.9385 25.7493C32.9385 23.1604 30.8398 21.0618 28.251 21.0618"
          stroke="#151941"
          strokeWidth="3.125"
          strokeMiterlimit="10"
        />
        <path
          d="M39.1885 25.7493C39.1885 19.7086 34.2916 14.8118 28.251 14.8118"
          stroke="#151941"
          strokeWidth="3.125"
          strokeMiterlimit="10"
        />
      </g>
    </svg>
  ),
};

export const contactFormField = [
  {
    type: "text",
    name: "fName",
    placeholder: "First Name",
  },
  {
    type: "text",
    name: "lName",
    placeholder: "Last Name",
  },
  {
    type: "email",
    name: "email",
    placeholder: "Email Address",
    // svg: (
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="22"
    //     height="17"
    //     viewBox="0 0 22 17"
    //     fill="none"
    //     className="lg:mt-[2px] fill-[#8C7B8F] dark:fill-default2"
    //   >
    //     <path
    //       d="M0 2.83333C0 1.26836 1.23105 0 2.75 0H19.25C20.7668 0 22 1.26836 22 2.83333V14.1667C22 15.7294 20.7668 17 19.25 17H2.75C1.23105 17 0 15.7294 0 14.1667V2.83333ZM2.0625 2.83333V3.81172L9.47461 10.0805C10.3598 10.8331 11.6402 10.8331 12.5254 10.0805L19.9375 3.81172V2.79349C19.9375 2.44375 19.6281 2.08516 19.25 2.08516H2.75C2.37016 2.08516 2.0625 2.44375 2.0625 2.79349V2.83333ZM2.0625 6.56094V14.1667C2.0625 14.5563 2.37016 14.875 2.75 14.875H19.25C19.6281 14.875 19.9375 14.5563 19.9375 14.1667V6.56094L13.8359 11.7229C12.1859 13.1174 9.81406 13.1174 8.12539 11.7229L2.0625 6.56094Z"
    //       // fill="#8C7B8F"
    //     />
    //   </svg>
    // ),
  },

  {
    type: "text",
    name: "phoneNumber",
    placeholder: "Phone Number",
  },
  {
    type: "text",
    name: "message",
    placeholder: "Message",
  },
];
