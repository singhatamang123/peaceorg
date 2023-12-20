// ChatIcon.js
import React from 'react';
import { CloseButton } from 'react-bootstrap';
import { BsChatSquare } from 'react-icons/bs'; // Changed to BsChatSquare for a message box icon

const ChatIcon = ({ onClick, isOpen }) => {
  return (
    <div className={`chat-icon ${isOpen ? 'open' : 'closed'}`} onClick={onClick}>
      {isOpen ? (
        <CloseButton />
      ) : (
        <div>
          <BsChatSquare /> {/* Changed to BsChatSquare */}
        </div>
      )}
    </div>
  );
};

export default ChatIcon;
