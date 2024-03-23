import { toast } from "react-toastify";

const url = "/sendEmailRoute";
// const url = "../app/sendEmailRoute/";

export async function postInformation(data) {
  console.log("this is posting", data);
  fetch("/sendEmailRoute", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Add any other headers if needed
    },
    // body: data,
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // toast.success(data?.message);
    });
  // .catch((error) => {
  //   console.error("Error:", error);
  // });
}
