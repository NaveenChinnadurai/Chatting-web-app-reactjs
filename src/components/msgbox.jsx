import React from 'react'
import '../styles/componentStyles/msgbox.css'
import send from '../assets/send.png'
import mic from '../assets/mic.png'
function Msgbox() {
  //message input boc for chatting app
  return (
    <div className="chat-input-box col">
        <input type="text" className='msg-input' placeholder='Write your message'/>
        <div className="row input-icons">
            <img src={send} alt="Send-icon" className='input-icon'/>
            <img src={mic} alt="mic-icon" className='input-icon'/>
        </div>
    </div>
  )
}

export default Msgbox