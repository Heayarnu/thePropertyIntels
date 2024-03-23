// src/api/sendData.js

import nodemailer from "nodemailer";

export async function POST(request) {
  if (request.method === "POST") {
    try {
      const data = await request.json();
      console.log("this is receiving", data);
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "greatdev2023@gmail.com",
          pass: "txdwcuyvbhreghif",
        },
        authMethod: "LOGIN",
      });


const infoKeys = Object.keys(data);

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
