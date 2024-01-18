import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
import Holtel from './components/hotel/Holtel';

function Router() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Holtel/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
        </Routes>
    </>
  )
}

export default Router
