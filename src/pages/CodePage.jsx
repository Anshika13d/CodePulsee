import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Workspace from '../components/workspace/Workspace';
import { problems } from '../utils/problems';
import { level2_probs } from '../utils/level2_probs/index.js';
// Import other level problems as needed
import { level3_probs } from '../utils/level3_probs/index.js';
import { level4_probs } from '../utils/level4_probs/index.js';
import { level5_probs } from '../utils/level5_probs/index.js';


const CodePage = () => {
  const { pid } = useParams(); // Get the 'pid' parameter from the URL
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProblem = () => {
      const problemSets = [problems, level2_probs, level3_probs, level4_probs, level5_probs];

      // Iterate over problem sets and find the problem by 'pid'
      for (let i = 0; i < problemSets.length; i++) {
        if (problemSets[i][pid]) {
          setProblem(problemSets[i][pid]);
          setLoading(false);
          return;
        }
      }

      // If no problem is found, stop loading and show error
      setLoading(false);
      setProblem(null);
    };

    fetchProblem();
  }, [pid]);

  
  if (loading) return <div>Loading...</div>; // Show loading message while fetching data

  if (!problem) return <div>Problem not found</div>; // Show error message if problem not found

  return (
    <div className=''>
      <Workspace problem={problem} />
    </div>
  );
};

export default CodePage;
