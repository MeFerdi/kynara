// Simple Express server for contact form
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.ZOHO_USER}>`,
      to: process.env.ZOHO_RECEIVER,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    let errorMsg = 'Failed to send email.';
    if (error.code === 'EAUTH') {
      errorMsg = 'Authentication failed. Check your Zoho credentials in .env';
    }
    res.status(500).json({ error: errorMsg, details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
