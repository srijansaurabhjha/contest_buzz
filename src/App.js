import React, { createContext, useState } from 'react'
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export const darkModeContext=createContext(null);

const App = () => {

  const [darkMode,setDarkMode]=useState(false);

  return (
    <darkModeContext.Provider value={{darkMode,setDarkMode}}>
    <div style={{minHeight:'100vh',backgroundColor:darkMode?'#9BA4B5':'#B0DAFF'}}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about" element={<About/>} exact/>
      </Routes>
      <Footer/>
    </div>
    </darkModeContext.Provider>
  )
}

export default App
