import React, { useContext, useState } from 'react'
import { AiOutlineFullscreen, AiOutlineSetting } from 'react-icons/ai'
import EditorFooter from '../EditorFooter'
import { AuthContext } from '../../../../context/AuthContext';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import {problems} from '../../../../utils/problems'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../../../../firebase/firebase';
import { main_problems } from '../../../../utils/main_problem';

function PrefNav({ problem, setSuccess, userCode, setSolved }) {
  const {user} = useContext(AuthContext);
  // const [userCode, setUserCode] = useState(problem.starterCode);
  
  const { pid } = useParams();
  //console.log(userCode);
  

  const handleSubmit = async () => {
    if (!user) {
        toast.error("Please login to submit your code", { icon: '🔒', autoClose: 5000 });
        return;
    }
    

    try {
        userCode = userCode.slice(userCode.indexOf(problem.starterFunctionName));
        const cb = new Function(`return ${userCode}`)();

        //console.log(userCode);
        
        
        const sucess = main_problems[pid].handlerFunction(cb);

        if(sucess) {
          toast.success("Yay! you passes all the test cases", { icon:"🥳🙌" , position:"top-center" , autoClose: 7000 });
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 4000);

            const userRef = doc(firestore, "users", user.firebaseUid);
            await updateDoc(userRef, {
              solvedProblems: arrayUnion(pid),
            })

            setSolved(true);
        }
    } catch (e) {
        if(e.message.startsWith("AssertionError: expected [ +0, 2 ] to deeply equal [ +0, 1 ]")){
          toast.error("Oops one or more test cases failed", { icon: '❌', autoClose: 5000 });
        }
        else if(e.message.startsWith("AssertionError: expected undefined to deeply equal [ +0, 1 ]")){
          toast.error("Please write your code", { icon: '❌', autoClose: 5000 });
        }
        else{
          toast.error(e.message, "Error while running your code", { icon: '❌', autoClose: 5000 });
        }
    }
};

  return (
    <div className='flex items-center justify-between h-11 w-full bg-gray-800'>
      <div className='flex items-center text-white'>
        <button className='flex cursor-pointer items-center rounded focus:outline-none bg-gray-800 text-blue-200 hover:bg-gray-600 px-2 py-1.5 font-medium'>
          <div className='flex items-center px-1'>
            <div className='text-xs text-label-2 dark:text-dark-label-2'>JavaScript</div>
          </div>
        </button>
      </div>
      
      {/* <div className='flex items-center m-2'>
        <button className='preferenceBtn group'>
          <div className='h-4 w-4 text-gray-400 font-bold text-lg'>
            <AiOutlineFullscreen />
          </div>
        </button>
        <button className='preferenceBtn group'>
          <div className='h-4 w-4 text-gray-400 font-bold text-lg'>
            <AiOutlineSetting />
          </div>
        </button>
      </div> */}

      <EditorFooter handleSubmit={handleSubmit}/>
    </div>
  )
}

export default PrefNav
