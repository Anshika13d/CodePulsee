import React from 'react'

function CircleSkeleton() {
  return (
    <div className='space-y-2.5 animate-pulse max-w-lg'>
        <div className='flex items-center w-full space-x-2'>
            <div className='h-6 w-6 rounded-full bg-slate-600'>

            </div>
        </div>
    </div>
  )
}

export default CircleSkeleton