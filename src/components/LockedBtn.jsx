import React from 'react'
import LockIcon from '@mui/icons-material/Lock';

function LockedBtn() {
  return (
    <div className="relative inline-block h-12 w-1/2"> 
        <button 
            className='relative bg-gradient-to-r from-gray-700 to-gray-800 h-full w-full overflow-hidden blur-sm rounded-lg text-white font-bold'
            >
            <p 
                className='z-10 flex justify-center items-center h-full text-white font-bold relative'> 
                Level 2 
            </p>
        </button>
        <div className="absolute inset-0 flex justify-center items-center">
        <LockIcon className="z-20 text-white" />
      </div>
    </div>
  )
}

export default LockedBtn