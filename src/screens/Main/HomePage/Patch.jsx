import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { Card } from 'react-bootstrap'
import '../../../css/Main/CardMain.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { deviceData } from '../../../store/action/DashboardAction';
import InformationIcon from '../../../asset/img/102.png';
import PatchImg from '../../../asset/img/patch2.png'
const cookies = new Cookies();
function Patch() {
  const Dispatch = useDispatch();
  const deviceDataReducer = useSelector((state) => state.deviceDataReducer);
  const Patch = useState(
    deviceDataReducer && deviceDataReducer.deviceData && deviceDataReducer.deviceData.data && deviceDataReducer.deviceData.data && deviceDataReducer.deviceData.data.device && deviceDataReducer.deviceData.data.device.patchTimestamp

  )
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.get('ddAdminToken')) {
      navigate("/");
    }
    Dispatch(deviceData());
  }, []);
  return (
    <Card className='lower-card-second'>
      <div>
        <div style={{ width: '100%', }}>
          <p style={{ margin: '0px', fontSize: '20px', fontWeight: 'bold' }}>INSULIN IN PATCH</p>
          <p style={{ margin: '0px', fontSize: '15px', color: 'GrayText' }}>Updated 1 hours ago</p>
        </div>
      
        <div style={{display:'flex',flexDirection:'row'}}>
        <img
            style={{
              height:'200px',
              width: "200px",
              margin:'2% 2% 0% 2%'
            }}
            src={PatchImg}
            alt="patch"
          />
            <div style={{ margin:'30% 2% 5% 5%' }}>
        <p style={{ margin: '0px', fontSize: '12px', color: 'black'}}> PATCH  CHANGE DATE</p>
        <p style={{margin:'0%', color: 'GrayText',fontSize: '10px'}}>{Patch}</p>
        </div>
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
        <img
            style={{
              height:'15px',
              width: "20px",
              margin:'15% 2% 10% 25%'
            }}
            src={InformationIcon}
            alt="i-icon"
          />
          <p style={{margin:'15% 0% 0% 0%', color: 'GrayText',fontSize: '10px'}}>Insulin should not be less than 20 units</p>
        </div>
      </div>
    
    </Card>
  )
}

export default Patch
