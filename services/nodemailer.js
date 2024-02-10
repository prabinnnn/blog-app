const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_USER,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMPT_PASS,
  },
});
const mailer = async (mail) => {
  const info = await transporter.sendMail({
    from: '"prabin"<bhandariprabin402@gmail.com>', // sender address
    to: mail, // list of receivers
    subject: "successful registration", // Subject line
    text: "ur account is registrated", // plain text body
    html: "", // html body
  });
  return info.messageID;
};
module.exports = { mailer };
