import React from 'react'
import { BsChevronUp } from 'react-icons/bs'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function EditorFooter({handleSubmit}) {


  return (
    <div className='flex items-center space-x-4 mr-3'>


        {/* problems navigation thingy */}
        {/* <div className='flex items-center gap-4 flex-1 justify-center'>
						<div
							className='flex items-center justify-center rounded bg-slate-600 hover:bg-slate-700 h-6 w-6 cursor-pointer'
							onClick={() => handleProblemChange(false)}
						>
							<FaChevronLeft />
						</div>
						<Link
							href='/'
							className='flex items-center gap-2 font-normal max-w-[170px] text-blue-300 cursor-pointer'
						>
							<div>
								<BsList />
							</div>
							<p>Problem List</p>
						</Link>
						<div
							className='flex items-center justify-center rounded bg-slate-600 hover:bg-slate-700 h-6 w-6 cursor-pointer'
							onClick={() => handleProblemChange(true)}
						>
							<FaChevronRight />
						</div>
					</div> */}


        <button 
			className='px-3 py-1.5 text-sm font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-gray-600 hover:bg-gray-700 text-white rounded-lg'
			onClick={handleSubmit}
		>
          Run
        </button>
        <button 
			className='px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-white bg-green-700 hover:bg-green-600 rounded-lg'
			onClick={handleSubmit}
		>
          Submit
        </button>
      </div>
  )
}

export default EditorFooter