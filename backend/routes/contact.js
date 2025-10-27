import express from "express";
import Contact from "../models/contact.js";
import { sendMail } from "../utils/mailer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });

    const savedContact = await newContact.save();

    await sendMail({
      from: req.body.email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form: ${req.body.subject}`,
      text: `You received a new message from ${req.body.name} (${req.body.email}):\n\n${req.body.message}`,
    });

    res.status(201).json(savedContact);
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
