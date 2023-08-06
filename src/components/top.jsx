import React from 'react'
import '../styles/componentStyles/top.css'
import tower from '../assets/signal.png'
import wifi from '../assets/wifi.png'
import battery from '../assets/battery.png'
function Top() {
    /* component for header section of the web app */
    const icons=[tower,wifi,battery] //stored icons in array
    const displayIcon=icons.map((icon)=>{  // to display icons
        return(
            <div className="tab-icon1">
                <img src={icon} alt="icons" className='tab-icon'/>
            </div>
        )
    })
  return (
    /* header section that consist of time and icons such as tower,wifi,battery */
    <div className='top-nav row sp'>
        <span className='tab-time'>9:41</span>
        <div className="nav-icons row">{displayIcon}</div>
    </div>
  )
}

export default Top