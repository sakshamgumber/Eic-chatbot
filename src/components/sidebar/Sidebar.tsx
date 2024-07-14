"use client"

import { IconDashboard, IconDeviceLaptop, IconMessage, IconSettings } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import clsx from 'clsx'
import { Database, GitBranch, LucideMousePointerClick } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Separator } from '@/components/ui/separator'
import ModeToggle from '@/components/(global)/mode-toggle'


const sideList=[
    {
        name:"Dashboard",
        href:"/dashboard",
        icon:<IconDashboard/>
    },
    {
        name:"Meetings",
        href:"/meeting",
        icon:<IconDeviceLaptop/>
    },
    {
        name:"Settings",
        href:"/settings",
        icon:<IconSettings/>
    },
    {
        name:"Chat",
        href:"/chat",
        icon:<IconMessage/>
    },
]


const Sidebar = () => {
   const pathName=usePathname()
  return (
    <nav className=' dark:bg-black px-2 py-6 flex h-screen flex-col justify-between items-center overflow-scroll gap-10'>
     <div className='flex flex-col items-center justify-center gap-8'>
        <Link href={"/"}>Oversee</Link>
        
          <TooltipProvider>
                    {
                        sideList.map((items)=><ul key={items.name}>

                        <Tooltip delayDuration={0}>
                            <TooltipTrigger>
                                <li>
                                    <Link href={items.href}
                                    className={clsx('cursor-pointer rounded-lg scale-[1.5] p-3px group flex items-center justify-center h-3 w-8',{
                                        'dark:bg-[#2F006B] bg-[#EEE0FF]':pathName===items.href
                                    })}
                                    >
                                      {items.icon}
                                    </Link>
                                </li>
                                <TooltipContent
                                 side='right'
                                 className=' backdrop-blur-xl bg-black/10'
                                >
                                    {items.name}
                                </TooltipContent>
                            </TooltipTrigger>
                         </Tooltip>

                        </ul>)
                    }
          </TooltipProvider>

          {/* <Separator />

          <div className='h-52 rounded-full overflow-scroll px-2 py-4 dark:bg-[#353346] flex flex-col gap-9 items-center border-[1px] relative'>
             <div className='relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[1px] border-[1px] dark:border-t-[#353346]'>
                    <LucideMousePointerClick size={18} className='dark:text-white'></LucideMousePointerClick>
                    <div className='border-l-2 absolute left-1/2 transform translate-x-[-50%] h-6 border-muted-foreground/50 -bottom-[30px]'/>
             </div>
             <div className='relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[1px] border-[1px] dark:border-t-[#353346]'>
                    <GitBranch className=' text-muted-foreground' size={18}/>
                    <div className='border-l-2 absolute left-1/2 transform translate-x-[-50%] h-6 border-muted-foreground/50 -bottom-[30px]'/>
             </div>
             <div className='relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[1px] border-[1px] dark:border-t-[#353346]'>
                    <Database size={18} className='dark:text-white'/>
                    <div className='border-l-2 absolute left-1/2 transform translate-x-[-50%] h-6 border-muted-foreground/50 -bottom-[30px]'/>
             </div>
             <div className='relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[1px] border-[1px] dark:border-t-[#353346]'>
                   <GitBranch className=' text-muted-foreground' size={18}/>
             </div>
            
          </div> */}
          <ModeToggle/>
        </div>
    </nav>
  )
}

export default Sidebar