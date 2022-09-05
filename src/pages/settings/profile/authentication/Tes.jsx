import React from 'react'
import {useNavigate} from 'react-router-dom'

function Tes() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/" ,{replace: true})
    }
  return (
    <div >
        <img className='shadow-2xl' src="https://i.pinimg.com/564x/eb/b8/05/ebb805fa72c6e3328f9f04c0f3069c8a.jpg" alt="" />
        <button onClick={handleClick} className="p-3 bg-violet-500 hover:bg-violet-400 text-white rounded-xl">Home</button>
    </div>
  )
}

export default Tes