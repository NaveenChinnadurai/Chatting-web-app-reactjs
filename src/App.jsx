import './App.css'
import Signup from './pages/signup'
import Splash from './pages/splash'
import OnBoarding from './pages/onboarding'
import Chatscreen from './pages/chatscreen'
import ChatPage from './pages/chatpage'
import { Route, Routes } from 'react-router-dom'
import Top from './components/top'
import Login from './pages/login'
function App() {

  return (
    <div className="app-div">
      <Top />
      {/* routing to different pages of the app using browerRouter component */}
      <Routes>
        <Route path='/' element={<Splash/>} />
        <Route path='/onboarding' element={<OnBoarding/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/splash' element={<Splash/>} />
        <Route path='/chatpage' element={<Chatscreen/>} />
        <Route path='/mainchat' element={<ChatPage/>} />
      </Routes>
    </div>
  )
}

export default App
