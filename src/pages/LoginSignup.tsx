import React from 'react'
import './css/LoginSignup.css';
 const LoginSignup = () => {
  return (
    <div className='LoginSignup'>
      <div className="LoginSignupContainer">
        <h3>Sign Up</h3>
        <div className="LoginSignupFields">
          <input type="text" placeholder='your name' />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder='password' name="" id="" />
        </div>
        <button>Continue</button>
        <p className='LoginSignup-login'>Already have an account <span>Login here</span></p>
        <div className="LoginSignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By Continuing I agree to the terms of use & privacy policy</p>
       </div>
      </div>
    </div>
  )
}
export default LoginSignup