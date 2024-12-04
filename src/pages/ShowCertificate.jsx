import React, { useEffect, useRef } from 'react';
import congrats from '../assets/cert.png';

function ShowCertificate({ onClose }) {
  const certRef = useRef();

  const handleClickOutside = (event) => {
    if (certRef.current && !certRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="h-96 mt-28 bg-black bg-opacity-50 flex items-center justify-center">
      <div ref={certRef} className="bg-white p-4 rounded-lg shadow-lg">
        <img src={congrats} alt="Certificate" />
      </div>
    </div>
  );
}

export default ShowCertificate;
