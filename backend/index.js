const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = process.env.PORT || 3001;

// Use the cors middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Middleware for parsing JSON bodies
app.use(express.json());

// Route for sending emails
app.post('/send-email', (req, res) => {
    const { name, email, phone, message } = req.body;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'npage1129@gmail.com', // your Gmail email address
            pass: 'xfjh cxib gbbc jypk' // your Gmail password
        }
    });

    const mailOptions = {
        from: 'your_email@gmail.com',
        to: 'npage1129@gmail.com',
        subject: 'New Message from Contact Form',
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
        `
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
