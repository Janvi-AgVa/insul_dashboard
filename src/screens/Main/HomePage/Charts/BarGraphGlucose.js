import React, { useState, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import {  gettingReading } from '../../../../store/action/DashboardAction';
import { getDate } from '../../../../helper/getDate'
const cookies = new Cookies();
export default function BarGraphInsul() {
    const Dispatch = useDispatch();
    const navigate = useNavigate();
    const getReadingReducer = useSelector((state) => state.getReadingReducer)
    const weeklyGlucose = useState(
        getReadingReducer && getReadingReducer.data && getReadingReducer.data.glucose 
         )
    const weekData = weeklyGlucose[0]
    
    useEffect(() => {
        if (!cookies.get('ddAdminToken')) {
          navigate('/');
        }
        var start = getDate()[0]
        var end = getDate()[1]
        Dispatch(gettingReading({
          start,
          end,
    
        }));
    
      }, [navigate]);
    
    const data = [

        {
            //   name: 'Page B',
            uv: weekData[0],
            pv: weekData[1]
        },
        {
            //   name: 'Page C',
            uv: weekData[2],
            pv: weekData[3]


        },
        {
            //   name: 'Page D',
            uv: weekData[4],
            pv: weekData[5]


        },
        {
            //   name: 'Page E',
            uv: weekData[6],
            pv: weekData[7]


        },
       
    ];

    return (
        <>
            <div>
                <BarChart
                    width={440}
                    height={200}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    {/* <XAxis dataKey="name" /> */}
                    <YAxis />
                    {/* <Tooltip /> */}
                    {/* <Legend /> */}

                    <Bar dataKey="uv" fill="#AE13EF" />
                    <Bar dataKey="pv" fill="#AE13EF"opacity="40%" />
                </BarChart>
            </div>
        </>
    )
}
