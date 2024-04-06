import ProfileForm from '@/components/form/profile_form'
import GeminiChat from '@/components/gemini-bot/gemini-chat'
import React from 'react'

const Settings = () => {
  return (
  <div className='w-screen rounded-2xl'>
    <h1 className='border-b border-muted-foreground/50 text-4xl md:text-6xl py-4 px-2 mb-6'>
        Settings
    </h1>
    <ProfileForm/>
    
</div>  
)
}

export default Settings