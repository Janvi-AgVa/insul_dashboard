import React, {  useEffect } from 'react';
import Cookies from 'universal-cookie';
import { Card } from 'react-bootstrap'
import '../../../css/Main/CardMain.css'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { todayReading } from '../../../store/action/DashboardAction';
import PieChartDataGraph from './Charts/PieChartDataGraph';
const cookies = new Cookies();

function Today_Reading() {
  const Dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.get('ddAdminToken')) {
      navigate("/");
    }
    Dispatch(todayReading());
  }, []);
  return (

    <Card className='upper-card'>
      <div style={{ width: '100%', }}>
        <p style={{ margin: '0px', fontSize: '20px', fontWeight: 'bold' }}>Today Reading</p>
        <p style={{ margin: '0px', fontSize: '15px', color: 'GrayText' }}>Updated 2 hours ago</p>
      </div>
      {/* <div>
        <div>
          <p style={{ margin: '0px', fontSize: '15px', color: 'GrayText' }}>Glucose= {Glucose}</p>
        </div>
        <div>
          <p style={{ margin: '0px', fontSize: '15px', color: 'GrayText' }}>Insulin= {Insulin}</p>
        </div>
        <div>
          <p style={{ margin: '0px', fontSize: '15px', color: 'GrayText' }}>carb= {Carb}</p>
        </div>
       
      </div> */}
      <div>
          <PieChartDataGraph/>
        </div>
    </Card>

  )
}

export default Today_Reading
