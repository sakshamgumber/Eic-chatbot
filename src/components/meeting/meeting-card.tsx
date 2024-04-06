import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { IconAdCircleOff } from '@tabler/icons-react'
import { PlusCircleIcon } from 'lucide-react'
  
const MeetingCard = ({title,description}:{title:string,description:string,onClick?:(e:any)=>void}) => {
  return (
    <Card className=' h-[300px] w-[300px] relative m-4'>
  <CardHeader>
    <CardTitle>{title}</CardTitle>
  </CardHeader>
  <CardContent>
    <p>{description}</p>
  </CardContent>
  <CardFooter className='absolute bottom-5'>
    <button className='w-[80%] flex items-center justify-center'>
        <PlusCircleIcon/>
    </button>
  </CardFooter>
  </Card>

  )
}

export default MeetingCard