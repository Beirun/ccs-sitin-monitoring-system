import React from 'react'
import TextField from '@/components/TextField'

const page = () => {
  return (
    <div className="flex flex-col bg-gray-900 w-screen h-screen justify-center items-center">
      <div className="bg-opacity-50 z-10 flex flex-col bg-gray-800 gap-4 xl:w-1/4 lg:w-1/3 md:w-2/5 sm:w-2/7 p-10 rounded-lg ">
      <form action="" className="flex flex-col gap-4 justify-center items-center">
            <TextField label={'Username'}/>
            <TextField label={'Password'}/>
            <button type="submit">Submit</button>
          </form>
        </div>
    </div>
  )
}

export default page