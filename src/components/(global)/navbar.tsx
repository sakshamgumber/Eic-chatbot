import { SignInButton, SignOutButton, SignedIn, UserButton, useUser } from '@clerk/nextjs'
import { SignedOut } from '@clerk/nextjs/app-beta'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isSignedIn, setisSignedIn] = useState(false)
  const {user,isLoaded}=useUser()
  return (
    <nav className='z-[10] items-center  w-screen fixed top-0 left-0 flex px-6 py-4 justify-between bg-backgound/50  border-b-muted-foreground text-foreground backdrop-blur-lg'>
        <h1 className='text-2xl sm:text-4xl font-bold '>
            OVER<span></span>SEE
        </h1>
        <div className=' absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] flex gap-4 text-md max-md:hidden '>
            <Link href={"#pricing"} >Pricing</Link>
            <Link href={"#vision"}>Vision</Link>
            <Link href={"#aboutUs"}>About Us</Link>
            <Link href={"#conatct"}> Contact Us</Link>    
        </div>
        <div>
        <div className=' flex gap-4 px-4 items-center'>
        {
          user?(
            <>
            <Link href={"/dashboard"}>   
            <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-6 py-1 sm:px-8 sm:py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                              Dashboard
                    </div>
            </button>
            </Link> 
            <UserButton/>
            </>
            ):(
            <SignInButton/>
            )
        }
        
        </div>  
        </div>
    </nav>
  )
}

export default Navbar