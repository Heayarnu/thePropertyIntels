import { countries } from "@/components/registerAgentForm/registerAgentdata";

export const registerpropertFields = [
  {
    type: "text",
    name: "property_country",
    placeholder: "Country",
  },
  {
    type: "text",
    name: "property_city",
    placeholder: "City",
  },
  {
    type: "text",
    name: "property_location",
    placeholder: "Location",
  },
  {
    type: "text",
    name: "no_of_properties",
    placeholder: "No of Property/Assets",
  },
];
export const locationOfProperties = {
  property_country: countries,
  //   country: ["", "Nigeria", "America", "Inem-Island"],
  property_city: ["", "Victoria-Island", "Apapa", "Ikeja"],
  no_of_properties: ["", 1, 2, 3, 4, 5, 6, 7, 8, 9],
};
