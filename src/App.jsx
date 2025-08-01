// App.jsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import "./index.css";

const App = () => {
  const [chats, setChats] = useState([
    {
      title: "New Chat",
      messages: [],
    },
  ]);
  const [currentChatIndex, setCurrentChatIndex] = useState(0);
  const [input, setInput] = useState("");

  const handleNewChat = () => {
    const newChat = { title: "New Chat", messages: [] };
    setChats([newChat, ...chats]);
    setCurrentChatIndex(0);
  };

  const handleDeleteChat = (indexToDelete) => {
    const newChats = chats.filter((_, index) => index !== indexToDelete);
    setChats(newChats);
    setCurrentChatIndex(0);
  };

  const handleSelectChat = (index) => {
    setCurrentChatIndex(index);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const updatedChats = [...chats];
    const currentMessages = updatedChats[currentChatIndex].messages;

    currentMessages.push({ sender: "user", content: input });
    currentMessages.push({ sender: "bot", content: "..." });
    setChats(updatedChats);
    setInput("");

    try {
      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=put your key", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: input }] }],
        }),
      });

      const data = await response.json();
      const botMessage = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, no response.";

      updatedChats[currentChatIndex].messages.pop();
      updatedChats[currentChatIndex].messages.push({ sender: "bot", content: botMessage });

      setChats([...updatedChats]);
    } catch (error) {
      console.error("Gemini API error:", error);
    }
  };

  const handleEditMessage = (index) => {
    const newMessage = prompt("Edit your message", chats[currentChatIndex].messages[index].content);
    if (newMessage) {
      const updatedChats = [...chats];
      updatedChats[currentChatIndex].messages[index].content = newMessage;
      setChats(updatedChats);
    }
  };

  const handleFileUpload = (file) => {
    const updatedChats = [...chats];
    updatedChats[currentChatIndex].messages.push({
      sender: "user",
      content: "",
      fileName: file.name,
    });
    setChats(updatedChats);
  };

  return (
    <div className="chat-container">
      <Sidebar
        chats={chats}
        currentChatIndex={currentChatIndex}
        onNewChat={handleNewChat}
        onDeleteChat={handleDeleteChat}
        onSelectChat={handleSelectChat}
      />
      <ChatArea
        messages={chats[currentChatIndex]?.messages || []}
        input={input}
        setInput={setInput}
        onSendMessage={handleSendMessage}
        onEditMessage={handleEditMessage}
        onFileUpload={handleFileUpload}
      />
    </div>
  );
};

export default App;
