import React, { useContext } from 'react'
import Footer from '../components/Footer/Footer'
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function About() {
  const {user, setUser} = useContext(AuthContext);
  return (

    
    <div className='bg-gradient-to-r from-gray-800 to-black'>
      <div>
        
        <h1 className='text-center text-white text-4xl pt-8 pb-12'>About</h1>
        <p className='text-white text-center ml-52 mr-52'>Welcome to CodePulse, the ultimate platform that turns coding into an engaging and fun-filled adventure. Designed for aspiring developers and coding enthusiasts, CodePulse offers a gamified learning experience that challenges you to unlock new levels of coding expertise.

With each level, you'll face a series of coding challenges that will test your skills, knowledge, and problem-solving abilities. As you progress through the levels, you'll gain confidence and proficiency, all while enjoying the thrill of conquering new milestones.

CodePulse isn't just a learning platform—it's a journey. Whether you're a beginner eager to take your first steps into the world of coding or an experienced coder looking to refine your skills, CodePulse provides a structured, rewarding pathway to mastering the art of code.

Start your journey with CodePulse today and discover a new way to learn, grow, and succeed in the world of coding. Ready to unlock your next level?

</p>
      </div>


      <div className='mt-20'>

          <div className="hidden justify-center mb-40 md:flex space-x-28">
          <Link to='/practice'>
            <button className="transition-all duration-300 ease-in-out hover:shadow-glow-purple  border-none rounded-lg w-56 h-16 bg-gradient-to-r from-gray-700 to-gray-800 border-2 border-gray-800 text-white text-center">
              Get Started!
            </button>
            </Link>
            <Link to='/signup'>
            <button className="transition-all duration-300 ease-in-out hover:shadow-glow-purple  border-none rounded-lg w-56 h-16 bg-gradient-to-r from-gray-700 to-gray-800 border-2 border-gray-800 text-white ">
              Learn more
            </button>
            </Link>
            </div>
        </div>

      <Footer />
    </div>
  )
}

export default About