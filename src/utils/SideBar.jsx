import React from 'react'
import '../css/Sidebar.css'
import Home from '../asset/img/home.png'
import Report from '../asset/img/report.png'
import Bolus from '../asset/img/bolus.png'
import Setting from '../asset/img/setting.png'
import { Link, NavLink } from "react-router-dom";
function SideBar() {

  return (
    <div className='sidebar'>
      <ul className='sidebarList'>

        <li className='menu'>
          <NavLink className="links-list" to='/home'>
            <img
              style={{


              }}
              src={Home}
              alt="home-icon"
            />
            <p>HOME</p>
            </NavLink>


        </li>
        <li className='menu'>
          <NavLink className="links-list" to='/bolus'>
            <img
              style={{


              }}
              src={Bolus}
              alt="bolus-icon"
            />
            <p >BOLUS WIZARD</p></NavLink>


        </li>

        <li className='menu'>
          <NavLink className="links-list" to='/report'>
            <img
              style={{


              }}
              src={Report}
              alt="report-icon"
            />
            <p>REPORT</p></NavLink>


        </li>

        <li className='menu'>
        <NavLink className="links-list" to='/setting'> 
          <img
            style={{


            }}
            src={Setting}
            alt="setting-icon"
          />
         <p>SETTING</p></NavLink>


        </li>


      </ul>
    </div>


  )
}

export default SideBar
