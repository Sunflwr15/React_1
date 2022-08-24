import React from 'react'
import Button from './Button'

function Card({title, body, createdAt,id ,}) {
  return (
    <div className='border p-5 h-72 w-full shadow-md rounded-lg space-y-2'>
    <div className="h-1/5">
    <h5 className='text-xl uppercase'>{title}</h5>
    <p className='text-xs italic'>{createdAt}</p>
    </div>
    <div className='text-justify h-3/5'>{body}</div>
    <div className='grid grid-cols-2 gap-5'>
        <Button
        value={id}
        type="button"

        title={"Delete"}
        bg="red"
        />
        <Button value={id} title='Arsipkan' bg='blue' />
    </div>
    </div>
    
  );
}

export default Card