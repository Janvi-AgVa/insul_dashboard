import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { Card } from 'react-bootstrap'
import '../../../css/Main/CardMain.css'
import { useDispatch, useSelector } from "react-redux";
import InformationIcon from '../../../asset/img/102.png'
import { useNavigate } from 'react-router-dom';
import { deviceData } from '../../../store/action/DashboardAction';
const cookies = new Cookies();
function Ressevior() {
  const Dispatch = useDispatch();
  const deviceDataReducer = useSelector((state) => state.deviceDataReducer);
  // console.log('DataReducer',deviceDataReducer)


  const Ressevior = useState(
    deviceDataReducer && deviceDataReducer.deviceData && deviceDataReducer.deviceData.data && deviceDataReducer.deviceData.data && deviceDataReducer.deviceData.data.device && deviceDataReducer.deviceData.data.device.reservoir
  )
  const resseviorcheck = Ressevior[0]

  const RESERVOIRDATE = useState(
    deviceDataReducer && deviceDataReducer.deviceData && deviceDataReducer.deviceData.data && deviceDataReducer.deviceData.data && deviceDataReducer.deviceData.data.device && deviceDataReducer.deviceData.data.device.reservoirTimestamp

  )
  const [sufficient, setSufficient] = useState(false);
  const [filled, setFilled] = useState(0);
  useEffect(() => {
    setFilled(resseviorcheck)

  }, [filled])

  useEffect(() => {
    if ((resseviorcheck) > 20) {
      setSufficient(!sufficient)
    }
  }, [resseviorcheck])

  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.get('ddAdminToken')) {
      navigate("/");
    }
    Dispatch(deviceData());
  }, []);
  return (
    <Card className='lower-card'>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '100%', }}>
          <p style={{ margin: '0px', fontSize: '20px', fontWeight: 'bold' }}>RESSEVIOR</p>
          <p style={{ margin: '0px', fontSize: '15px', color: 'GrayText' }}>Updated 1 hours ago</p>
        </div>
        <div style={{ width: '100%', }}>
          {sufficient && (<p
            style=
            {{
              backgroundColor: '#62CF7B',
              padding: '7% 22%',
              color: 'white',
              borderRadius: ' 15px 0px  0px 15px',
              height: '45px',
              width: '140px'
            }}>
            Sufficient</p>)
          }

        </div>
      </div>
      <div className='Graph' style={{display:'flex',flexDirection:'row'}}>
      
		  <div className="progressbar2">
			  <div style={{
				  height: `${filled}%`,
				  width: "100%",
				  backgroundColor: "#363556",
			  }}></div>
			  <span className="progressPercent2">{ filled }%</span>
		  </div>
     
      <div style={{ margin:'10%'}} >
      <p style={{margin:'0%', color: 'GrayText',fontSize: '20px'}}>10 ml out of 50 units</p>
        <p style={{ margin: '0px', fontSize: '14px', color: 'black'}}> RESERVOIR CHANGE DATE</p>
        <p style={{margin:'0%', color: 'GrayText',fontSize: '15px'}}>{RESERVOIRDATE}</p>
        </div>
      </div>

      {/* //information statement */}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      <img
            style={{
              height:'15px',
              width: "20px",
              margin:'6% 2% 10% 40%'
            }}
            src={InformationIcon}
            alt="i-icon"
          />
        <p style={{ margin: '5% 5% 0% 1%', color: 'GrayText', fontSize: '10px' }}>Insulin should not be less than 20 units</p>
      </div>
    </Card>
  )
}

export default Ressevior
