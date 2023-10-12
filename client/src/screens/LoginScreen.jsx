import React, { useState } from 'react'
import './LoginScreen.css'
import SigninScreen from './SigninScreen'
import axios from 'axios'
import {toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function LoginScreen() {

  const [signIn, setSignIn] = useState(false)

  
  return (
    <div className='loginScreen'>
        <div className='loginScreen_Background'>
            {/* <img
                src='https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225-xl.jpg'
            /> */}
            <img className='loginScreen_logo'
                src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
            />
            <button onClick={()=> setSignIn(true)} 
            className='loginScreen_button'>Sign In</button>
            <div className='loginScreen_gradient'/>
            
        </div>


        <div className='loginScreen_body'>

          {signIn ? (<SigninScreen/>) : (
            <>
              <h1>Unlimited films, TV programes and more.</h1>
              <h2>Watch anywhere. Cancle at any time.</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className='loginScreen_input'>
                <form>
                  <input type='email' placeholder='Email Address'/>
                  <button onClick={()=> setSignIn(true)}  
                  className='loginScreen_getStarted'>GET STARTED</button>
                </form>
              </div>
            </>
          )}

          
        </div>
    </div>
  )
}

export default LoginScreen