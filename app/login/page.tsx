import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col bg-gray-900 w-screen h-screen justify-center items-center">
        <div>
          <form action="" className="flex flex-col gap-4 text-red">
            <div>
              <label htmlFor="username" className='text-white'>Username</label>
              <input type="text" name="username" id="username" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
    </div>
  )
}

export default page