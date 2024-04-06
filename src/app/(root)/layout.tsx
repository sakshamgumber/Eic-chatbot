import Sidebar from '@/components/sidebar/Sidebar'
import StreamVideoProvider from '@/providers/stream-video-provider'
import { StreamCallProvider } from '@stream-io/video-react-sdk'
import React, { ReactNode } from 'react'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <main className='w-screen flex'>
        <StreamVideoProvider>
        <Sidebar/>
        {children}
        </StreamVideoProvider>
    </main>
  )
}

export default Layout