import express from "express";
import Feedback from "../models/feedback.js";
import { sendMail } from "../utils/mailer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newFeedback = new Feedback({
      email: req.body.email,
      rating: req.body.rating,
      note: req.body.note,
    });

    const savedFeedback = await newFeedback.save();

    await sendMail({
      from: req.body.email,
      to: process.env.EMAIL_USER,
      subject: `⭐ New Portfolio Feedback (${req.body.rating} Stars)`,
      text: `New Feedback Received\nFrom: ${req.body.email}\nRating: ${
        req.body.rating
      }\nNote: ${
        req.body.note ? req.body.note : "No additional note provided."
      }`,
    });
    res.status(201).json(savedFeedback);
  } catch (err) {
    console.log("Error saving feedback: ", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
