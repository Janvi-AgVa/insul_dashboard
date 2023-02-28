import React from 'react'
import Navbar from '../../../utils/Navbar'
import SideBar from '../../../utils/SideBar'
import { Row, Col } from 'react-bootstrap'
import Footer from '../../../utils/Footer'
function Report() {
  return (
    <div className='Main' >
    <Row>
      <div>
        <Navbar />
      </div>
    </Row>
    <div style={{ display: 'flex' }}>
      <div>
        <SideBar />
      </div>


      <section className='main-content' style={{width:'100%'}}>
    
      <div className='main'>
      <h1>Report</h1>
      </div>
      
      </section>
    </div>
    <Row>
        <div>
          <Footer />
        </div>
      </Row>




  </div>
  )
}

export default Report
