import './App.css'
import Signup from './pages/signup'
import Splash from './pages/splash'
import Signin from './pages/signin'
import OnBoarding from './pages/onboarding'
import Chatscreen from './pages/chatscreen'
import ChatPage from './pages/chatpage'
import { Route, Routes } from 'react-router-dom'
import Top from './components/top'
function App() {

  return (
    <div className="app-div">
      <Top />
      {/* routing to different pages of the app using browerRouter component */}
      <Routes>
        <Route path='/' Component={Splash} />
        <Route path='/onboarding' Component={OnBoarding} />
        <Route path='/signin' Component={Signin} />
        <Route path='/signup' Component={Signup} />
        <Route path='/splash' Component={Splash} />
        <Route path='/chatpage' Component={Chatscreen} />
        <Route path='/mainchat' Component={ChatPage} />
      </Routes>
    </div>
  )
}

export default App
