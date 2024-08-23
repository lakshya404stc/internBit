"use client"

import React, { useState } from "react"

export default function Home() {

  const [text,setText] = useState<string>("")

  const channelId = "C07J65B2ZQD"; 

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          channelId: channelId,
          text: text,
        }),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col w-full">
        <input className="p-2 mb-5 text-black" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handleSubmit}>Send Message</button>
      </div>
    </main>
  );
}

