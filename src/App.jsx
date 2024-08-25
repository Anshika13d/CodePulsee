import React, { useContext, useEffect, useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import About from './pages/About';
import Practice from "./pages/Practice";
import ContactUs from "./pages/ContactUs";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the hamburger menu
import Home from "./pages/Home";
import Level from "./pages/Level";
import axios from "axios";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AuthContext } from "./context/AuthContext";
import CodePage from "./pages/CodePage";
import toast, { Toaster } from 'react-hot-toast';
import useHasMounted from "./hooks/useHasMounted";
import Read from "./pages/Read";
import ShowCertificate from "./pages/ShowCertificate";

function App() {

  //rehydration problem sol
  // const hasMounted = useHasMounted();
  // if(!hasMounted) return null;

  
  const [menuOpen, setMenuOpen] = useState(false);
  const {user, setUser} = useContext(AuthContext);
  const navigate = useNavigate();

  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect( () => {
     axios.get('https://codepulse-backend.onrender.com/profile', {
      withCredentials: true
    })
    .then(response => {
        setUser(response.data)
    })
    .catch(error => {
      console.error("Error fetching profile:", error);
    });
  }, []);

  function logout(){
    axios.post('https://codepulse-backend.onrender.com/logout', {}, {
      withCredentials: true
    })
    .then(() => {
      navigate('/home');
      toast.success("Sad to see you go! Come back soon!", {icon: '😢'});
      setUser(null);
    })
    .catch(e => {
      console.log("error while logging out", e);
      alert("error while logging out");
    })
  }


  return (
    <>

      <div className="bg-gradient-to-r from-gray-800 to-black">
        <nav className="flex p-7 items-center justify-between bg-gradient-to-r  text-white relative">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl">
              <Link to='/home'> CodePulse </Link>  
            </h1>
            <ul className="hidden md:flex space-x-8">
              <li><Link to='/home' className="hover:text-blue-200">Home</Link></li>
              <li><Link to='/about' className="hover:text-blue-200">About</Link></li>
              <li><Link to='/practice' className="hover:text-blue-200">Practice</Link></li>
              <li><Link to='/contactus' className="hover:text-blue-200">Contact us</Link></li>
            </ul>
          </div>
          {!user ? (
            <div className="hidden  md:flex space-x-4">
              <Link to='/signup'>
            <button className=" p-1  border-none rounded-lg w-24 bg-gray-900 border-2 border-gray-800 hover:bg-gray-800 text-white text-center ">
              Signup
            </button>
            </Link>
            <Link to='/login'>
            <button className=" p-1  border-none rounded-lg w-24 bg-gray-900 border-2 border-gray-800 hover:bg-gray-800 text-white ">
              Login
            </button>
            </Link>
          </div>) : (<>
                    <div className="flex items-center space-x-4 md:space-x-2" >
                    
                    <button 
                      className=" p-1 border-none rounded-lg w-24 bg-gray-900 border-2 border-gray-800 hover:bg-gray-800 text-white "
                      onClick={logout}
                      >
                      Logout
                    </button>
                    </div>
                    </>
                  )
          
        }
          
          <div className="md:hidden flex space-x-4">
            <button onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden bg-black absolute top-16 right-2 w-64 text-white p-4 z-40">
            <ul className="space-y-4">
              <li><Link to='/home' onClick={toggleMenu}>Home</Link></li>
              <li><Link to='/about' onClick={toggleMenu}>About</Link></li>
              <li><Link to='/practice' onClick={toggleMenu}>Practice</Link></li>
              <li><Link to='/contactus' onClick={toggleMenu}>Contact us</Link></li>
              <li>
                <button className="hover:bg-zinc-400 p-1 border-none rounded-lg w-52 bg-gradient-to-r from-gray-700 to-gray-800 border-2 border-gray-800 text-white text-center">
                  <Link to='/signup' onClick={toggleMenu}>Signup</Link>
                </button>
              </li>
              <li>
                <button className="hover:bg-zinc-400 p-1 border-none rounded-lg w-52 bg-gradient-to-r from-gray-700 to-gray-800 border-2 border-gray-800 text-white text-center">
                  <Link to='/login' onClick={toggleMenu}>Login</Link>
                </button>
              </li>
            </ul>
          </div>
          
        )}
      

      
      
      <Toaster />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/practice/" element={<Practice/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/level/:id" element={<Level />} />
        {/* <Route path="/code" element={<CodePage />} /> */}
        <Route path="/code/:pid" element={<CodePage />} />
        <Route path="/read" element={<Read/>}/>
        <Route path="/certificate" element={<ShowCertificate/>}/>
      </Routes>



      </div>
    </>
  );
}

export default App;
