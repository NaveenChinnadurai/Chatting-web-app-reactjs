import { useState,useEffect } from 'react'
import '../styles/pageStyles/splash.css'
import logo from '../assets/logo.png'
import OnBoarding from './onboarding'
function Splash() {
  const IntroPage=()=>{
    return(
      /* Intro page of the chatting app */
      <div className='splash-div'>
            <img src={logo} alt="logo-img" className='splash-logo-img' />
            <span className='splash-txt'>Back to Vedas 🕉️</span>
      </div>
  )
  }
  const [intro,setIntro]=useState(<IntroPage/>);
  const [isIntro, setIsIntro] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIntro(<OnBoarding />);
      setIsIntro(false);
    }, 3000);
  }, []);

  if (isIntro) {
    return <IntroPage/>;
  }
  return(
    <div>{intro}</div>
  )
  
}

export default Splash