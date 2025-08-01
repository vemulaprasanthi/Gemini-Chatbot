# Gemini-Chatbot
# 🤖 Gemini Chatbot

A modern, interactive chatbot powered by **Google Gemini API**, built using **React + Vite**. This chatbot supports real-time conversations, chat history, message editing, file uploads, and a sleek UI that mimics ChatGPT. Fully responsive and deployable to Netlify or mobile apps via Capacitor.

## 🌐 Live Demo

👉 [Visit on Netlify](https://688c77129c083ed516af0a3c--jade-bavarois-8f1a29.netlify.app/)  

---

## ✨ Features

- 💬 Chat with Gemini API (real answers from Google Gemini)
- 📚 Chat history in sidebar
- 🖊️ Edit user messages
- 📎 Upload images and documents
- 🆕 Start new chat
- 🗑️ Delete chat with confirmation
- 📋 Copy message to clipboard
- ✅ User messages on right, bot messages on left
- 📱 Mobile-friendly layout
- 🔄 Fully scrollable conversation view (like ChatGPT)

---

## 🖼️ Screenshots

### 💻 Desktop UI

![Chat UI](assets/UI.png)

### 📁 Sidebar & Chat Management

![Sidebar](assets/2.png)

### 📝 Message Editing / Upload

![Editing Message](assets/3.png)

### 📱 Mobile View

![Mobile View](assets/4.png)

---

## ⚙️ Tech Stack

- **Frontend**: React + Vite + Tailwind CSS
- **API**: Google Gemini (via fetch POST)
- **State**: useState, useEffect
- **Deployment**: Netlify (web) or Capacitor + Android Studio (mobile)

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/vemulaprasanthi/Gemini-Chatbot.git
cd Gemini-Chatbot
npm install
npm run dev
