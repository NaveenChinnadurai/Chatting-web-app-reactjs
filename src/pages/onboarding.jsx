import React from 'react'
import '../styles/pageStyles/onboard.css'
import Fb from '../assets/fb.png'
import google from '../assets/google.png'
import apple from '../assets/apple1.png'
function OnBoarding() {
    const Icons=[Fb,google,apple]
    const displayIcons=Icons.map((icon)=>{  //to display sigin with icons
        return(
            <div className="banner-icons row">
                <img src={icon} alt="Icons" className='bannerIcons'/>
            </div>
        )
    })
  return (
    /* onboarding page content section */
    <div className='onBoarding'>
        <div className="start-txt">
            <div className="banner-img">
                <div className="banner-txt">
                    <span>Arya, AI Acharya</span>
                </div>
            </div>
            <div className="onboard-title">
                <p className='txt-1'>Discover the <br/>timeless wisdom of <br /><p className='txt-2'>the Vedas.</p></p>
                <p className='txt-3'>Sign up and <span className='txt-4'>journey through ancient <br />knowledge with Arya 🌟</span></p>
            </div>
        </div>
        <div className="start-icons row">{displayIcons}</div> {/* icons display */}
        <div className="line-div line line-1"></div>
        <p className='or-txt-1'>OR</p>
        <div className="line-div line line-2"></div>
        <div className="sub-btn row">
            <span className='submit-btn'><a href="/signup">Sign up with mail</a></span>
        </div>
        <div className="login-txt">
            <p className='login-txt-1'>Existing account?<a href="/login" className='login-txt-2'> Log in</a></p>
        </div>
    </div>
  )
}

export default OnBoarding