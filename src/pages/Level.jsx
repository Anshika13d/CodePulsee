import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import probs from '../components/problems/problems.js';
import YouTubeIcon from '@mui/icons-material/YouTube';
import YouTube from 'react-youtube';
import CloseIcon from '@mui/icons-material/Close';
import Footer from '../components/Footer/Footer.jsx';
import { problems } from '../utils/problems/index.js';
import { doc, getDoc, setDoc } from "firebase/firestore"; 
import {firestore} from '../firebase/firebase.js';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { BsCheckCircle } from "react-icons/bs";
import { AuthContext } from '../context/AuthContext.jsx';
import DoNotDisturbAltOutlinedIcon from '@mui/icons-material/DoNotDisturbAltOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';


function Level() {
  const LoadingSkeleton = () => {
    return (
      <div className='flex items-center space-x-12 mt-4 px-6'>
        <div className='w-6 h-6 shrink-0 rounded-full bg-gray-700'></div>
        <div className='h-4 sm:w-52  w-32  rounded-full bg-gray-700'></div>
        <div className='h-4 sm:w-52  w-32 rounded-full bg-gray-700'></div>
        <div className='h-4 sm:w-52 w-32 rounded-full bg-gray-700'></div>
        <span className='sr-only'>Loading...</span>
      </div>
    );
  };


  //id from the url
  const {id} = useParams();
  

  const[loading, setLoading] = useState(false);

  const[youtubePlayer, setYoutubePlayer] = useState({
    isOpen: false,
    videoId: '',
  });

  const solvedProblems = useSolvedProblems();
  //console.log(solvedProblems);
  
  
  // const [inputs, setInputs] = useState({
  //   id: '',
  //   title: '', 
  //   difficulty: '',
  //   videoId: '',
  //   order: '',
  //   link: '',
  //   likes: 0,
  //   dislikes: 0,
  // })


  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setInputs({ 
  //     ...inputs, 
  //     [e.target.name]: e.target.value });
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   //convert inputs.order to integer
  //   const newProblem = {
  //     ...inputs,
  //     order: parseInt(inputs.order)
  //   }
  //   await setDoc(doc(firestore, "main_problems", inputs.id), newProblem);
  //   alert("save to db")
  // }  

  //fetch problems from firebase
  const problems = useGetProblems(setLoading);
  const problems2 = useGetProblems2(setLoading);
  const problems3 = useGetProblems3(setLoading);
  const problems4 = useGetProblems4(setLoading);
  const problems5 = useGetProblems5(setLoading);

  return (
    <>
      <div className='bg-gradient-to-r from-gray-800 to-black min-h-screen'>
      
            
        <h1 className='text-4xl text-white text-center pt-12 pb-20'>Your Tasks</h1>
        <div className='w-full max-w-4xl mx-auto px-4'>
          
          <div className='flex justify-between mb-6 border-b-2 border-gray-500 text-white py-2 px-4'>
            <div className='w-1/2 text-lg'>Problems</div>
            <div className='w-1/4 text-right text-lg'>Status</div>
            <div className='w-1/4 text-center text-lg'>Solution</div>
          </div>
          <div className='flex flex-col gap-5 mt-2'>

          {loading ? (
  <div className='animate-pulse'> 
    {[...Array(5)].map((_, index) => (
      <LoadingSkeleton key={index} />
    ))}
  </div>
) : (
  <>
  {id === 'level1' ? (
    problems.map((problem) => (
      <div key={problem.id} className='flex justify-between border-b border-slate-600 py-2 px-4 hover:bg-gray-700 rounded-md'>
        <Link to={`/code/${problem.id}`} className='w-1/2 text-white'>{problem.title}</Link>
        <div className='w-1/4  flex flex-col items-end text-right'>
          {solvedProblems.includes(problem.id) ? (
            <CheckCircleOutlineOutlinedIcon className='text-green-500 w-12' />
          ) : (
            <DoNotDisturbAltOutlinedIcon className='text-red-800 w-12' />
          )}
        </div>
        <div className='w-1/4 text-center text-white'>
          {problem.videoId ? (
            <div>
              <YouTubeIcon
                className='h-7 cursor-pointer'
                onClick={() => setYoutubePlayer({ isOpen: true, videoId: problem.videoId })}
              />
            </div>
          ) : (
            <p>Coming soon...</p>
          )}
        </div>
      </div>
    ))
  ) : id === 'level2' ? (
    problems2.map((problem) => (
      <div key={problem.id} className='flex justify-between border-b border-slate-600 py-2 px-4 hover:bg-gray-700 rounded-md'>
        <Link to={`/code/${problem.id}`} className='w-1/2 text-white'>{problem.title}</Link>
        <div className='w-1/4  flex flex-col items-end text-right'>
          {solvedProblems.includes(problem.id) ? (
            <CheckCircleOutlineOutlinedIcon className='text-green-500 w-12' />
          ) : (
            <DoNotDisturbAltOutlinedIcon className='text-red-800 w-12' />
          )}
        </div>
        <div className='w-1/4 text-center text-white'>
          {problem.videoId ? (
            <div>
              <YouTubeIcon
                className='h-7 cursor-pointer'
                onClick={() => setYoutubePlayer({ isOpen: true, videoId: problem.videoId })}
              />
            </div>
          ) : (
            <p>Coming soon...</p>
          )}
        </div>
      </div>
    ))
  ) : id === 'level3' ? (
    problems3.map((problem) => (
      <div key={problem.id} className='flex justify-between border-b border-slate-600 py-2 px-4 hover:bg-gray-700 rounded-md'>
        <Link to={`/code/${problem.id}`} className='w-1/2 text-white'>{problem.title}</Link>
        <div className='w-1/4  flex flex-col items-end text-right'>
          {solvedProblems.includes(problem.id) ? (
            <CheckCircleOutlineOutlinedIcon className='text-green-500 w-12' />
          ) : (
            <DoNotDisturbAltOutlinedIcon className='text-red-800 w-12' />
          )}
        </div>
        <div className='w-1/4 text-center text-white'>
          {problem.videoId ? (
            <div>
              <YouTubeIcon
                className='h-7 cursor-pointer'
                onClick={() => setYoutubePlayer({ isOpen: true, videoId: problem.videoId })}
              />
            </div>
          ) : (
            <p>Coming soon...</p>
          )}
        </div>
      </div>
    ))
  ) : id === 'level4' ? (
    problems4.map((problem) => (
      <div key={problem.id} className='flex justify-between border-b border-slate-600 py-2 px-4 hover:bg-gray-700 rounded-md'>
        <Link to={`/code/${problem.id}`} className='w-1/2 text-white'>{problem.title}</Link>
        <div className='w-1/4  flex flex-col items-end text-right'>
          {solvedProblems.includes(problem.id) ? (
            <CheckCircleOutlineOutlinedIcon className='text-green-500 w-12' />
          ) : (
            <DoNotDisturbAltOutlinedIcon className='text-red-800 w-12' />
          )}
        </div>
        <div className='w-1/4 text-center text-white'>
          {problem.videoId ? (
            <div>
              <YouTubeIcon
                className='h-7 cursor-pointer'
                onClick={() => setYoutubePlayer({ isOpen: true, videoId: problem.videoId })}
              />
            </div>
          ) : (
            <p>Coming soon...</p>
          )}
        </div>
      </div>
    ))
  ): 
  (
    problems5.map((problem) => (
      <div key={problem.id} className='flex justify-between border-b border-slate-600 py-2 px-4 hover:bg-gray-700 rounded-md'>
        <Link to={`/code/${problem.id}`} className='w-1/2 text-white'>{problem.title}</Link>
        <div className='w-1/4  flex flex-col items-end text-right'>
          {solvedProblems.includes(problem.id) ? (
            <CheckCircleOutlineOutlinedIcon className='text-green-500 w-12' />
          ) : (
            <DoNotDisturbAltOutlinedIcon className='text-red-800 w-12' />
          )}
        </div>
        <div className='w-1/4 text-center text-white'>
          {problem.videoId ? (
            <div>
              <YouTubeIcon
                className='h-7 cursor-pointer'
                onClick={() => setYoutubePlayer({ isOpen: true, videoId: problem.videoId })}
              />
            </div>
          ) : (
            <p>Coming soon...</p>
          )}
        </div>
      </div>
    ))
  )
  }
</>

)}

            
              

          </div>
        </div>
      </div>

      {/* YouTube Player */}
      {youtubePlayer.isOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='bg-black bg-opacity-75 w-full h-full absolute' 
            onClick={() => setYoutubePlayer({ isOpen: false, videoId: '' })} ></div>
          <div className='relative z-50 w-full max-w-4xl p-6'>
              <CloseIcon 
                className='absolute top-5 right-0 text-white cursor-pointer'
                onClick={() => setYoutubePlayer({ isOpen: false, videoId: '' })} 
              />
            <div className='relative'>
              
              <YouTube videoId={youtubePlayer.videoId} loading='lazy' iframeClassName='w-full min-h-[450px]' />
            </div>
          </div>
        </div>
      )}

      {/* temp form */}
      {/* <form className='p-6 flex flex-col max-w-sm gap-3' onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder='problem id' name='id' />
        <input onChange={handleChange} type="text" placeholder='title' name='title' />
        <input onChange={handleChange} type="text" placeholder='difficulty' name='difficulty' />
        {/* <input onChange={handleChange} type="text" placeholder='category' name='category' /> 
        <input onChange={handleChange} type="text" placeholder='order' name='order' />
        <input onChange={handleChange} type="text" placeholder='videoId?' name='videoId' />
        <input onChange={handleChange} type="text" placeholder='link' name='link' />
        <button type='submit' className='bg-white'>save to db</button>
      </form> */}
      
<Footer />
      
    </>
  );
}

function useGetProblems(setLoading) {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const getProblems = async () => {
      setLoading(true);
      const q = query(collection(firestore, "problems"), orderBy("order", "asc"));
      const querySnapshot = await getDocs(q);
      const tmp = [];
      querySnapshot.forEach((doc) => {
        tmp.push({ id: doc.id, ...doc.data() });
      });
      setProblems(tmp);
      setLoading(false);
    };

    getProblems();
  }, [setLoading]);

  return problems;
}

