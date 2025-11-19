import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Signup from './pages/AuthPages/Signup'
import Login from './pages/AuthPages/Login'
import { ToastContainer } from "react-toastify";
export const serverUrl=`http://localhost:3000`

function App() {
  return (
    <>
      <ToastContainer/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App