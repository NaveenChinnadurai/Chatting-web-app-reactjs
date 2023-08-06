import React from 'react'
import '../styles/pageStyles/splash.css'
import logo from '../assets/logo.png'
import OnBoarding from './onboarding'
function Splash() {
  /* Intro page of the chatting app */
  return (
    <a href='/onboarding' className='splash-div'>
          <img src={logo} alt="logo-img" className='splash-logo-img' />
          <span className='splash-txt'>Back to Vedas 🕉️</span>
    </a>
  )
}

export default Splash