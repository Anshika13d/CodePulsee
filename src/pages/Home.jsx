import React from 'react';
import faang from '../assets/faang.png';
import { TypeAnimation } from 'react-type-animation';
import codeEditor from '../assets/codeimg.jpeg';
import CodeIcon from '@mui/icons-material/Code';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import home from '../assets/home.png';

function Home() {
  return (
    <div className='bg-gradient-to-r from-gray-800 to-black'>
      <div className='flex flex-col items-center justify-center min-h-screen p-4  '>
        <img src={home} className='w-36' alt="" />
        <div className='mb-8 text-center'>
          <TypeAnimation
            className='text-white text-3xl md:text-5xl'
            sequence={[
              'Want To Become Better Than Yesterday?',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <Link to='/practice'>
        <button className='transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-2xl h-14 py-2 px-4 w-60 text-white bg-gradient-to-r from-gray-700 to-gray-800 border-2 border-gray-800'>
          Start Your Journey Now!
        </button>
        </Link>
      </div>

      <div className='flex items-center justify-center'>
        <img className='opacity-30 w-full max-w-xs md:max-w-md lg:max-w-lg' src={faang} alt="FAANG" />
      </div>

      

      <div className="mb-40">
        <div className="text-center text-white mt-24 lg:mt-36 md:mt-32 sm:mt-28">
          <p className="mb-12 text-3xl sm:text-4xl md:text-5xl font-bold">Crack MAANG companies now!</p>
          <p className="text-lg sm:text-xl md:text-2xl">Join our coding platform and master the skills to excel in your tech career.</p>
          <div className="mt-16 sm:mt-24 md:mt-28 flex flex-wrap justify-center gap-10 md:gap-20">
            <div className="relative w-20 h-16 flex hover:shadow-glow-purple rounded-lg justify-center items-center border border-gray-500 group">
              <CodeIcon className="w-10 sm:w-12 md:w-16 lg:w-20" />
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black text-white text-sm rounded-lg px-2 py-1">
                Code
              </span>
            </div>
            <div className="relative w-20 h-16 flex hover:shadow-glow-purple rounded-lg justify-center items-center border border-gray-500 group">
              <LightbulbIcon className="w-10 sm:w-12 md:w-16 lg:w-20" />
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black text-white text-sm rounded-lg px-2 py-1">
                Learn
              </span>
            </div>
            <div className="relative w-20 h-16 flex hover:shadow-glow-purple rounded-lg justify-center items-center border border-gray-500 group">
              <DriveFileRenameOutlineIcon className="w-10 sm:w-12 md:w-16 lg:w-20" />
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black text-white text-sm rounded-lg px-2 py-1">
                Practice
              </span>
            </div>
            <div className="relative w-20 h-16 flex hover:shadow-glow-purple rounded-lg justify-center items-center border border-gray-500 group">
              <ArrowUpwardIcon className="w-10 sm:w-12 md:w-16 lg:w-20" />
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black text-white text-sm rounded-lg px-2 py-1">
                Upskill
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gradient-to-r from-gray-800 to-black mb-40">
  <h2 className="text-white text-4xl text-center mb-12">See What Our Users Say...</h2>
  <div className="flex flex-wrap justify-center gap-8">
    <div className="bg-gray-900 border border-gray-600 rounded-lg w-80 p-6">
      <div className="text-white flex items-center space-x-4 mb-4">
        <AccountCircleOutlinedIcon className="h-10 w-10" />
        <p className="text-xl font-semibold">Halena</p>
      </div>
      <p className="text-gray-300">"CodePulse has helped me a lot in my coding journey. I have been able to solve problems more efficiently than before."</p>
    </div>
    <div className="bg-gray-900 border border-gray-600 rounded-lg w-80 p-6">
      <div className="text-white flex items-center space-x-4 mb-4">
        <AccountCircleOutlinedIcon className="h-10 w-10" />
        <p className="text-xl font-semibold">Aemond</p>
      </div>
      <p className="text-gray-300">"The resources and community at CodePulse are top-notch. I've grown so much as a developer."</p>
    </div>
    <div className="bg-gray-900 border border-gray-600 rounded-lg w-80 p-6">
      <div className="text-white flex items-center space-x-4 mb-4">
        <AccountCircleOutlinedIcon className="h-10 w-10" />
        <p className="text-xl font-semibold">Alicent</p>
      </div>
      <p className="text-gray-300">"I love the challenges and the support I get from the team. It's an amazing platform for learning and growth."</p>
    </div>
  </div>
</div>


        <div>
          <div >
            <h1 className='text-white font-bold text-3xl text-center mb-16'>Get Started!</h1>
          </div>
          
          <div className="hidden justify-center mb-40 md:flex space-x-28">
          <Link to='/signup'>
            <button className="transition-all duration-300 ease-in-out hover:shadow-glow-purple  border-none rounded-lg w-56 h-16 bg-gradient-to-r from-gray-700 to-gray-800 border-2 border-gray-800 text-white text-center">
              Signup
            </button>
            </Link>
            <Link to='/login'>
            <button className="transition-all duration-300 ease-in-out hover:shadow-glow-purple  border-none rounded-lg w-56 h-16 bg-gradient-to-r from-gray-700 to-gray-800 border-2 border-gray-800 text-white ">
              Login
            </button>
            </Link>
            </div>
        </div>

        <Footer />

    </div>
  );
}

export default Home;
