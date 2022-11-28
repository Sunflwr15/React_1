import React from 'react'

function Button({title, ...props}) {
  return (
    <button {...props} className='px-5 py-3 w-full border-2 border-black bg-[#FFA114]'>
        {title}
    </button>
  )
}

export default Button