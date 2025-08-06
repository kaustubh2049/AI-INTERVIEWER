import React, { useState } from "react";

const InterviewPage = ({ role }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const maxQuestions = 5;

  const handleSend = async (userText) => {
    if (!userText.trim()) return;

    const newMessages = [...messages, { sender: "user", text: userText }];
    setMessages(newMessages);
    setInput("");

    const userReplies = newMessages.filter(
      (msg) => msg.sender === "user"
    ).length;

    // If 5 questions are done, end interview
    if (userReplies >= maxQuestions) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "✅ The interview is now complete. Thank you for your responses. Please wait while we evaluate your performance...",
        },
      ]);
      return;
    }

    const chatMessages = [
      {
        role: "system",
        content: `You are a strict but fair AI job interviewer for the role of "${role}".

Conduct a mock interview with 5 questions total:
- Ask 3 technical questions and 2 behavioral (in any order)
- Ask one question at a time

After each user answer:
- Judge if the answer is correct
- If it's wrong, politely say it's wrong and give the correct answer
- If it's good, acknowledge it briefly
- Then ask the next question

After the 5th answer:
- If the answers were good overall, end with: "We're impressed with your answers. Thank you."
- If the answers were weak, end with: "Thank you for your time. It was a good learning experience."
Be realistic, clear, and concise.`,
      },
      ...newMessages.map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      })),
    ];

    try {
      const res = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatMessages }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "ai", text: data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠️ Error fetching response from AI." },
      ]);
    }
  };

  // ✅ This handles form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend(input);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">🎤 AI Interview for {role}</h1>

      <div className="w-full max-w-2xl bg-gray-800 rounded p-4 mb-4 h-[60vh] overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 p-2 rounded ${
              msg.sender === "user"
                ? "bg-green-600 text-white text-right ml-auto"
                : "bg-gray-700 text-left mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {messages.filter((msg) => msg.sender === "user").length >=
      maxQuestions ? (
        <div className="text-green-400 font-semibold">
          ✅ Interview completed (5 questions).
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl flex items-center gap-2"
        >
          <input
            className="flex-1 p-3 rounded bg-gray-700 text-white focus:outline-none"
            type="text"
            placeholder="Type your answer..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default InterviewPage;
