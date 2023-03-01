import React, {useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
const cookies = new Cookies();



function Monthly() {
    const Dispatch = useDispatch();
    const navigate = useNavigate();
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
                <td></td>
                <td>md/dl</td>
                <td>53-1</td>
                <td>NF <br/> F</td>
               
              </tr>
            
             
            </tbody>
          </Table>
    </div>
  )
}

export default Monthly
