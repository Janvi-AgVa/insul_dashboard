import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { Card } from 'react-bootstrap'
import '../../../css/Main/CardMain.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { avgfromdaterange } from '../../../store/action/DashboardAction';
import { getDate} from '../../../helper/getDate'
import BarGraphGlucose from './Charts/BarGraphGlucose';
const cookies = new Cookies();
function Glucose() { 
    const Dispatch = useDispatch();
    const navigate = useNavigate();

    const avgFromDateRangeReducer = useSelector((state) => state.avgFromDateRangeReducer)
    const weeklyGlucoseAvg = useState(
        avgFromDateRangeReducer && avgFromDateRangeReducer.data && avgFromDateRangeReducer.data.glucose && avgFromDateRangeReducer.data.glucose.avgGlucose
         )
    const [ glucose,setGlucose]=useState();
        useEffect(()=>{
        setGlucose( weeklyGlucoseAvg[0].toFixed(2))
                },[glucose])
       
      // CHECKING IF USER IS LOGIN OR NOT
      useEffect(() => {
        if (!cookies.get('ddAdminToken')) {
          navigate('/');
        }
        var start=getDate()[0]
        var end=getDate()[1]
        Dispatch(avgfromdaterange({
            start,
            end,

        }));
      
      }, [navigate]);

    return (
        <Card className='upper-card-second'>
        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{ width: '100%', }}>
        <p style={{ margin: '0px',marginLeft:'4%', fontSize: '20px', fontWeight: 'bold' }}>GLUCOSE</p>
        <p style={{ margin: '0px',marginLeft:'4%', fontSize: '15px', color: 'GrayText' }}>Updated 2 hours ago</p>
        </div>
        <div style={{ width: '100%', }}>
        <p style={{ margin: '0px', fontSize: '20px',marginLeft:'50%', }}>AVERAGE</p>
        <p style={{ margin: '0px', fontSize: '15px', color: 'GrayText',marginLeft:'50%' }}>{glucose} unit/day</p>
        </div>
        </div>
            
        <div style={{marginTop:'5%'}}>
       <BarGraphGlucose/>
       </div>
     
        </Card>

    )
}

export default Glucose
