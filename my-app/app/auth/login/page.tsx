import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <main className='w-full pt-[5.6rem]'>
      
      <div className=' flex flex-col gap-3'>
      <h4 className='font-bold text-[1.8rem] text-[#F5F5F6]'>Welcome back</h4>
      <p className='text-[#94969C] text-base font-normal'>Welcome back! Please enter your details.</p>
      </div>
          <div className='w-full flex justify-between items-center'>
<Button></Button>
<Button></Button>
          </div>
    
    </main>
  )
}
export default page