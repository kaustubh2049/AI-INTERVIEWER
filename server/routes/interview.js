const express = require("express");
const router = express.Router();

router.post("/ask", async (req, res) => {
  // This will be connected to OpenAI later
  res.json({ feedback: "AI feedback will go here." });
});

module.exports = router;
