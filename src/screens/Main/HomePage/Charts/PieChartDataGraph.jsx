/* eslint-disable */

import React, { useState } from "react";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fontSize } from "@mui/system";
ChartJS.register(ArcElement);


export default function PieChartDataGraph() {
  const todayReadingReducer = useSelector((state) => state.todayReadingReducer);
  const Glucose = useState(
    todayReadingReducer && todayReadingReducer.allProjectData && todayReadingReducer.allProjectData.data && todayReadingReducer.allProjectData.data.glucose
  )
  // console.log(Glucose[0])
  const Insulin = useState(
    todayReadingReducer && todayReadingReducer.allProjectData && todayReadingReducer.allProjectData.data && todayReadingReducer.allProjectData.data.insulin
  )
  const Carb = useState(
    todayReadingReducer && todayReadingReducer.allProjectData && todayReadingReducer.allProjectData.data && todayReadingReducer.allProjectData.data.carb
  )
 
  const dataChart1 = {
  
    datasets: [
      {
        label:"Glucose",
        data:[Glucose[0],100],
        backgroundColor:['#363556','#DEDEDE'],
      
      },
     
    ],
  };
  const dataChart2 = {
  
    datasets: [
      {
        label:"Insul",
        data:[Insulin[0],100],
        backgroundColor:['#62CF7B','#DEDEDE'],
  
      },
     
    ],
  };
  const dataChart3 = {
  
    datasets: [
      {
        label:"Carb",
        data:[Carb[0],100],
        backgroundColor:['#DA58F9','#DEDEDE'],
      },
     
    ],
  };
  
  

  return (
    <>
      <div style={{display:'flex',flexDirection:'row', marginLeft:'1%',marginTop:'5%' }}>
      <div style={{height:'30%',width:'30%',marginRight:'5%'}}>
       <Doughnut
        data={dataChart1}
       ></Doughnut>
       <p style={{margin:"-52% 0% 0% 43%", position:'relative', fontSize:'12px', fontWeight:'bold'}}>{Glucose}</p>
       <p style={{marginLeft:'22%',marginTop:'55%',fontWeight:'bold',fontSize:'12px'}}>GLUCOMETRE</p>
       </div>
       <div style={{height:'30%',width:'30%',marginRight:'5%'}}>
       <Doughnut
        data={dataChart2}
       
       ></Doughnut>
        <p style={{margin:"-52% 0% 0% 43%", position:'relative',fontSize:'12px', fontWeight:'bold'}}>{Insulin}</p>
         <p style={{marginLeft:'20%',marginTop:'55%',fontWeight:'bold',fontSize:'12px'}}>INSULIN DOSE</p>
       </div>
       <div style={{height:'30%',width:'30%'}}>
       <Doughnut
        data={dataChart3}
       
       ></Doughnut>
        <p style={{margin:"-52% 0% 0% 43%", position:'relative',fontSize:'12px', fontWeight:'bold'}}>{Carb}</p>
         <p style={{marginLeft:'25%',marginTop:'55%',fontWeight:'bold',fontSize:'12px'}}>CARB TAKE</p>
       </div>
      </div>
    </>
  );
}
