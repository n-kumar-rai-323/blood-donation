const nodemailer = require("nodemailer");

const transporter = new nodemailer.createTransport({
    service: process.env.SMTP_SERVICE, // Ensure SMTP_SERVICE is "gmail" in .env
    auth: {
      user: process.env.SMTP_EMAIL, // Ensure SMTP_EMAIL is your Gmail address in .env
      pass: process.env.SMTP_PASSWORD, // Ensure SMTP_PASSWORD is your App Password in .env
    },
  });

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

const sendEmail = async ({ to, subject, htmlMessage }) => {
  const info = await transporter.sendMail({
    from: `"XYZ hotel Mgmt" <${process.env.SMTP_EMAIL}>`,
    to,
    subject,
    html: htmlMessage,
  });
  return info;
};

module.exports = { sendEmail };
