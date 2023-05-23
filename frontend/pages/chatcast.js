import React from 'react';
import Header from '@/components/Header';

function ChatCast() {
  const messages = [
    {
      message: "WTC Final Preview - A Sneak Peak",
      userId: "Vidur Khosla",
      time: "05:55:43",
      audioUrl: "/vidur.mp3"
    }
  ];

  const extractAudioLink = (message) => {
    const audioLinkRegex = /(https?:\/\/[^\s]+)/g;
    const matches = message.match(audioLinkRegex);
    return matches ? matches[0] : null;
  };

  const renderAudioPlayer = (audioUrl) => {
    return (
      <audio controls>
        <source src={audioUrl} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    );
  };

  return (
    <div className={``}>
      <div className={`mb-8`}>
        <Header />
      </div>
      <div className={`flex h-screen bg-black`}>
        <div className={`w-1/4 bg-black text-white border-r border-violet-500 relative`}>
          <div className={`p-4`}>
            <h1 className={`text-lg font-semibold mb-4`}>Subscriptions</h1>
            <ul className={`space-y-2`}>
              <li className={`flex shadow-2xl shadow-violet-500 items-center border border-violet-500 border-2 rounded-md p-2 pb-2`}>
                <p className={`text-white`}>🏏 Vidur Khosla</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={`flex-1 flex flex-col`}>
          <header className={`bg-black border-b border-violet-500 shadow-md shadow-violet-500 text-white py-4 px-6`}>
            <h1 className={`text-xl font-semibold`}>🏏 Vidur Khosla - ViewsFrom3rdMan</h1>
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
                    <p className='m-5'>
                    {msg.audioUrl && renderAudioPlayer(msg.audioUrl)}
                    </p>
                    {/* <iframe className='rounded-[12px]' src="https://open.spotify.com/embed/episode/3RbPCeE57D1uZkBGVuqJLO?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
                    <span className={`text-gray-500 text-sm mt-4`}>{msg.time}</span><br/>
                    <span className={`text-gray-500 text-[10px]`}>{msg.userId}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatCast;
