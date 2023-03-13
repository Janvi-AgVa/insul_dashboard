import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { Card } from 'react-bootstrap'
import '../../../css/Main/CardMain.css'
import { useDispatch, useSelector } from "react-redux";
import InformationIcon from '../../../asset/img/102.png'
import one from '../../../asset/img/battery2.png'
import two from '../../../asset/img/batreey.png'
import three from '../../../asset/img/battery4.png'
import four from '../../../asset/img/battery3.png'
import { useNavigate } from 'react-router-dom';
import { deviceData } from '../../../store/action/DashboardAction';
const cookies = new Cookies();
function Battery() {
  const Dispatch = useDispatch();
  const deviceDataReducer = useSelector((state) => state.deviceDataReducer);
  // console.log('deviceDataReducer',deviceDataReducer)


  const Battery = useState(
    deviceDataReducer && deviceDataReducer.deviceData && deviceDataReducer.deviceData.data && deviceDataReducer.deviceData.data && deviceDataReducer.deviceData.data.device && deviceDataReducer.deviceData.data.device.battery
  )

  //batter is Sufficient or Not
  const batterycheck = Battery[0]
  //  console.log('Battery',batterycheck)
  const [sufficient, setSufficient] = useState(false);

  useEffect(() => {
    if ((batterycheck) > 30) {
      setSufficient(!sufficient)
    }

  }, [batterycheck])



  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.get('ddAdminToken')) {
      navigate("/");
    }
    Dispatch(deviceData());
  }, []);

   

    
    
    // switch (batterycheck)
    // {
    //     case (batterycheck<=25):
    //         hangmanImage={one};
    //         break;
    //     case (batterycheck>25 && batterycheck<=50):
    //         hangmanImage={two};
    //         break;
    //     case (batterycheck>50 batterycheck<=75):
    //         hangmanImage={three};
    //         break;
    //     case (batterycheck>75 batterycheck<=100):
    //         hangmanImage={four};
    //         break;
       
    //     default:
    //         hangmanImage = null;
    // }

  return (
    <Card className='lower-card-second'>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '100%', }}>
          <p style={{ margin: '0px', fontSize: '20px', fontWeight: 'bold' }}>BATTERY</p>
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
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
        {(batterycheck<=25)&&
    
    
          <img
            style={{

              height: '200px',
              width: "60px",
              margin: '40% 0% 0% 0%',
             
            }}
            src={one}
            alt="battery"
          />
          }
          { ((batterycheck>25 && batterycheck<=50)) &&
          
            
          <img
            style={{

              height: '200px',
              width: "60px",
              margin: '40% 0% 0% 0%',
             
            }}
            src={two}
            alt="battery"
          />
          }
          { ((batterycheck>50 && batterycheck<=75)) &&
          
            
          <img
            style={{

              height: '200px',
              width: "60px",
              margin: '40% 0% 0% 0%',
             
            }}
            src={three}
            alt="battery"
          />
          }
          { ((batterycheck>75 && batterycheck<=100)) &&
          
            
          <img
            style={{

              height: '200px',
              width: "60px",
              margin: '40% 0% 0% 0%',
             
            }}
            src={four}
            alt="battery"
          />
          }


        </div>
        <p style={{
          color: '#353656',
          fontSize: '60px',
          margin: '20% 0% 0% 25%'
        }}>
          {Battery}%</p>

      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img
          style={{
            height: '15px',
            width: "20px",
            margin: '10% 5% 10% 2%'
          }}
          src={InformationIcon}
          alt="i-icon"
        />
        <p style={{ margin: '9% 5% 0% 0%', color: 'GrayText', fontSize: '10px' }}>Battery is less than threshold kindly keep ready battery for replacement</p>
      </div>

    </Card>
  )
}

export default Battery
