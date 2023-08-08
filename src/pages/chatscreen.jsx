import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import DP from '../assets/chatdp.png'
import backArrow from '../assets/Back.png'
import '../styles/pageStyles/chatscreen.css'
import Msgbox from '../components/msgbox'
function Chatscreen() {
    const engLang=[   //chat messages in english
        'Hello ! Nazrul How are you?',
        'Have a great working week!!',
        'Hope you like it'
    ]
    const hindiLang=[ //chat messages in hindi
        'अपनेपन यथासंभव धीर-धीरे अपने समय',
        'हमारे लेकर वर्गाकार करता। होना त्याग',
        'क्योंकि विकास करता',
    ]
    const [color,setcolor]=useState("FBBC04")
    const [chatMsg,setchatMsg]=useState(engLang)  //state declared to set the requried language
    const handleEngLang=()=>{  //function that change message from hindi to english
        setchatMsg(engLang)
        setcolor("FBBC04")

    }
    const handleHindiLang=()=>{  //function that change message from english to hindi
        setchatMsg(hindiLang)
        setcolor("FBBC04")
    }
    return (
    <div className='chat-screen'>
        <div className="row chat-head sp">
            <div className="row chat-dp sp">
                <Link to="/login"><img src={backArrow} alt="Arrow" className='chat-back-arr' /></Link>
                <img src={DP} alt="Chat-pic" />
            </div>
            <div className="row chat-head-txt sp">
                <div className="head-txt-1">
                    <p className='head-subtext-1'>Arya</p>
                    <p className='head-subtext-2'>Vedic AI Bot</p>
                </div>
                <div className='head-lang row'>
                    <button className='A' onClick={handleEngLang}>A</button>
                    <p>/</p>
                    <button className='a' onClick={handleHindiLang}>क</button>
                </div>
            </div>
        </div>
        <div className="chat-page">
            <p className='today-txt'>Today</p>
            <div className="col msg-div">
                <p className='msg-txt-right'>Hello! How are you?</p>
                <span className='msg-time'>9:25 AM</span>
            </div>
            <div className="col msg-div msg-left">
                <div className="msg-txt-div-left">
                    <img src={DP} alt="Logo-Image" className='msg-logo-img'/>
                    <p className="msg-txt-left">{chatMsg[0]}</p>
                </div>
                <span className='msg-time'>9:25 AM</span>
            </div>
            <div className="col msg-div">
                <p className='msg-txt-right'>You did your job well!</p>
                <span className='msg-time'>9:25 AM</span>
            </div>
            <div className="col msg-div msg-left">
                <div className="msg-txt-div-left msg-left">
                    <img src={DP} alt="Logo-Image" className='msg-logo-img'/>
                    <p className="msg-txt-left">{chatMsg[1]}</p>
                </div>
                <div className="msg-txt-div-left sub-msg-1">
                    <p className="msg-txt-left sub-msg-txt">{chatMsg[2]}</p>
                    <span className='msg-time'>9:25 AM</span>
                </div>
            </div>
        </div>
        <Msgbox/>
    </div>
  )
}

export default Chatscreen