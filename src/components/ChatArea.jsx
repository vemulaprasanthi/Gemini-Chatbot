import React, { useRef } from "react";
import "../index.css"; // Make sure you have message styles in your CSS

const ChatArea = ({ messages, input, setInput, onSendMessage, onEditMessage, onFileUpload }) => {
  const fileInputRef = useRef(null);

  return (
    <div className="chat-area">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message-wrapper">
            <div className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}>
              <div className="message-content">
                {msg.fileName ? (
                  <div>
                    📎 {msg.fileName}
                    <button onClick={() => navigator.clipboard.writeText(msg.fileName)}>📋</button>
                  </div>
                ) : (
                  <div>
                    {msg.sender === "bot" ? "🤖" : "👤"} {msg.content}
                  </div>
                )}
              </div>

              <div className="message-actions">
                {msg.sender === "user" && (
                  <>
                    <button title="Edit" onClick={() => onEditMessage(index)}>✏️</button>
                    <button title="Copy" onClick={() => navigator.clipboard.writeText(msg.content)}>📋</button>
                  </>
                )}
                {msg.sender === "bot" && !msg.fileName && (
                  <button title="Copy" onClick={() => navigator.clipboard.writeText(msg.content)}>📋</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={input}
          placeholder="Type your message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSendMessage()}
        />
        <button className="send-button" onClick={onSendMessage}>Send</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => e.target.files[0] && onFileUpload(e.target.files[0])}
        />
        <button onClick={() => fileInputRef.current.click()}>Upload</button>
      </div>
    </div>
  );
};

export default ChatArea;
