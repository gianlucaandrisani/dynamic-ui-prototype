import React, { useState, useEffect } from 'react';
import Form from './Form'; // Ensure correct import
import '../Chat.css'; // Import the CSS file
import { ReactComponent as SendIcon } from '../Forward.svg'; // Correctly import the SVG
import Investment from './INvestment';

const Chat = () => {
  // Initialize messages with the default bot message
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hello! How can I assist you today?" }
  ]);
  const [input, setInput] = useState('');
  
  // Hard-coded responses
  const botResponses = [
    "Great idea, are you resident in the US?",
    "To proceed, I need some information, please complete the following form.",
    "Great, your account is all set, now you can start investing!"
  ];

  useEffect(() => {
    // Check if we need to provide a bot response
    if (messages.length === 2 || messages.length === 4 || messages.length === 6) { // Respond after the first, third, and fifth user messages
      setTimeout(() => {
        const responseIndex = (messages.length / 2) - 1; // Determine the response index
        const botResponse = botResponses[responseIndex] || "I'm here to assist you further!";
        setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: botResponse }]);
        console.log("Messages after bot response:", [...messages, { sender: 'bot', text: botResponse }]);
      }, 1000); // Simulate a delay for the bot response
    }
  }, [messages]);


  const handleSend = () => {
    if (input.trim()) {
      const updatedMessages = [...messages, { sender: 'user', text: input }];
      setMessages(updatedMessages);
      setInput('');
      console.log("Messages after user input:", updatedMessages);
    }
  };

  
  const handleFormSubmit = () => {
    setTimeout(()=> {
        const updatedMessages = [...messages, {sender: 'user' , text: 'Continue'}];
        const finalMessages = [...updatedMessages, {sender: 'bot', text: botResponses[2]}];
        setMessages(finalMessages);
    }, 1000);
  }

  return (
    <div>
        <div className='header'>
            Revolut AI
        </div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
            {msg.sender === 'bot' && msg.text === botResponses[1] && <Form onSubmit={handleFormSubmit} />}
            {msg.sender === 'bot' && msg.text === botResponses[2] && <Investment />}
          </div>
        ))}
      </div>
      <div className="input-container">
        <div className='marketing'>
            Powered by <span>Skippr</span>
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Revolut"
          className='chat-input'
        />
        <button onClick={handleSend}>
        <SendIcon className="send-icon" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
