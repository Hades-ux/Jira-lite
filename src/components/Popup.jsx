import React from 'react'
import { FaX } from 'react-icons/fa6';

const Popup = ({isOpen, onClose, children}) => {
    if(!isOpen) return null;
  return (
    <div className='fixed inset-y-10 bg-white bg-opacity-40 w-[60rem] h-[45rem] rounded-md shadow-2xl z-50 border-2 border-gray-300'>

        <div className='w-full p-3 flex items-center justify-between border-b-2 border-gray-300'>
          <h1 className='text-2xl font-semibold text-gray-600'>Create Task</h1>
            <button 
            onClick={onClose}
            className=' text-gray-600 hover:text-red-600 text-xl cursor-pointer'>
                <FaX className='border border-gray-300 p-0.5 rounded-sm hover:border-red-600'/>
                </button>
        </div>
                {children}

    </div> 
  )
}

export default Popup