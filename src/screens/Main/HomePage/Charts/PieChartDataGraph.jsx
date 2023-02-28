/* eslint-disable */

import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useEffect } from "react";
ChartJS.register(ArcElement, Tooltip, Legend);


export default function PieChartDataGraph() {
  const todayReadingReducer = useSelector((state) => state.todayReadingReducer);
  const Glucose = useState(
    todayReadingReducer && todayReadingReducer.allProjectData && todayReadingReducer.allProjectData.data && todayReadingReducer.allProjectData.data.glucose
  )
  console.log(Glucose[0])
  const Insulin = useState(
    todayReadingReducer && todayReadingReducer.allProjectData && todayReadingReducer.allProjectData.data && todayReadingReducer.allProjectData.data.insulin
  )
  const Carb = useState(
    todayReadingReducer && todayReadingReducer.allProjectData && todayReadingReducer.allProjectData.data && todayReadingReducer.allProjectData.data.carb
  )
  console.log()
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
  
  
  const options = {
   
  };
  const textCentre1={
    id:'textCentre',
    beforeDatasetsDraw(chart,args,pluginsOptions){
      const{ctx,data}=chart;
      ctx.save();
      ctx.font='bolder 12px Roboto';
      ctx.fillStyle="#363556";
      ctx.textAlign="centre";
      ctx.textBaseline="middle";
      ctx.fillText(Glucose[0],chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y)
     
  
    }
  }
  const textCentre2={
    id:'textCentre',
    beforeDatasetsDraw(chart,args,pluginsOptions){
      const{ctx,data}=chart;
      ctx.save();
      ctx.font='bolder 12px Roboto';
      ctx.fillStyle="#363556";
      ctx.textAlign="centre";
      ctx.textBaseline="middle";
      ctx.fillText(Insulin[0],chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y)
     
  
    }
  }
  const textCentre3={
    id:'textCentre',
    beforeDatasetsDraw(chart,args,pluginsOptions){
      const{ctx,data}=chart;
      ctx.save();
      ctx.font='bolder 12px Roboto';
      ctx.fillStyle="#363556";
      ctx.textAlign="centre";
      ctx.textBaseline="middle";
      ctx.fillText(Carb[0],chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y)
     
  
    }
  }
  return (
    <>
      <div style={{display:'flex',flexDirection:'row', marginLeft:'1%',marginTop:'5%' }}>
      <div style={{height:'30%',width:'30%',marginRight:'5%'}}>
       <Doughnut
        data={dataChart1}
        options={options}
        plugins={[textCentre1]}
       ></Doughnut>
       <p style={{marginLeft:'22%',marginTop:'15%',fontWeight:'bold',fontSize:'12px'}}>GLUCOMETRE</p>
       </div>
       <div style={{height:'30%',width:'30%',marginRight:'5%'}}>
       <Doughnut
        data={dataChart2}
        options={options}
        plugins={[textCentre2]}
       ></Doughnut>
         <p style={{marginLeft:'20%',marginTop:'15%',fontWeight:'bold',fontSize:'12px'}}>INSULIN DOSE</p>
       </div>
       <div style={{height:'30%',width:'30%'}}>
       <Doughnut
        data={dataChart3}
        options={options}
        plugins={[textCentre3]}
       ></Doughnut>
         <p style={{marginLeft:'25%',marginTop:'15%',fontWeight:'bold',fontSize:'12px'}}>CARB TAKE</p>
       </div>
      </div>
    </>
  );
}
