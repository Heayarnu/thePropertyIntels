// src/api/sendData.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
    
      const data = req.body;
      const transporter = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
          user: 'greatdev2023@gmail.com',
          pass: 'txdwcuyvbhreghif',
        },
        authMethod: "LOGIN",
      });

      const info = await transporter.sendMail({
        from: 'greatdev@gmail.com',
        to: 'folahunareago@gmail.com',
        subject: 'MESAGE FROM THEPROPERTY INTELS WEBSITE',
        text: JSON.stringify(data),
      });

      console.log('Message sent: %s', info.messageId);

      res.status(200).json({ message: 'Data sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
