// Load environment variables only in development
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
  
  const express = require('express');
  const nodemailer = require('nodemailer');
  const bodyParser = require('body-parser');
  const cors = require('cors');
  
  const app = express();
  
  // Enable CORS
  app.use(cors());
  
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  
  app.post('/send-email', async (req, res) => {
    console.log('Received request:', req.body);
  
    const { name, email, phone, message } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'singhatamang456@gmail.com',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    }
  });
  
  const PORT = process.env.PORT || 10000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  