import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  const model = genAI.getGenerativeModel({
    model: "models/gemini-1.5-pro",
  });

  try {
    const chat = model.startChat({
      history: messages
        .filter((msg) => msg.role !== "system") // ✅ remove system messages
        .map((msg) => ({
          role: msg.role,
          parts: [{ text: msg.content }],
        })),
    });

    const result = await chat.sendMessage(
      messages[messages.length - 1].content
    );
    const response = result.response;
    const text = response.text();

    res.json({ reply: text });
  } catch (error) {
    console.error("❌ Gemini API error:", error);
    res.status(500).json({ error: "Failed to get AI response" });
  }
});

app.listen(3001, () => {
  console.log("✅ Server running on http://localhost:3001");
});
