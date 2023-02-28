import React from 'react'
import '../css/Sidebar.css'
import Home from '../asset/img/home.png'
import Report from '../asset/img/report.png'
import Bolus from '../asset/img/bolus.png'
import Setting from '../asset/img/setting.png'
import { Link } from "react-router-dom";
function SideBar() {
  
  return (
    <div className='sidebar'>
    <ul className='sidebarList'>
      
        <li className='menu'>
    
        <img
            style={{
             
            
            }}
            src={Home}
            alt="home-icon"
          />
          <Link style={{textDecoration:'none', color:'white'}}  to='/home'> HOME</Link>
        
          
        </li>
        <li className='menu'>
    
    <img
        style={{
         
        
        }}
        src={Bolus}
        alt="bolus-icon"
      />
      <Link style={{textDecoration:'none', color:'white'}} to='/bolus'> BOLUS WIZARD</Link>
    
      
    </li>

        <li className='menu'>
    
    <img
        style={{
         
        
        }}
        src={Report}
        alt="report-icon"
      />
      <Link style={{textDecoration:'none', color:'white'}}  to='/report'> REPORT</Link>
    
      
    </li>

    <li className='menu'>
    
    <img
        style={{
         
        
        }}
        src={Setting}
        alt="setting-icon"
      />
      <Link style={{textDecoration:'none', color:'white'}} to='/setting'> SETTING</Link>
    
      
    </li>

    
      </ul>
    </div>


  )
}

export default SideBar
