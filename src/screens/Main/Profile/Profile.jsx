import React, {  useState,useEffect } from 'react';
import Navbar from '../../../utils/Navbar'
import SideBar from '../../../utils/SideBar'
import { Row, Col, Card} from 'react-bootstrap'
import '../../../css/Main/CardMain.css'
import ProfileForm from './ProfileForm';
import Footer from '../../../utils/Footer';
function Profile() {
  return (
    <div className='Main' >
    <Row>
      <div>
        <Navbar />
      </div>
    </Row>
    <div style={{ display: 'flex' }}>
      <div >
        <SideBar/>
      </div>


      <section className='main-content' style={{width:'100%'}}>
    
          <ProfileForm/>

      
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

export default Profile
