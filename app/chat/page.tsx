'use client'

import { useState } from 'react'
import { ArrowLeft, Send, Settings } from 'lucide-react'
import axios from 'axios'
import './style.css'
import Link from 'next/link'

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { sender: 'ai', content: 'Hello! How can I help bring your imagination to life today?', timestamp: '10:30 AM' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (input.trim()) {
      // Add user message to the chat
      const userMessage = {
        sender: 'user', // Add sender field
        role: 'user', // Correct role
        content: input,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, userMessage]);
      setInput('');
  
      // Show loading state
      setLoading(true);
      // 49567fcad7a34f1c92b2e3ff4bc4f27d
      // API call to get AI response
      try {
        const response = await axios.post('https://api.aimlapi.com/v1/chat/completions', {
          model: 'mistralai/Mistral-7B-Instruct-v0.2',
          messages: [
            { role: 'system', content: 'Talk to me like Lord Krishna.' }, // Correct role
            ...messages.map((msg) => ({
              role: msg.sender === 'user' ? 'user' : 'assistant', // Correct mapping
              content: msg.content,
            })),
            { role: 'user', content: input }, // Correct role for user input
          ],
          temperature: 0.7,
          max_tokens: 256,
        }, {
          headers: {
            'Authorization': 'Bearer 396533d9be07418ba0ad3bf2988f51b5',
          },
        });
  
        // Add AI response to the chat
        const aiMessage = {
          sender: 'assistant', // Add sender field for AI response
          role: 'assistant', // Correct role for AI's response
          content: response.data.choices[0].message.content,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } catch (error) {
        console.error('Error fetching AI response:', error);
      } finally {
        setLoading(false);
      }
    }
  };
  
  

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white"
      style={{
        backgroundImage: `url('images/background.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <header className="sticky top-0 bg-opacity-50 backdrop-blur-md p-4 flex justify-between items-center z-10">
      <Link href="/">
        <button className="p-2 rounded-full hover:bg-gray-700 transition-colors">
          <ArrowLeft size={24} />
        </button></Link>
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-600 p-3">
          श्रीकृष्ण
        </h1>
        <button className="p-3 rounded-full hover:bg-gray-700 transition-colors">
          <Settings size={24} />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg p-3 ${
              message.sender === 'user' 
                ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
            }`}>
              <p>{message.content}</p>
              <p className="text-xs mt-1 opacity-75">{message.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 bg-opacity-50 backdrop-blur-md p-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-blue-50 text-white rounded-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full p-2 hover:from-orange-600 hover:to-pink-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            disabled={loading}
          >
            {loading ? 'Sending...' : <Send size={24} />}
          </button>
        </div>
      </div>
    </div>
  )
}
