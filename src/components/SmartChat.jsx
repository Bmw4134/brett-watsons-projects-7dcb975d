import React, { useState } from "react";

export default function SmartChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessage = { role: "user", content: input };
    setMessages([...messages, newMessage]);
    setInput("");

    const res = await fetch("/api/query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input }),
    });
    const data = await res.json();
    setMessages([...messages, newMessage, { role: "ai", content: data.reply }]);
  };

  return (
    <div style={{ width: "300px", background: "#1f2937", color: "white", padding: "1rem" }}>
      <h2>🤖 SmartChat</h2>
      <div style={{ height: "400px", overflowY: "auto", marginBottom: "1rem" }}>
        {messages.map((msg, idx) => (
          <p key={idx}><strong>{msg.role}:</strong> {msg.content}</p>
        ))}
      </div>
      <input
        style={{ width: "100%", padding: "0.5rem" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={sendMessage} style={{ marginTop: "0.5rem", width: "100%" }}>
        Send
      </button>
    </div>
  );
}
