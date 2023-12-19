// Import the necessary libraries and components
import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import './Chatbox.css';
import ChatIcon from './ChatIcon'; // Adjust the path based on your file structure

const chatboxStyle = {
  position: 'fixed',
  bottom: 0,
  right: 20,
  zIndex: 1000,
  // Add other styling as needed
};

const Chatbox = () => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  // State variables
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Function to generate bot responses
  const generateBotResponse = (text) => {
    const botMessage = { text, sender: 'bot' };

    // Keep only the latest N messages, for example, 3 messages
    const updatedMessages = [...messages, botMessage].slice(-3);

    setMessages(updatedMessages);
  };

  // Effect to display an initial bot message when the chatbox is opened
  useEffect(() => {
    if (isChatboxOpen) {
      generateBotResponse('Hello! How can I assist you today? You can ask about bank details, eSewa, Khalti, NGOs, or any other questions.');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChatboxOpen]);

  // Function to handle user's messages
  const handleUserQuery = (query) => {
    // Convert the query to lowercase for case-insensitive matching
    const lowerCaseQuery = query.toLowerCase();

    // Check for keywords and generate responses
    if (lowerCaseQuery.includes('bank')) {
      generateBotResponse('Sure! Here are the bank details...');
    } else if (lowerCaseQuery.includes('esewa')) {
      generateBotResponse('eSewa is a digital wallet. Here is some information...');
    } else if (lowerCaseQuery.includes('khalti')) {
      generateBotResponse('Khalti is another digital wallet. Here is some information...');
    } else if (lowerCaseQuery.includes('ngo')) {
      generateBotResponse('NGOs (Non-Governmental Organizations) are organizations that work for social causes...');
    } else if (lowerCaseQuery.includes('donation') || lowerCaseQuery.includes('donate')) {
      // Make the donation link clickable
      generateBotResponse('If you are interested in making a donation, please connect with us on Facebook Messenger. You can find us here: <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook Messenger</a>');
    } else {
      // If no specific keyword is found, provide a default response
      generateBotResponse('Sorry, I didn\'t understand. We will try to find an answer for you!');
    }
  };

  // Function to handle sending user messages
  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const userMessage = { text: newMessage, sender: 'user' };
      setMessages([...messages, userMessage]);
      setNewMessage('');

      // Handle user query
      handleUserQuery(userMessage.text);
    }
  };

  return (
    <div style={chatboxStyle}>
      {/* ChatIcon component to toggle the chatbox */}
      <ChatIcon onClick={toggleChatbox} isOpen={isChatboxOpen} />

      {/* Chatbox UI */}
      {isChatboxOpen && (
        <div className="chatbox">
          <div className="chatbox-header">
            <span>Chat with Us</span>
            <button className="close-button" onClick={() => setIsChatboxOpen(false)}>
              X
            </button>
          </div>
          <div className="chatbox-messages">
            {/* Displaying messages in the chatbox */}
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                {/* Sanitize and render HTML content */}
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(message.text) }} />
              </div>
            ))}
          </div>
          <div className="chatbox-input">
            {/* Input field for typing messages */}
            <input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            {/* Button to send messages */}
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
