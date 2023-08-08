import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/pageStyles/splash.css'
import logo from '../assets/logo.png'
import OnBoarding from './onboarding'
function Splash() {
  /* Intro page of the chatting app */
  return (
    <Link to='/onboarding' className='splash-div'>
          <img src={logo} alt="logo-img" className='splash-logo-img' />
          <span className='splash-txt'>Back to Vedas 🕉️</span>
    </Link>
  )
}

export default Splash