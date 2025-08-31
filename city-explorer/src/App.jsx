import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 import './App.css'
import "./styles/globals.css";
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import CityDetails from './pages/CityDetails'
import SearchBar from './components/SearchBar';

function App() {

  return (
    <>
    <Navbar />
    <SearchBar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/city/:name" element={<CityDetails />} />
    <Route path='/about' element={<About />} />
   </Routes>
    </>
  )
}

export default App
