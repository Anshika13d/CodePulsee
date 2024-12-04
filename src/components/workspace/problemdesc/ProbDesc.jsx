import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firestore } from '../../../firebase/firebase';
import RectangleSkeleton from '../../skeletons/RectangleSkeleton';
import CircleSkeleton from '../../skeletons/CircleSkeleton';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { AuthContext } from '../../../context/AuthContext';


function ProbDesc({problem, _solved}) {
  const {currentProblem, loading, problemDifficultyClass} = useGetCurrentProblem(problem.id);

  const { solved } = useGetUsersDataOnProblem(problem.id);

  return (
    <div className='bg-gradient-to-r from-inherit to-gray-900' >
			{/* TAB */}
			<div className='flex h-11 w-full items-center pt-2 bg-gray-800 text-blue-200 overflow-x-hidden font-bold'>
				<div className={"bg-gray-800 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"}>
					Description
				</div>
			</div>

			<div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
				<div className='px-5'>
					{/* Problem heading */}
					<div className='w-full'>
						<div className='flex space-x-4'>
							<div className='flex-1 mr-2 text-lg text-white font-medium'>{problem?.title}</div>
						</div>
						{!loading && currentProblem && (
							<div className='flex items-center mt-3'>
							<div
								className={`${problemDifficultyClass} inline-block rounded-[21px] px-2.5 py-1 text-xs font-medium capitalize `}
							>
								{currentProblem.difficulty}
							</div>
							{(solved || _solved) && (
								<div className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-300 text-dark-green-s'>
								<BsCheck2Circle />
							</div>
							)}

							{/* Like and dislike functionality */}
							{/* <div 
								className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-gray-500'
								onClick={toggleLike}
							>
								{liked ? <AiFillLike className='text-blue-900' /> :
								<AiFillLike />}
								<span className='text-xs'>
									{currentProblem.likes}
								</span>
							</div>
							<div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-gray-500'>
								<AiFillDislike />
								<span className='text-xs'>
									{currentProblem.dislikes}
								</span>
							</div> 

							<div className='cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-gray-500 '>
								<TiStarOutline />
							</div> */}
						</div>
						)}

						{loading && (
							<div className='mt-3 flex space-x-2'>
								<RectangleSkeleton />
								<CircleSkeleton />
								
							</div>
						)}

						{/* Problem Statement(paragraphs) */}
						<div className='text-white text-sm'>
							<div
								dangerouslySetInnerHTML={{
									__html: problem.problemStatement,
								}}
							/>
						</div>

						{/* Examples */}
						<div className='mt-4'>
						{problem.examples.map((example, index) => (
							<div key={example.id}> 
								<p className='font-medium text-white'>Example {index + 1}: </p>
								{example.img && (
									<img src={example.img} alt='example' className='w-1/2 mt-6' />
								)}
								<div className="example-card">
									<pre>
										<strong className="text-white">
											Input: 
										</strong>
										{example.inputText}
										<br />
										<strong>Output: </strong>
										{example.outputText}
										<br />
										{
											example.explaination && (
												<>
													<strong>Explaination: </strong>
												</>
											)
										}
									</pre>
								</div>
							</div>
						))}
							
						</div>

						{/* Constraints */}
						<div className='my-5'>
							<div className='text-white text-sm font-medium'>Constraints:</div>
							<ul className='text-white ml-5 list-disc'>
								<div
									dangerouslySetInnerHTML={{
										__html: problem.constraints,
									}}	
								/>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default ProbDesc;

//a hook for getting the current problem
function useGetCurrentProblem(problemId) {
	const [currentProblem, setCurrentProblem] = useState(null);
	const [loading, setLoading] = useState(true);
	const [problemDifficultyClass, setProblemDifficultyClass] = useState("");

  	useEffect(() => {
		console.log("problemId: ", problemId);
		
		const getCurrentProblem = async () => {
			setLoading(true);

			const docRef = doc(firestore, "main_problems",problemId)
			
			
			const docSnap = await getDoc(docRef)
			console.log(docSnap.exists());
			
			if(docSnap.exists()){
				const problem = docSnap.data();
				setCurrentProblem({id:docSnap.id, ...problem})
				setProblemDifficultyClass(
					problem.difficulty == "Easy" 
					? "text-blue-300" 
					: problem.difficulty === "Medium" 
					? "text-yellow-200" 
					: "text-red-400"
				)
			}

			setLoading(false);
			// else{
			// 	console.log("nothing here");
				
			// }
		};
		getCurrentProblem()
	}, [problemId]);
	
	return {currentProblem, loading, problemDifficultyClass, setCurrentProblem};
}

//for getting the user data on the problem and adding like and dislike functionality
function useGetUsersDataOnProblem(problemId) {
	const [data, setData] = useState({ solved: false });
	const {user} = useContext(AuthContext);
  
	useEffect(() => {

	  const getUsersDataOnProblem = async () => {
		const currentUser = user;
		//console.log(user.firebaseUid);
		
		if (currentUser) {
		  const userRef = doc(firestore, "users", currentUser.firebaseUid);
		  
		  const userSnap = await getDoc(userRef);
		  

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
