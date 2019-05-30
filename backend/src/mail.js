const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

const emailTemplate = text => `
    <div
        className="email"
        style="
            border: 1px solid black;
            padding: 20px;
            line-heigth: 2;
            font-size: 20px;
        "
    >
        <h2>Password Reset</h2>
        <p>${text}</p>
        <p> Thank you from Super-Shoes! </p>
    </div>
`

exports.transport = transport;
exports.emailTemplate = emailTemplate;