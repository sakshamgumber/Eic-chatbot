"use client"
import React, { ReactNode ,useState,useEffect} from 'react'
import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
    User,
  } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/nextjs';
import { tokenProvider } from '../../actions/stream.actions';
import  Loading  from '@/components/(global)/loader';


const StreamVideoProvider = ({children}:{children:ReactNode}) => {
    const apiKey=process.env.NEXT_PUBLIC_STREAM_API_KEY
    console.log(apiKey)
    const {user,isLoaded}=useUser()

   const [videoClient, setvideoClient] = useState<StreamVideoClient>()

   useEffect(()=>{
    if(!user||!isLoaded) return;
    if(!apiKey) throw new Error("API key is missing")

    const client=new StreamVideoClient({
        apiKey,
        user:{
            id:user?.id,
            image:user.imageUrl,
            name:user.username||user?.id
        },
        tokenProvider
    })

    setvideoClient(client)
   },[user,isLoaded])

   if(!videoClient) return <Loading/>

  return (
    <StreamVideo client={videoClient}>
        {children}
    </StreamVideo>
  )
}

export default StreamVideoProvider