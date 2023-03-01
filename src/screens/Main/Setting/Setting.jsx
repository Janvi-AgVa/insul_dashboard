import React from 'react'
import Navbar from '../../../utils/Navbar'
import SideBar from '../../../utils/SideBar'
import { Row, Dropdown} from 'react-bootstrap'
import Footer from '../../../utils/Footer'
import SettingForm from './SettingForm'
function Setting() {
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

          <SettingForm />
          <p style={{ margin: '2% 0% 2% 2%', fontSize: '20px', color: '#353656', fontWeight: 'bold' }}>Glucose Unit</p>
          <div >
             <Dropdown style={{
            boxShadow: ' 2px 2px 5px grey',
            border: '0.2px',
            borderRadius: '5px',
            margin: '2% 0% 2% 2%',
            width:'20%',
            height:'50px'

          }}>
           <Dropdown.Toggle style={{backgroundColor:'white'}}>
       
      </Dropdown.Toggle>
          <Dropdown.Menu>
        <Dropdown.Item value="mg/dL">mg/dL</Dropdown.Item>
        <Dropdown.Item value="mmol/L'">mmol/L</Dropdown.Item>

      </Dropdown.Menu>
      </Dropdown>
        
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

export default Setting
