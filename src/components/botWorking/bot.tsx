"use client"
import React, { useEffect, useState } from 'react'

import{GoogleGenerativeAI,
HarmCategory,HarmBlockThreshold, ChatSession} from '@google/generative-ai'
import { data } from './data'
type Message={
    role:string,
    text:string,
    timestamp: Date
}
const Bot = () => {
    const [message, setMessage] = useState<Message[]>([])
    const [userInput, setUserInput] = useState("")
    const [chat, setChat] = useState<ChatSession>()
    const [error, setError] = useState("")

    const API_KEY="AIzaSyDHQIawdDyQyjsWjOHEg0okUWCLUbBHJC8"
    console.log(API_KEY)
    const MODEL_NAME="gemini-1.0-pro"

    if(!API_KEY)throw new Error("API key is missing")

    const genAI=new GoogleGenerativeAI(API_KEY)

    const generationConfig = {
        temperature: 0.45,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      };
    
      const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ];

      useEffect(()=>{
        const initChat=async ()=>{
            try{
                const newChat=await  genAI.getGenerativeModel({model:MODEL_NAME})
                                    .startChat({
                                        generationConfig,
                                        safetySettings,
                                        history:data
                                    })
                setChat(newChat)
            }
            catch(error){
                setError("Failed to initialize chat try again")
            }
        }
        initChat()
      },[])

      const handleSendMessage=async ()=>{
        try{
            setError("")
            const userMessage={
                text:userInput,
                role:"user",
                timestamp:new Date()
            }
            setMessage((prevMsg)=>[...prevMsg,userMessage])

            setUserInput("")

            if(chat){
                const result=await chat.sendMessage(userInput)
                const botMessage={
                    role:"model",
                    timestamp:new Date(),
                    text: result.response.text()
                }

                setMessage((prevMessage)=>[...prevMessage,botMessage])
            }
        }
        catch(error){
            setError("Failed to send message .Please try again")
        }
      }
      const handleKeyPress=(e:any)=>{
        if(e.key==="Enter"){
            e.preventDefault()
            handleSendMessage()
        }
      }
  return (
    <div className="flex flex-col h-[calc(100%-30px)] w-full p-4 overflow-scroll text-black">
  <div className="flex justify-between items-center mb-4">
    <h1 className="text-2x font-bold text">Oversee.</h1>
  </div>
  <div className="text-[1vw] flex-1 overflow-y-auto  rounded-md p-2">
    {message.map((msg, index) => (
      <div key={index} className={` mb-4 ${msg.role === "user" ? "text-right" : "text-left"}`}>
        <span className={`p-2 rounded-lg `}>
          {msg.text}
        </span>
        <p className="text-xs text mt-1">
          {msg.role === "bot" ? "Bot" : "You"} - {msg.timestamp.toLocaleTimeString()}
        </p>
      </div>
    ))}
    {error && <div className="text-red-500 text-sm mb-4 ">{error}</div>}
    <div className="flex items-center mt-4">
      <input
        type="text"
        placeholder="Type your message..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyPress}
        className="flex-1 p-2 rounded-md border-t border-b border-l text-white focus:outline-none focus:border-accent"
      />
      <button
        onClick={handleSendMessage}
        className="p-2 accent text-white rounded-r-md hover:bg-opacity-80 focus:outline-none"
      >
        Send
      </button>
    </div>
  </div>
</div>

  )
}

export default Bot