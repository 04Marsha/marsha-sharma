import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export function sendMail({ from, to, subject, text }) {
  return transporter.sendMail({ from, to, subject, text })
    .then(info => console.log('Email sent:', info.response))
    .catch(err => console.error('Error sending email:', err));
}
