import React, { useRef } from 'react'
import './SigninScreen.css'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate,Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { UserContext } from '../../context/userContext'
import RegisterScreen from './RegisterScreen'


function SigninScreen() {
  const {user} = useContext(UserContext)

  const [click, setClick] = useState()

  const reg = (e) =>{
    setClick(true)
  }
  const sign = (e) =>{
    setClick(false)
  }

  // const navigate = useNavigate()


  const [dataa,setDataa] = useState({
    name:'',
    email:'',
    password:'',
  })

  const registerUser = async (e) =>{
    e.preventDefault()
    const {name,email,password} = dataa
    try{
      const {dataa} = await axios.post('/register', {
        name,email,password
      })
      if(data.error){
        toast.error(dataa.error)

      }
      else{
        setDataa({})
        toast.success('Login Successful. Welcome Buddy')
        // navigate('/login')
        sign()
      }
    }
    catch(err){
      console.log(err)
    }
  }


  const navigate = useNavigate()

  const [data, setData] = useState({
    email:'',
    password:'',
  })

  

  const loginUser = async (e) =>{
    e.preventDefault()
    // axios.get('/')
    const {email, password} = data
    try {
      const {data} = await axios.post('/login',{
        email,
        password
      })

      if(data.error){
        toast.error(data.error)
      }
      else{
        setData({});
        navigate('/Home')
        // user = true
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  

  return (
    <div className='signupScreen'>
      {(!click)?(
        <form onSubmit={loginUser}>
          <h1>Sign In</h1>
          <input placeholder='Email' type='email' value={data.email} onChange={(e) => setData({...data, email : e.target.value})}/>
          <input  placeholder='Password' type='password' value={data.password} onChange={(e) => setData({...data, password : e.target.value})}/>
          <button type='submit'  onClick={loginUser} >Sign In</button>
          <h4><span className='signUp_gray'>New to Netflix? </span>
          <span className='SignUp_link' onClick={reg} >Sign Up now.</span></h4>
      </form>


      ):(
        <form onSubmit={registerUser}>
          <h1>Register</h1>
          <input type='text' placeholder='Enter Name..' value={dataa.name} onChange={(e) => setDataa({...dataa, name : e.target.value})}/>
          <input placeholder='Email' type='email' value={dataa.email} onChange={(e) => setDataa({...dataa, email : e.target.value})}/>
          <input  placeholder='Password' type='password' value={dataa.password} onChange={(e) => setDataa({...dataa, password : e.target.value})}/>
          <button type='submit'  onClick={registerUser} >Register</button>
          <h4><span className='signUp_gray'>Already hav account? </span>
          <span className='SignUp_link' onClick={sign} >Sign In now.</span></h4>
      </form>

      )}
      
      
    </div>
  )
}

export default SigninScreen