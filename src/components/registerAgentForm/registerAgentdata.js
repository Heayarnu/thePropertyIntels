export const contacsInfo = {
  email: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="54"
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
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="54"
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
          stroke-width="0.078125"
        />
      </mask>
      <g mask="url(#mask0_38_8067)">
        <path
          d="M22.7821 31.453C26.5892 35.2527 31.3759 36.4524 31.3759 36.4524L35.5737 32.095C37.0021 30.6694 38.6415 30.9842 40.7509 32.0774L42.9753 33.3268C44.4873 34.1761 45.442 35.7713 45.4384 37.5056C45.4383 37.5191 45.4383 37.5326 45.4382 37.5461C45.4283 38.8616 44.8915 40.3586 43.5634 41.6867C40.3221 44.9281 35.8828 45.4684 32.2353 45.4362C26.0802 45.3818 20.5791 41.4369 16.5321 37.3899C12.4852 33.3429 8.61776 27.92 8.56339 21.7649C8.53112 18.1172 9.04604 13.6781 12.2874 10.4367C13.6155 9.10861 15.1126 8.57189 16.428 8.56197C16.4416 8.56189 16.4551 8.56182 16.4686 8.56182C18.2028 8.55822 19.798 9.51283 20.6473 11.0249L21.8967 13.2492C22.8342 15.2024 23.3048 16.9981 21.8792 18.4264L17.678 22.7811C17.678 22.7811 18.9824 27.646 22.7821 31.453Z"
          stroke="#151941"
          stroke-width="3.125"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <path
          d="M45.4385 25.7493C45.4385 16.2568 37.7434 8.56177 28.251 8.56177"
          stroke="#151941"
          stroke-width="3.125"
          stroke-miterlimit="10"
        />
        <path
          d="M32.9385 25.7493C32.9385 23.1604 30.8398 21.0618 28.251 21.0618"
          stroke="#151941"
          stroke-width="3.125"
          stroke-miterlimit="10"
        />
        <path
          d="M39.1885 25.7493C39.1885 19.7086 34.2916 14.8118 28.251 14.8118"
          stroke="#151941"
          stroke-width="3.125"
          stroke-miterlimit="10"
        />
      </g>
    </svg>
  ),
};

export const registerFormField = [
  {
    type: "text",
    name: "fullName",
    placeholder: "Full Name",
  },
  {
    type: "text",
    name: "phoneNumber",
    placeholder: "Telephone Number",
  },
  {
    type: "text",
    name: "phoneNumberWork",
    placeholder: "Work Phone Number",
  },
  {
    type: "email",
    name: "email",
    placeholder: "Email Address",
  },

  {
    type: "text",
    name: "country",
    placeholder: "Country",
  },
  {
    type: "text",
    name: "city",
    placeholder: "City",
  },

  {
    type: "text",
    name: "address",
    placeholder: "Address",
  },
];

export const registerCompanyAsAgentFields = [
  {
    type: "text",
    name: "companyName",
    placeholder: "Company Name",
  },

  {
    type: "text",
    name: "companyAddress",
    placeholder: "Company Address",
  },
  {
    type: "text",
    name: "website",
    placeholder: "Company Website (Optional)",
  },
];
export const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia (Czech Republic)",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini (fmr. Swaziland)",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (formerly Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

console.log(countries);

export const countriesOfProperties = {
  country: countries,
  // country: ["", "Nigeria", "America", "Inem-Island"],
  city: ["", "Victoria-Island", "Apapa", "Ikeja"],
};
