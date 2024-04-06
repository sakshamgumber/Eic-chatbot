import { Loader2 } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='absolute top-0 left-0 h-screen flex justify-center items-center w-screen'>
        <Loader2 className='text-6xl animate-spin'/>
    </div>
  )
}

export default Loading