import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import welcome from '../assets/welcome.png'

function Read() {
  return (
    <>
    <div className='bg-gradient-to-r from-gray-800 to-black min-h-screen'>
        <img src={welcome} alt="" className='h-40' />
      <div className='container  px-4'>
        
        <p className='text-white text-base md:text-lg m-9 max-w-full'>
          Welcome to CodePulse, the ultimate platform that turns coding into an engaging and fun-filled adventure. Designed for aspiring developers and coding enthusiasts, CodePulse offers a gamified learning experience that challenges you to unlock new levels of coding expertise.
        </p>
      </div>

      <div className='container mx-auto px-4 mt-16 md:mt-20'>
        <h2 className='text-xl text-white font-semibold mb-4'>Here's what you need to do</h2>
        <ul className='list-disc text-white pl-5 space-y-2'>
          <li>Start with Level 1</li>
          <li>Complete all the problems of level 1.</li>
          <li>Your next level will be unlocked after completing all the problems of your current level!</li>
          <li>Enjoy your journey and share with others!</li>
        </ul>

        <div className='flex flex-col md:flex-row md:justify-center md:space-x-6 mt-20'>
        <Link to='/practice' className='block text-center'>
          <button className="bg-gradient-to-r from-gray-700 to-gray-800 border-2 border-gray-800 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300 w-72 ease-in-out">
            Get Started!
          </button>
          </Link>
        </div>
      </div>

      
    </div>
    <Footer />
    </>
  )
}

export default Read
