import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import {motion} from 'framer-motion'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer/Footer';
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function Signup() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sign, setSign] = useState(false);

    const signupUser = async (e) => {
        e.preventDefault();
    
        const loadingToastId = toast.loading('Signing you up! Please wait...');
    
        try {
            // Firebase Authentication Sign Up
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user.uid);
            
    
            // Prepare user data to store in Firestore and MongoDB
            const userData = {
                uid: user.uid,
                email: user.email,
                displayName: username,
                createdAt: Date.now(),
                updatedAt: Date.now(),
                likedProblems: [],
                dislikedProblems: [],
                solvedProblems: [],
                starredProblems: [],
            };
            console.log(userData);
            
    
            // Store user data in Firebase Firestore
            try {
                await setDoc(doc(firestore, 'users', user.uid), userData);
            } catch (error) {
                console.error('Error writing to Firestore:', error);
            }
            
    
            // Store user data in your MongoDB database via your API
            await axios.post('http://localhost:4000/signup', {
                username,
                email,
                password,
                firebaseUid: user.uid // Send Firebase UID to MongoDB as well
            });
    
            toast.success('Welcome to CodePulse!', { icon: '😍' });
            setSign(true);
        } catch (e) {
            toast.error('Error while signing up! Please try again!', { icon: '😢' });
        } finally {
            toast.dismiss(loadingToastId);
        }
    };

    if(sign){
        return <Navigate to='/home' />
    }

  return (
    <div className='bg-gradient-to-r from-gray-800 to-black'>
    <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="w-full h-screen flex items-center justify-center">

        <div className="w-full max-w-md p-8 bg-gradient-to-r from-slate-800 to-black shadow-md rounded-lg">
        <h1 className=" text-3xl font-bold text-white text-center mb-6">Signup</h1>
        <form onSubmit={signupUser}>
            <div className="mb-4">
            <label 
                className="block text-gray-400 mb-2" 
                htmlFor="username">
                    Enter Your UserName
            </label>
                <input 
                    className="text-white rounded-md bg-slate-700 p-2 w-full focus:outline-none focus:ring-1 focus:ring-gray-800"
                    type="text" 
                    placeholder='jonDoe'
                    onChange={ev => {setUsername(ev.target.value)}}
                />
            </div>

            <div className="mb-4">
            <label 
                className="block text-gray-400 mb-2 " 
                htmlFor="username">
                    Enter Your Email
            </label>
                <input 
                    className="bg-slate-700 text-white p-2 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
                    type="email" 
                    placeholder='johnDoe@gmail.com'
                    onChange={ev => {setEmail(ev.target.value)}}
                />
            </div>

            <div className="mb-4">
            <label 
                className="block text-gray-400 mb-2" 
                htmlFor="username">
                    Set Your Password
            </label>
                <input 
                    className="bg-slate-700 text-white  p-2 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
                    type="password" 
                    placeholder='******'
                    onChange={ev => {setPassword(ev.target.value)}}
                />
            </div>
            <motion.button whileHover={{ scale: 1.01 }} className="mt-5 bg-gradient-to-r from-gray-900 to-gray-900 border-2 border-gray-800 rounded-md w-full  text-white py-2">Sign Up</motion.button>
        </form>
        </div>
    </motion.div>

    <Footer />
    </div>
  )
}

export default Signup