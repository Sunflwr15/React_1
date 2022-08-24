import React from 'react'

function Input({title, error = false ,...props}) {
  return (
    <div className='flex flex-col relative'>
        <input 
        {...props}
        value={title}
        className={`${
            error ? "border-red-300 border-2" : ""
        }border w-full rounded-md px-2 py-1`}
        />
        {error && <p className='text-red-500 text-sm italic'>isi Input tidak sesuai</p>}
    </div>
  )
}

export default Input