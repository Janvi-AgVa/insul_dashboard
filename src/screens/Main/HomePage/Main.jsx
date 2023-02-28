import React from 'react'
import Navbar from '../../../utils/Navbar'
import SideBar from '../../../utils/SideBar'
import { Row } from 'react-bootstrap'
import WelcomeTag from './WelcomeTag'
import Today_Reading from './Today_Reading'
import WeekReading from './WeekReading'
import Insulin from './Insulin'
import Glucose from './Glucose'
import Ressevior from './Ressevior'
import Battery from './Battery'
import Patch from './Patch'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../../utils/Footer'
function Main() {

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


        <section className='main-content' style={{ width: '100%' }}>

          <WelcomeTag />
          <>
            <Row className='main-div'>
              <Today_Reading />
              <WeekReading />
            </Row>
            <Row className='main-div'>
              <Insulin/>
              <Glucose/>

            </Row>
            <Row className='main-div'>

            <Ressevior/>
            <Battery/>
            <Patch/>


            </Row>
          </>

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

export default Main
