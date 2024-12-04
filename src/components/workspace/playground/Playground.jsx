import React, { useState, useEffect, useContext } from 'react';
import PrefNav from './prefNav/PrefNav';
import Split from 'react-split';
import CodeMirror from '@uiw/react-codemirror';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { javascript } from '@codemirror/lang-javascript';
import '../../../styles/globals.css';
import EditorFooter from './EditorFooter';
import { toast } from 'react-toastify'; // Ensure you have this installed and configured
import { use } from 'chai';
import { AuthContext } from '../../../context/AuthContext';

function Playground({ problem, setSuccess, setSolved }) {
    const [activeTestCaseId, setActiveTestCaseId] = useState(0);
    let [userCode, setUserCode] = useState(problem.starterCode);
    //console.log(userCode);
    const {user} = useContext(AuthContext);
    
    useEffect(() => {
        const code = localStorage.getItem(`code-${problem.id}`);
        if(user){
            setUserCode(code ? JSON.parse(code) : problem.starterCode);
        }
        else{
            setUserCode(problem.starterCode);
        }
    },[problem.id, user, problem.starterCode]);

    const onChange = (value) => {
        setUserCode(value);
        localStorage.setItem(`code-${problem.id}`, JSON.stringify(value));
    };

    return (
        <div className='flex flex-col relative bg-custom-bg pb-10 overflow-x-hidden'>
            <PrefNav problem={problem} setSuccess={setSuccess} userCode={userCode} setSolved={setSolved} />

            <Split
                className="h-[calc(100vh-94px)]"
                direction='vertical'
                sizes={[60, 40]}
                minSize={60}
            >
                <div className="w-full overflow-auto">
                    <CodeMirror
                        value={userCode}
                        theme={tokyoNight}
                        onChange={onChange}
                        extensions={[javascript()]}
                        style={{ fontSize: 16 }}
                    />
                </div>

                <div className='w-full px-5 overflow-auto'>
                    <div className='flex h-10 items-center space-x-6'>
                        <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                            <div className='text-sm font-medium leading-5 text-white'>
                                Testcases
                            </div>
                            <hr className='absolute bottom-0 h-0.5 w-16 rounded-full border-none bg-white' />
                        </div>
                    </div>

                    <div className='flex'>
                        {problem.examples.map((example, index) => (
                            <div className='mr-2 items-start text-white mt-2'
                                key={example.id}
                                onClick={() => setActiveTestCaseId(index)}>
                                <div className='flex flex-wrap items-center gap-x-4'>
                                    <div className={`font-medium items-center transition-all focus:outline-none inline-flex bg-gray-700 hover:bg-gray-800 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap 
                                    ${activeTestCaseId === index ? 'bg-gray-800' : 'text-gray-400'}
                                        `}>Case {index + 1}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='font-semibold'>
                        <p className='text-sm font-medium mt-4 text-white'>Input:</p>
                        <div className='w-full cursor-pointer rounded-lg border px-3 py-[10px] bg-gray-800 border-transparent text-white mt-2'>
                            {problem.examples[activeTestCaseId].inputText}
                        </div>

                        <p className='text-sm font-medium mt-4 text-white'>Output:</p>
                        <div className='w-full cursor-pointer rounded-lg border px-3 py-[10px] bg-gray-800 border-transparent text-white mt-2'>
                            {problem.examples[activeTestCaseId].outputText}
                        </div>
                    </div>
                </div>
            </Split>
        </div>
    );
}

export default Playground;
