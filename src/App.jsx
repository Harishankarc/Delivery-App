
import './App.css'
// import Banner from './components/banner';
import Navbar from './components/navbar'
import Error from './components/error'
import Home from './pages/home'
import Profile from './pages/profile'
import Login from './pages/login'
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
  const hideNavbar = location.pathname === '/error' || location.pathname === '/*' || location.pathname === '/login';
  const [isautorized,setIsAuthorized] = useState(false)
  return (
    <>
      {!hideNavbar && <Navbar isautorized={ isautorized } />}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login setIsAuthorized={ setIsAuthorized }/>} />
      </Routes>
      
    </>
  );
}

export default App
