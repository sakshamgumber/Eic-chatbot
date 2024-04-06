"use client"
import { EditProfileSchema } from '@/lib/types'
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {z} from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';
const ProfileForm = () => {
    const [isLoading, setisLoading] = useState(false)
    const form=useForm<z.infer<typeof EditProfileSchema>>({
        mode:"onChange",
        resolver:zodResolver(EditProfileSchema),
        defaultValues:{
            name:"",
            email:""
        }
    })
  return (
   <Form {...form}>
     <form className=' gap-6 flex flex-col'
     onSubmit={()=>{}}
     >
        <FormField disabled={isLoading}
        control={form.control}
        name='name'
        render={({field})=><FormItem>
            <FormLabel className='text-lg'>Name</FormLabel>
            <FormControl>
                <Input placeholder='Name' {...field}/>
            </FormControl>
            <FormMessage></FormMessage>
        </FormItem>}
        ></FormField>
         <FormField disabled={isLoading}
        control={form.control}
        name='email'
        render={({field})=><FormItem>
            <FormLabel className='text-lg'>Email</FormLabel>
            <FormControl>
                <Input placeholder='Email' {...field}
                type='email'
                disabled
                />
            </FormControl>
            <FormMessage></FormMessage>
        </FormItem>}
        ></FormField>
        <Button type='submit' className=' self-start hover:bg-[#2F006B] hover:text-white'>
            {
                isLoading?(
                    <>
                    <Loader2 className=' animate-spin mr-2 h-4 w-4'/>
                    Saving
                    </>
                ):(
                    'Save User Settings'
                )
            }
        </Button>
     </form>
   </Form>
  )
}

export default ProfileForm