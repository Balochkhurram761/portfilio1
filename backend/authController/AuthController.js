import nodemailer from 'nodemailer';
import dotenv from 'dotenv'

dotenv.config();

const sendmail = async (req, res) => {
  const { firstname, lastname, phone, email, message } = req.body;


  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 456,
    auth: {
      user: process.env.Email_User,
      pass: process.env.Email_Pass,
    },
  });


  const mailOptions = {
    from: email,
    to: process.env.Email_User,
    subject: `Message from ${firstname} ${lastname} | Phone: ${phone}`,
    text: message,
    replyTo: email
  };


  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
};

export default sendmail;
