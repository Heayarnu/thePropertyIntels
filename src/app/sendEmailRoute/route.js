// src/api/sendData.js

import nodemailer from "nodemailer";

export async function POST(req, res) {
  console.log("this is receiving");
  if (req.method === "POST") {
    try {
      const data = req.body;
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "greatdev2023@gmail.com",
          pass: "txdwcuyvbhreghif",
        },
        authMethod: "LOGIN",
      });

      const info = await transporter.sendMail({
        from: "greatdev@gmail.com",
        to: "folahunareago@gmail.com",
        subject: "MESAGE FROM THEPROPERTY INTELS WEBSITE",
        text: JSON.stringify(data),
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
