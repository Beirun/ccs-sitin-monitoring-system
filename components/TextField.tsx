import React from 'react'

const TextField = ({label} : {label: string}) => {

  return (
    <div className="flex flex-col gap-2">
            <label htmlFor="idno">{label}</label>
            <input className="text-black p-2 rounded-md bg-opacity-0" type="text"/>
          </div>
  )
}

export default TextField