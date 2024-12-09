"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    { sender: "AI", text: "Hello! How can I assist you today?" },
    { sender: "User", text: "Tell me more about Soul Script AI." },
    { sender: "AI", text: "Soul Script AI helps you bring characters to life using advanced AI." },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages((prev) => [...prev, { sender: "User", text: inputValue }]);
      setInputValue("");
      // Mock AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "AI", text: "That's interesting! Let's explore more." },
        ]);
      }, 1000);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col text-white"
      style={{
        backgroundImage: `url('/images/chat-bg.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Chat Header */}
      <header className="bg-black/70 py-4 px-6 text-xl font-bold">
        Soul Script AI Chat
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "User" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`${
                message.sender === "User"
                  ? "bg-orange-500"
                  : "bg-gray-800"
              } text-white py-2 px-4 rounded-lg max-w-sm`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="bg-black/70 p-4 flex items-center space-x-4">
        <Input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 bg-gray-800 text-white border-none focus:ring-orange-500"
        />
        <Button
          onClick={handleSend}
          className="bg-orange-500 hover:bg-orange-600"
        >
          Send
        </Button>
      </div>
    </div>
  );
}
