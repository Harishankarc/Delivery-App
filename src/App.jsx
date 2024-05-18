
import './App.css'
// import Banner from './components/banner';
import Navbar from './components/navbar'
import Error from './components/error'
import Home from './pages/home'
import Profile from './pages/profile'
import Login from './pages/login'
import Signup from './pages/signin'
import OtpVerify from './pages/otpVerify'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react'

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/error' || location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/twostepverification' || location.pathname === '/error';
  const [isautorized,setIsAuthorized] = useState(false)

  return (
    <>
      {!hideNavbar && <Navbar isautorized={ isautorized } />}
      <Routes>
        <Route path="/" element={<Home/>} />
        { isautorized ? <Route path="/profile" element={<Profile />} /> : <Route path= '*' element={<Error />} />}
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login setIsAuthorized={ setIsAuthorized } isautorized = {isautorized}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/twostepverification" element={<OtpVerify setIsAuthorized={ setIsAuthorized } isautorized = {isautorized}/>} />

      </Routes>

    </>
  );
}

export default App
