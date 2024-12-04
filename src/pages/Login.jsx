import React, { useState, useContext } from 'react'
import {motion} from 'framer-motion'
import axios from 'axios'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Footer from '../components/Footer/Footer';
import toast, { Toaster } from 'react-hot-toast';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(AuthContext);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            const res = await axios.post('http://localhost:4000/login', {
                username, password
            }, {
                withCredentials: true
            })
            console.log(res.data);
            

            const { firebaseUid } = res.data;

            const userData = {
                id: res.data.id,
                username: res.data.username,
                firebaseUid: res.data.firebaseUid
            }

            if(res.status === 200){
                setUser(userData);
                setLoggedIn(true);
                toast.success("Hey champ! Welcome back!", {icon: '🚀'});
            }
        }
        catch(e){
            console.log(e);
            toast.error("Error while logging in! Please try again!", {icon: '😢'});
        }
    }

    if(loggedIn){
        return <Navigate to='/' />
    }

  return (
    <div className='bg-gradient-to-r from-gray-800 to-black'>
    <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className=" w-full h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-gradient-to-r from-slate-800 to-black shadow-md rounded-lg">
        <h1 className=" text-3xl font-bold text-center mb-9 text-white">LogIn</h1>
        <form onSubmit={handleLogin}>
            <div className="mb-4">
            <label 
                className="block text-gray-400 mb-2" 
                htmlFor="username">
                    Enter Your UserName
            </label>
                <input 
                    className=" p-2 w-full text-white rounded-md bg-slate-700 focus:outline-none focus:ring-1 focus:ring-gray-800"
                    type="text" 
                    placeholder='johnDoe'
                    onChange={ev => {setUsername(ev.target.value)}}
                />
            </div>

            

            <div className="mb-4">
            <label 
                className="block text-gray-400 mb-2" 
                htmlFor="username">
                    Enter Your Password
            </label>
                <input 
                    className="bg-slate-700 text-white p-2 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
                    type="password" 
                    placeholder='******'
                    onChange={ev => {setPassword(ev.target.value)}}
                />
            </div>
            <motion.button type='submit' whileHover={{ scale: 1.01 }} className="mt-7 rounded-md w-full bg-gradient-to-r from-gray-900 to-gray-900 border-2 border-gray-800 text-white py-2">Login</motion.button>
        </form>
        </div>
    </motion.div>

    <Footer />
    </div>
  )
}

export default Login