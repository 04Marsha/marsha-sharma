import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import contactRoutes from './routes/contact.js';

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://marshasharma:19122004Marsha&Meha@cluster0.ebps0sq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/contact", contactRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));