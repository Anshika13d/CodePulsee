import React, { useState } from 'react'
import Split from 'react-split'
import ProbDesc from './problemdesc/ProbDesc'
import Playground from './playground/Playground'
import Confetti from 'react-confetti';
import useWindowSize from '../../hooks/useWindowSize';
import { use } from 'chai';

function Workspace({problem}) {
  const {width, height} = useWindowSize();
  const [success, setSuccess] = useState(false);
  const [solved, setSolved] = useState(false);
  return (
    <>
        <Split
            className="split"
            minSize={0}
        >
            <ProbDesc problem={problem} _solved={solved} />
                <div style={{ overflow: 'hidden', position: 'relative' }}>
                  <Playground problem={problem} setSuccess={setSuccess} setSolved={setSolved} />
                  {
                    success && <Confetti
                      gravity={0.3}
                      tweenDuration={6000}
                      width={width - 20}  // Adjusted width
                      height={height - 20} // Adjusted height
                    />
                  } 
                </div>
        </Split>
    </>
  )
}

export default Workspace