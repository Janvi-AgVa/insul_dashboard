import React from 'react'
import Navbar from '../../../utils/Navbar'
import SideBar from '../../../utils/SideBar'
import { Row} from 'react-bootstrap'
import Footer from '../../../utils/Footer'
import BolusForm from './BolusForm'
function BolusWizard() {
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
        <BolusForm/>
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

export default BolusWizard
