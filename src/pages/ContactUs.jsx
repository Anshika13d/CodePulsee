import React, { useState } from 'react'
import {motion} from 'framer-motion'
import emailJs from 'emailjs-com'
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer/Footer'

function ContactUs() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const notify = () => toast.success('Message sent successfully!')

  const sendEmail = async (e) => {
    e.preventDefault()

    emailJs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_PUBLIC_KEY
      )
    .then((res) => {
      console.log('message sent');
    }, (err) => {
      console.log("error aya - ", err);
    })
  }

  return (
    <div className='bg-gradient-to-r from-gray-800 to-black'>
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="w-full h-screen flex items-center justify-center"> 
        <div className="w-full max-w-md p-8 bg-gradient-to-r from-slate-800 to-black shadow-md rounded-lg">
        <h1 className=" text-3xl font-bold text-white text-center mb-6">Contact Us</h1>
          <form onSubmit={sendEmail}>
            <div className="mb-4">
              <label 
                className="block text-gray-400 mb-2" 
                htmlFor="username">
                Enter Your usename
              </label>
              <input 
                type="text" 
                className="text-white rounded-md bg-slate-700 p-2 w-full focus:outline-none focus:ring-1 focus:ring-gray-800"
                placeholder='jonDoe'
                name='user_name'
                value={username}
                onChange={e => {setUsername(e.target.value)}}
              />
            </div>

            <div className="mb-4">
              <label 
                className="block text-gray-400 mb-2" 
                htmlFor="username">
                Enter Your Email
              </label>
              <input 
                type="text" 
                className="text-white rounded-md bg-slate-700 p-2 w-full focus:outline-none focus:ring-1 focus:ring-gray-800"
                placeholder='jonDoe@gmail.com'
                name='user_email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label 
                className="block text-gray-400 mb-2" 
                htmlFor="username">
                Message
              </label>
              <textarea
                className="text-white rounded-md bg-slate-700 p-2 w-full focus:outline-none focus:ring-1 focus:ring-gray-800"
                name="message" rows="5"
                placeholder='Write your message here...'
                onChange={e => setMessage(e.target.value)}
                value={message}
                >
              </textarea>
              
              <motion.button
                type='submit'
                onClick={notify}
               whileHover={{ scale: 1.01 }} className="mt-5 bg-gradient-to-r from-gray-900 to-gray-900 border-2 border-gray-800 rounded-md w-full  text-white py-2"> Submit</motion.button>
            </div>
          </form>
        </div>
      </motion.div>

      <Footer />
    </div>
  )
}

export default ContactUs