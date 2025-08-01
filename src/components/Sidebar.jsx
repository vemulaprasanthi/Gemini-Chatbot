import React, { useState } from "react";

const Sidebar = ({ chats, currentChatIndex, onNewChat, onDeleteChat, onSelectChat }) => {
  const [menuOpenIndex, setMenuOpenIndex] = useState(null);

  const handleRenameChat = (index) => {
    const newTitle = prompt("Enter new chat name", chats[index].title);
    if (newTitle) {
      chats[index].title = newTitle;
      setMenuOpenIndex(null);
    }
  };

  const handleMenuToggle = (index) => {
    setMenuOpenIndex(menuOpenIndex === index ? null : index);
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Gemini</h2>
      <button onClick={onNewChat} className="new-chat-button">+ New Chat</button>
      <ul>
        {chats.map((chat, index) => (
          <li
            key={index}
            className={`chat-item ${index === currentChatIndex ? "active" : ""}`}
            onClick={() => onSelectChat(index)}
          >
            <span>{chat.title}</span>
            <div className="dots-container" onClick={(e) => { e.stopPropagation(); handleMenuToggle(index); }}>
              ⋯
              {menuOpenIndex === index && (
                <div className="chat-menu">
                  <button onClick={() => handleRenameChat(index)}>✏️ Rename</button>
                  <button className="delete-btn" onClick={() => onDeleteChat(index)}>🗑️ Delete</button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
