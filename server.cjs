const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3001;

app.use(cors({
    origin: ['http://localhost:5173']
}));

app.use(express.json());

let transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'shopunited2024@mail.ru',
        pass: '***********************'
    }
});

app.post('/send-email', (req, res) => {
    let mailOptions = {
        from: 'shopunited2024@mail.ru',
        to: req.body.to,
        subject: 'Test Email',
        text: 'This is a test email from ShopUnited!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent successfully:', info.response);
            res.send('Email sent successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
