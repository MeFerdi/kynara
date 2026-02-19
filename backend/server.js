// Simple Express server for contact form
const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://kynaralabs.com', 'https://www.kynaralabs.com']
    : ['https://kynaralabs.com', 'https://www.kynaralabs.com', 'http://localhost:5173', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

// Explicitly handle OPTIONS requests
app.options('*', cors(corsOptions));

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.post('/api/contact', async (req, res) => {
  console.log('Received POST request to /api/contact');
  console.log('Request body:', req.body);
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    if (!process.env.SENDGRID_API_KEY) {
      return res.status(500).json({ error: 'Email service not configured.' });
    }

    const fromAddress = process.env.SENDGRID_FROM || process.env.ZOHO_RECEIVER;
    const toAddress = process.env.ZOHO_RECEIVER;

    if (!fromAddress || !toAddress) {
      return res.status(500).json({ error: 'Email sender/receiver not configured.' });
    }

    await sgMail.send({
      to: toAddress,
      from: {
        email: fromAddress,
        name: 'Kynara App',
      },
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    let errorMsg = 'Failed to send email.';
    if (error.code === 401 || error.code === 403) {
      errorMsg = 'Authentication failed. Check your SendGrid API key.';
    }
    res.status(500).json({ error: errorMsg, details: error.message });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error', details: err.message });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
