
import './App.css'

import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'
import { UserContext } from '../context/userContext'
import React, { useContext } from 'react'

import HomeScreen from './HomeScreen';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import LoginScreen from './screens/LoginScreen';
import Dashboard from './pages/Dashboard'

// import ProfileScreen from './screens/ProfileScreen';



axios.defaults.baseURL = 'https://netflix-clone-seven-gamma.vercel.app/';
axios.post('https://netflix-clone-seven-gamma.vercel.app/')
axios.defaults.withCredentials = true;

function App() {
  // const {user} = useContext(UserContext)
  // const user = null;
  // console.log(user.name)
  return (
    <UserContextProvider>
           
      <BrowserRouter>
      <div className='app'>
      <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
        
          <Routes>
            <Route path='/' element={<LoginScreen/>} />
            <Route path='/Home' element={<HomeScreen/>} />

          </Routes> 
      </div>
      
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
