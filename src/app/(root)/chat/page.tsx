
import GeminiChat from '@/components/gemini-bot/gemini-chat'
import React from 'react'

const Chats = () => {
  return (
    <div className=' h-screen w-full'>
      <h1 className='border-b border-muted-foreground/50 text-4xl md:text-6xl py-4 px-2'>
            Chat
        </h1>
      <GeminiChat/>
    </div>
  )
}

export default Chats