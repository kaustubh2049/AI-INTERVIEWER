require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB Atlas Connected");
    app.get("/", (req, res) => res.send("Backend is running 🚀"));
    app.listen(PORT, () =>
      console.log(`Backend listening on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.log("❌ DB Connection Error:", err));