function useGetProblems2(setLoading) {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const getProblems = async () => {
      setLoading(true);
      const q = query(collection(firestore, "level2_problems"), orderBy("order", "asc"));
      const querySnapshot = await getDocs(q);
      const tmp = [];
      querySnapshot.forEach((doc) => {
        tmp.push({ id: doc.id, ...doc.data() });
      });
      setProblems(tmp);
      setLoading(false);
    };

    getProblems();
  }, [setLoading]);

  return problems;
}

function useGetProblems3(setLoading) {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const getProblems = async () => {
      setLoading(true);
      const q = query(collection(firestore, "level3_problems"), orderBy("order", "asc"));
      const querySnapshot = await getDocs(q);
      const tmp = [];
      querySnapshot.forEach((doc) => {
        tmp.push({ id: doc.id, ...doc.data() });
      });
      setProblems(tmp);
      setLoading(false);
    };

    getProblems();
  }, [setLoading]);

  return problems;
}

function useGetProblems4(setLoading) {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const getProblems = async () => {
      setLoading(true);
      const q = query(collection(firestore, "level4_problems"), orderBy("order", "asc"));
      const querySnapshot = await getDocs(q);
      const tmp = [];
      querySnapshot.forEach((doc) => {
        tmp.push({ id: doc.id, ...doc.data() });
      });
      setProblems(tmp);
      setLoading(false);
    };

    getProblems();
  }, [setLoading]);

  return problems;
}

function useGetProblems5(setLoading) {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const getProblems = async () => {
      setLoading(true);
      const q = query(collection(firestore, "level5_problems"), orderBy("order", "asc"));
      const querySnapshot = await getDocs(q);
      const tmp = [];
      querySnapshot.forEach((doc) => {
        tmp.push({ id: doc.id, ...doc.data() });
      });
      setProblems(tmp);
      setLoading(false);
    };

    getProblems();
  }, [setLoading]);

  return problems;
}


export default Level;

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