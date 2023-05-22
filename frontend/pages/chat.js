import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';

import Firebase from '@/components/Firefunctions'
function Chat() {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      message: "Hi Everyone!!!",
      userId: "gflgpep3lrfggHogjd",
      time: "05:55:43"
    }
  ]);

  useEffect(() => {
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const currentUser = 'gd2BZkgfrHZ1KdCv04bq';
    const newMessageObj = {
      message: newMessage,
      userId: currentUser,
      time: new Date().toLocaleTimeString()
    };

    setMessages([...messages, newMessageObj]);
    setNewMessage('');
  };

  return (
    <div className={``}>
      <div className={`mb-8`}>
        <Header />
      </div>
      <div className={`flex h-screen bg-black`}>
        <div className={`w-1/4 bg-black text-white border-r border-violet-500 relative`}>
        
        <div className={`p-4`}>
          <h1 className={`text-lg font-semibold mb-4`}>Chats</h1>
          <ul className={`space-y-2`}>
            <li className={`flex shadow-2xl shadow-violet-500 items-center border border-violet-500 border-2 rounded-md p-2 pb-2`}>
              
              <p className={`text-white`}>Group 13 - KKR United</p>
            </li>
            
          </ul>
        </div>
        
      </div>
        <div className={`flex-1 flex flex-col`}>
          <header className={`bg-black border-b border-violet-500 shadow-md shadow-violet-500 text-white py-4 px-6`}>
            <h1 className={`text-xl font-semibold`}>Group 13 - KKR United</h1>
          </header>
          <div className={`flex-1 bg-black`}>
            <div className={`p-4`}>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.userId === 'gd2BZkgfrHZ1KdCv04bq' ? 'items-end justify-end' : 'items-start'} mb-4`}
                >
                  <div className={`bg-black border-2 border-violet-500 rounded-lg pr-5 p-2`}>
                    <p className={`text-white mb-1 text-2xl`}>{msg.message}</p>
                    <span className={`text-gray-500 text-md`}>{msg.time}</span><br/>
                    <span className={`text-gray-500 text-[10px]`}>{msg.userId}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`bg-black py-4 px-6`}>
            <div className={`flex items-center`}>
              <input
                className={`flex-1 bg-black border border-2 border-violet-500 shadow-2xl shadow-violet-500 rounded-full py-2 px-4 mr-2`}
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button
                className={`bg-black border-2 border-violet-500 text-white py-2 px-4 rounded-full`}
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
