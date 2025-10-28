import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const SENDER_MAIL = process.env.EMAIL_USER;

export async function sendMail({ from, to, subject, text }) {
  const message = {
    from: SENDER_MAIL,
    to: to,
    replyTo: from,
    subject: subject,
    text: text,
  };

  try {
    const [response] = await sgMail.send(message);
    if (response.statusCode === 202) {
      console.log("Email sent successfully.");
      return response;
    } else {
      console.error(`SendGrid API returned status ${response.statusCode}`);
      if (response.body) {
        console.error("SendGrid Response Details:", response.body);
      }
      throw new Error(`SendGrid API Error: Status ${response.statusCode}`);
    }
  } catch (error) {
    console.error("Critical email sending failure:", error);
    throw new Error("Failed to deliver contact message.");
  }
}
