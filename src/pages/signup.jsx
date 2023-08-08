import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import backArrow from '../assets/Back.png'
import '../styles/pageStyles/signup.css'
import { signupInput } from '../script'
function Signup() {
  const inputFields=signupInput.map((x)=>{  //function returns the input fields for the signing up
      return(
          <div className="input">
              <label htmlFor={x.Text}>{x.Text}</label>
              <input type={x.type} className='input-field' id={x.Text}/>
          </div>
      )
  })
  return (
    /* sign up page content */
    <div className='signup-div'>
        <div className="signin-img">
            <Link to="/onboarding"><img src={backArrow} alt="Back Arrow" className='back-arrow'/></Link>
        </div>
        <div className="logo-img">
            <img src={logo} alt="Logo" className="logoImg" />
        </div>
        <div className="col signup-txt log-txt">
            <p className='signin-title'>Sign up with Email</p>
            <p className="signin-para">Enter your  details and dive into a realm of ancient wisdom! 💫</p>
        </div>
        <div className="signup-form">{inputFields}</div>
        <div className="row">
          <Link to="/mainchat"><span className='btn signup-btn row'>Create an account</span></Link>
        </div>
    </div>
  )
}

export default Signup