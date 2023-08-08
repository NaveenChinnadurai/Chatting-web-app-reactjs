import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/pageStyles/login.css'
import Fb from '../assets/fb.png'
import google from '../assets/google.png'
import apple from '../assets/apple2.png'
import backArrow from '../assets/Back.png'
function Login() {
    const Icons=[Fb,google,apple]
    const [state,setstate]=useState(true) //defined state of the button
    const handleButton=(e)=>{  // function to check whether input field is empty or not
        if(e.target.value.length>0){
            setstate(false)
        }else{
            setstate(true)
        }
    }
    const displayIcons=Icons.map((icon)=>{ //function to display signin icons
        return(
            <div className="banner-icon row">
                <img src={icon} alt="Icons" className='bannerIcons'/>
            </div>
        )
    })
    return (
        /* content of the sign page */
        <div className='signin-div'>
            <div className="signin-img">
                <Link to="/onboarding"><img src={backArrow} alt="Back Arrow" className='back-arrow'/></Link>
            </div>
            <div className="signin-txt log-txt col">
                <p className='signin-title'>Log in to Mokx</p>
                <p className="signin-para">Welcome back! Sign in using your social account or email to continue us</p>
            </div>
            <div className="signin-icons row">{displayIcons}</div> {/* icons display */}
            <div className="line-div line1"></div>
            <p className=' signin-or'>OR</p>
            <div className="line-div line2"></div>
            <div className='form col'>
                <div className="col input ai">
                    <label htmlFor="email " >Your email</label>
                    <input type="text" onChange={handleButton} className='input-field' id='email'/>
                </div>
                <div className="col input ai">
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={handleButton} className='input-field' id='pass'/>
                </div>
            </div>
            <div className="row">
                <Link to="/chatpage"><button disabled={state} className='btn signin-btn row'>Login</button></Link>
            </div>
            <p className='signin-end'>Forgot Password?</p>
        </div>
    )
}

export default Login