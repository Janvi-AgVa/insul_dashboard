import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.css'
function Footer() {
  return (
    <div className='main-Footer' >
          <div className='side-div'>
          <p className='brand'>InsuLink</p>
          <p className='copyright'> @Copyright agvahealthcare</p>
          </div>
          <div className='Contact'>
              <ul >
                <b className='Tag-name'>Contact Us</b>
                <li>
                  Website: <Link to="https://insul.agvahealthcare.in/">https://insul.agvahealthcare.in/</Link>
                </li>
                <li>
                Address: A-1, A Block, Sector 83,<br/> Noida, Uttar Pradesh 201301
                </li>
                <li>
                  Phone No: 073304 05060
                </li>
              </ul>

          </div>
    </div>
  )
}

export default Footer
