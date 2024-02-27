// Chat.js

import React, { useState, useEffect } from 'react';
import styles from "./styles.module.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // You would typically fetch messages from the server here
    // For simplicity, let's initialize with some dummy messages
    setMessages([
      { id: 1, text: 'Hello!', sender: 'user' },
      { id: 2, text: 'Hi there!', sender: 'admin' },
    ]);
  }, []);

  const handleSendMessage = () => {
    // You would send the message to the server here
    // For simplicity, let's just add the message to the state
    const newMessageObj = { id: messages.length + 1, text: newMessage, sender: 'user' };
    setMessages([...messages, newMessageObj]);
    setNewMessage('');
  };

  return (
    <div className={styles.chat_container}>
      <div className={styles.chat_messages}>
        {messages.map((message) => (
          <div key={message.id} className={`${styles.message} ${styles[message.sender]}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className={styles.chat_input}>
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleSendMessage} className={styles.button}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
