const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());


// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.userMail}`, // Replace with your Gmail email address
      pass: `${process.env.appPassword}`, // Replace with your Gmail password
    },
  });


// POST route to handle form submissions
app.post('/send-email', (req, res) => {
    const { name, email, phone, message } = req.body;
    // Email content
  const mailOptions = {
    from: `${process.env.userMail}`, // Replace with your Gmail email address
    to: `${process.env.recipient1Mail}`, // Replace with the recipient email address
    cc: `${process.env.recipient2Mail}, ${process.env.recipient3Mail}, ${process.env.recipient4Mail}`,
    subject: 'NEW CONTACT FORM SUBMISSION',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  // Send email
   transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error.message);
        return res.status(500).send(error.toString());
    }
     res.status(200).send('Email sent: ' + info.response);
  });
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

