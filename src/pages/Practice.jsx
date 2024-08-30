import React, { useContext, useEffect, useState } from 'react';
import {Link, Routes, Route, useParams} from 'react-router-dom'
import Level from './Level';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';
import LockedBtn from '../components/LockedBtn';
import { AuthContext } from '../context/AuthContext';
import robot from '../assets/robot.png'
import Footer from '../components/Footer/Footer';
import HourglassTopOutlinedIcon from '@mui/icons-material/HourglassTopOutlined';
import welcome from '../assets/welcome.png';

//import all leveles
import {level5_probs} from '../utils/level5_probs/index.js';
import {level4_probs} from '../utils/level4_probs/index.js';
import {level3_probs} from '../utils/level3_probs/index.js';
import {level2_probs} from '../utils/level2_probs/index.js';
import { problems } from '../utils/problems/index.js';
import { collection, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore';
import { firestore } from '../firebase/firebase.js';
import ShowCertificate from './ShowCertificate.jsx';


//to fetch the solved problems of the user
function useSolvedProblems() {

  const[ solvedProblems, setSolvedProblems ] = useState([]);
  const {user} = useContext(AuthContext)  
  

  useEffect(() => {
    const getSolvedProblems = async () => {
      const userRef = doc(firestore, "users", user.firebaseUid);

      const userDoc = await getDoc(userRef);
      
      if(userDoc.exists()){
        setSolvedProblems(userDoc.data().solvedProblems);
      }
    }

    if(user){
      getSolvedProblems();
    }
    if(!user) {
      setSolvedProblems([]);
    }
  }, [user]);

  return solvedProblems;
}
 
function Practice() {

  const [loading, setLoading] = useState(true); // Loading state
  const [lock1, setLock1] = useState(false)
  const [lock2, setLock2] = useState(true)
  const [lock3, setLock3] = useState(true)
  const [lock4, setLock4] = useState(true)
  const [lock5, setLock5] = useState(true)
  const {setUser, user} = useContext(AuthContext);
  const [surprise, setSurprise] = useState(true);
  const solvedProblems = useSolvedProblems();
  const [certVisible, setCertVisible] = useState(false);

  const handleCongrats = () => {
    setCertVisible(true);
  }

  const handleCloseCert = () => {
    setCertVisible(false);
  };


  useEffect(() => {
    const checkLocks = async () => {
      setLoading(true);
      if (user && solvedProblems.length > 0) {
        const unlockLevel2 = await checkIfLevelIsUnlocked(problems, user.firebaseUid);
        setLock2(!unlockLevel2);
  
        const unlockLevel3 = await checkIfLevelIsUnlocked(level2_probs, user.firebaseUid);
        setLock3(!unlockLevel3);
  
        const unlockLevel4 = await checkIfLevelIsUnlocked(level3_probs, user.firebaseUid);
        setLock4(!unlockLevel4);
  
        const unlockLevel5 = await checkIfLevelIsUnlocked(level4_probs, user.firebaseUid);
        setLock5(!unlockLevel5);

        const surpriseLevel = await checkIfLevelIsUnlocked(level5_probs, user.firebaseUid);
        setSurprise(!surpriseLevel);
      }
      setLoading(false);
    };
  
    checkLocks();
  }, [user, solvedProblems]);

  if (loading) {
    return (
      <div className='bg-gradient-to-r from-gray-800 to-black min-h-screen flex flex-col justify-center items-center'>
        <HourglassTopOutlinedIcon className='text-white text-9xl mb-4'/>
        <p className='text-white text-2xl'>Just a sec... fetching your data</p>
      </div>
    );
  }

  if(!user){
    return (
      <div className='bg-gradient-to-r from-gray-800 to-black min-h-screen flex flex-col justify-center items-center'>
        <div className='mb-8'>
          <img src={robot} className='w-32 sm:w-40' alt="Robot" />
        </div>
        <div className="w-full flex flex-col items-center justify-center px-4">
          <h1 className='text-2xl sm:text-4xl mb-8 text-center text-white'>
            Hey! You need to Login first...
          </h1>
          <div className='flex flex-col sm:flex-row sm:space-x-12 space-y-4 sm:space-y-0 justify-center'>
            <Link to='/login'>
              <button className='bg-gradient-to-r from-gray-700 to-gray-800 h-12 w-40 transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-lg text-white font-bold'>
                Login
              </button>
            </Link>
            <Link to='/signup'>
              <button className='bg-gradient-to-r from-gray-700 to-gray-800 h-12 w-40 transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-lg text-white font-bold'>
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>

    )
  }

  return (
    <>
    
    <div className='min-h-screen bg-gradient-to-r from-gray-800 to-black flex flex-col items-center justify-center mb-10'>
    
      
      <p className='text-white mt-7 text-4xl text-center  mb-8'>Unlock Each Level of Your Success!</p>

      <div>
      <Link to='/read'>
        <button className='transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-2xl h-10 py-2 px-4 w-60 text-white bg-gradient-to-r from-gray-800 to-black'>
          Read Instructions
        </button>
        </Link>
      </div>

      <div className='container w-1/2 items-start  mb-14 mt-9'>
        <Link to={`/level/${problems.id}`}>   
        <button 
            className='bg-gradient-to-r from-gray-700 to-gray-800 h-12 w-1/2 transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-lg text-white font-bold'>
              Level 1
          </button> 
          
        </Link>
      </div>

      <div className='container w-1/2  flex justify-end  mb-14'>
      {lock2 == true? 
          <LockedBtn/> :
          <Link to={`/level/${level2_probs.id}`}> 
                          <button 
                          className='bg-gradient-to-r from-gray-700 to-gray-800 h-12 w-1/2  transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-lg text-white font-bold'>
                            Level 2
                        </button>
                        </Link>
}
      </div>

      <div className='container w-1/2 flex items-start  mb-14'>
      {lock3 == true? <LockedBtn/> :  
      <Link to={`/level/${level3_probs.id}`}> 
                                      <button className='bg-gradient-to-r from-gray-700 to-gray-800 h-12 w-1/2 transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-lg text-white font-bold'>
                                        Level 3 
                                      </button>
                                      </Link> 
      }
      </div>

      <div className='container w-1/2  flex justify-end  mb-14'>
        {lock4? <LockedBtn /> : 
            <Link to={`/level/${level4_probs.id}`}>
                            <button 
                                  className='bg-gradient-to-r from-gray-700 to-gray-800 h-12 w-1/2  transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-lg text-white font-bold'>
                                     Level 4 
                                </button> 
                                </Link>
        } 
      </div>
      <div className='container w-1/2  items-start  mb-14 mt-9'>
      {lock5? <LockedBtn/> : <Link to={`/level/${level5_probs.id}`}>
                              <button className='bg-gradient-to-r from-gray-700 to-gray-800 h-12 w-1/2 transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-lg text-white font-bold'>
                                Level 5
                              </button>
                            </Link>
      }
        
      </div>

      <div className='container w-1/2  items-start  mb-14 mt-9'>
      {surprise? 
          <div className="relative inline-block h-12 w-full"> 
          <button 
              className='relative bg-gradient-to-r from-gray-700 to-gray-800 h-full w-full overflow-hidden blur-sm rounded-lg text-white font-bold'
              
              >
              <p 
                  className='z-10 flex justify-center items-center h-full text-white font-bold relative'> 
                  Congratulations! You have Unlocked the Surprise Level!
              </p>
          </button>
          <div className="absolute inset-0 flex justify-center items-center">
          <LockIcon className="z-20 text-white" />
        </div>
      </div>
                      :
                      <>
              <button
                className='bg-gradient-to-r from-gray-700 to-gray-800 h-16 w-full transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-lg text-white font-bold'
                onClick={handleCongrats}>
                Congratulations You have Unlocked Your Reward!!! 🥳🙌
              </button>

              {certVisible && <ShowCertificate onClose={handleCloseCert} />}
            </>
      }
        
      </div>

      {/* <div className='container w-1/2  flex justify-end  mb-14'>
        {lock? 
          <LockedBtn/> : <button 
                            className='bg-gradient-to-r from-gray-700 to-gray-800 h-12 w-1/2  transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-lg text-white font-bold'>
                                <Link to='/level'>    Level 6  </Link>
                          </button>
        }
        
          
      </div>
      <div className='container w-1/2  items-start  mb-14'>
          {lock? <LockedBtn/> : <Link to='/level'>
                              <button className='bg-gradient-to-r from-gray-700 to-gray-800 h-12 w-1/2 transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-lg text-white font-bold'>
                                  
                                    Level 7
                                
                                </button>
                                </Link>
          }
      </div>
      <div className='container w-1/2  flex justify-end  mb-14'>
        {lock? <LockedBtn/> : <button 
                                className='bg-gradient-to-r from-gray-700 to-gray-800 h-12 w-1/2 transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-lg text-white font-bold'>
                                  <Link to='/level'>    Level 8   </Link>
                            </button>
        }
      </div> */}
    </div>
    

      <Routes>
        <Route path="/level" element={<Level />} />
      </Routes>

      <Footer />

</>
  );
}

export default Practice;


function useGetUsersDataOnProblem(problemId) {
	const [data, setData] = useState({ solved: false });
	const {user} = useContext(AuthContext);

	console.log("Current User: ", user);
  
	useEffect(() => {

	  const getUsersDataOnProblem = async () => {
		const currentUser = user;
		//console.log(user.firebaseUid);
		
		if (currentUser) {
		  const userRef = doc(firestore, "users", currentUser.firebaseUid);
		  
		  const userSnap = await getDoc(userRef);

		  console.log("User Reference: ", userRef);
		  console.log("User Snapshot: ", userSnap);
		  

		  if (userSnap.exists()) {
			const data = userSnap.data();
			const { solvedProblems } = data;
			setData({
			  solved: solvedProblems.includes(problemId),
			});
		  }
		}
	  };
  
	  getUsersDataOnProblem();
	  return () => setData({ solved: false });
	}, [problemId, user]);
  
	return { ...data, setData };
}


const checkIfLevelIsUnlocked = async (levelProblems, userId) => {
  const userRef = doc(firestore, "users", userId);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const data = userSnap.data();
    const { solvedProblems } = data;
    console.log("Solved Problems: ", solvedProblems);
    

    // Convert levelProblems object to an array of problem objects with an id property
    const problemArray = Object.keys(levelProblems).filter(key => key !== "id");
    console.log(problemArray);

    const res = problemArray.every(problemId => solvedProblems.includes(problemId));
    
    

    return res;
  }

  return false;
};

