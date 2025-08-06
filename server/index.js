const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const interviewRoutes = require("./routes/interview");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/interview", interviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
