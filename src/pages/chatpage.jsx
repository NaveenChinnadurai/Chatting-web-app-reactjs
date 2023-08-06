import React from 'react'
import DP from '../assets/chatdp.png'
import backArrow from '../assets/Back.png'
import vector from '../assets/Vector.png'
import warning from '../assets/warning.png'
import '../styles/pageStyles/chatpage.css'
import Msgbox from '../components/msgbox'
function ChatPage() {
    const txt=[
        'What is the mantra in Rigveda 10.2.3?',
        'What are the prescribed Vedic remedies for snake bites?',
        'Can you tell me the significance of the Gayatri Mantra?'
    ]
    const displayTxt=txt.map((eli)=>{
        return(
            <div className="main-txt"><p>{eli}</p></div>
        )
    })
  return (
    <div className='chatPage-div'>
        <div className="row chat-head sp">
            <div className="row chat-dp sp">
                <a href="/signup"><img src={backArrow} alt="Arrow" className='chat-back-arr' /></a>
                <img src={DP} alt="Chat-pic" />
            </div>
            <div className="row chat-head-txt sp">
                <div className="head-txt-1">
                    <p className='head-subtext-1'>Arya</p>
                    <p className='head-subtext-2'>Vedic AI Bot</p>
                </div>
                <div className='head-lang row'>
                    <button className='A'>A</button>
                    <p>/</p>
                    <button className='a'>क</button>
                </div>
            </div>
        </div>
        <div className="main-msg-div">
            <img src={DP} alt="Logo-Image" className='msg-logo-img'/>
            <p className="main-txt-left">🙏 Namaste! I’m Arya, your AI Vedic help. I'm here to provide insights from Vedas for daily life concerns. <br /><br /> Whether you seek guidance on mantras, general life advice, or specific Vedic interpretations, I'm here to assist you.</p>
        </div>
        <div className=" row page-txt-1">
            <img src={vector} alt="image" className='vector-img'/>
            <p className='main-chat-txt-1'>You can ask queries like:</p>
        </div>
        <div className="page-txt-2">{displayTxt}</div>
        <div className=" row page-txt-1">
            <img src={warning} alt="image" className='vector-img'/>
            <p className='main-chat-txt-1 warning-msg'>Limitation: May struggle with complex queries.</p>
        </div>
        <div className="main-msg-div main-end">
            <img src={DP} alt="Logo-Image" className='msg-logo-img'/>
            <p className="main-txt-left">Let your curiosity guide you; wishing you blessings and enlightenment 🕉️</p>
        </div>
        <Msgbox/>
    </div>
  )
}

export default ChatPage