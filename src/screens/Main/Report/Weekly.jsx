import React, {useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from "react-redux";
import {avgfromdaterange} from "../../../store/action/DashboardAction"
import {  getDate} from '../../../helper/getDate'
import { useNavigate } from 'react-router-dom';
const cookies = new Cookies();



function Weekly() {
    const Dispatch = useDispatch();
    const navigate = useNavigate();
    const avgFromDateRangeReducer = useSelector((state) => state.avgFromDateRangeReducer)
    const Insulin = useState(
      avgFromDateRangeReducer && avgFromDateRangeReducer.data && avgFromDateRangeReducer.data.insulin && avgFromDateRangeReducer.data.insulin.avgInsulin
  )
  // console.log(Insulin)
    useEffect(() => {
      if (!cookies.get('ddAdminToken')) {
          navigate('/');
      }

      var start = getDate()[0]
      var end = getDate()[1]
      Dispatch(avgfromdaterange({
          start,
          end,

      }));
   
  },[]);

  return (
    <div>
       <Table  bordered  style={{margin:"5%", width:'85%'}}>
            <thead>
              <tr  >
                <th>Test</th>
                <th>Reading</th>
                <th>Unit</th>
                <th>Refine</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody >
              <tr style={{height:'100px'}} >
                <td></td>
                <td>{Insulin}</td>
                <td>md/dl</td>
                <td>53-1</td>
                <td>NF <br/> F</td>
               
              </tr>
            
             
            </tbody>
          </Table>
    </div>
  )
}

export default Weekly
