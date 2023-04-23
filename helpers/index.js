const nodeMailer = require("nodemailer");

const defaultEmailData = { from: "noreply@node-react.com" };

exports.sendEmail = emailData => {
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        //Enable third-party access from gmail
        auth: {
            user: 'taib1910442@student.ctu.edu.vn',
            pass: '4YAtz9TNQv'
        }
    });
    return (
        transporter
            .sendMail(emailData)
            .then(info => console.log(`Message sent: ${info.response}`))
            .catch(err => console.log(`Problem sending email: ${err}`))
    );
};