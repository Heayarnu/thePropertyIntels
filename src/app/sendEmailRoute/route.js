// src/api/sendData.js

import nodemailer from "nodemailer";

export async function POST(request) {
  if (request.method === "POST") {
    try {
      const data = await request.json();
      console.log("this is receiving in send email", data);
      console.log("this is receiving in send email", data?.email);
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "greatdev2023@gmail.com",
          pass: "txdwcuyvbhreghif",
        },
        authMethod: "LOGIN",
      });


const infoKeys = Object.keys(data);
// console.log("infor keysss", infoKeys)

let tableContent = '';
infoKeys.forEach(key => {
    let value = data[key];
    if (typeof value === 'boolean') {
        value = value ? 'Yes' : 'No';
    }
    tableContent += `
        <tr>
            <td>${key}</td>
            <td>${value}</td>
        </tr>
    `;
});

      const info = await transporter.sendMail({
        from: "greatdev@gmail.com",
        to: "folahunareago@gmail.com",
        subject: "MESAGE FROM THEPROPERTY INTELS WEBSITE",
        //text: JSON.stringify(data),
        html: `
        <p>Details:</p>
        <table border="1" cellspacing="0" cellpadding="5">
            ${tableContent}
        </table>
    `
      });

      console.log("Message sent: %s", info.messageId);


   // Sending confirmation email
   if (data?.email) {
    const confirmationInfo = await transporter.sendMail({
      from: "greatdev2023@gmail.com",
      to: data.email,
      subject: "Confirmation of Your Submission",
      html: `
        <p>Hello ${data?.fullName || "Customer"},</p>
        <p>Thank you for reaching out to The Property Intels. We have received your submission and will get back to you shortly.</p>
        <p>Best regards,<br>The Property Intels Team</p>
      `
    });

    console.log("Confirmation email sent: %s", confirmationInfo.messageId);
  }



      return Response.json({ message: "Data sent successfully" });

      // res.status(200).json({ message: "Data sent successfully" });
    } catch (error) {
      console.error(error);
      return Response.json({ error: "Failed to send data" });
    }
  } else {
    return Response.json({ error: "Method Not Allowed" });
  }
}
