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

    const getReadingReducer = useSelector((state) => state.getReadingReducer)
    const weeklyInsulin = useState(
        getReadingReducer && getReadingReducer.data && getReadingReducer.data.insulin
    )
    const weekData = weeklyInsulin[0]
    console.log(getReadingReducer)

   
    
    const data = [

        {
            //   name: 'Page B',
            insulin: weekData[0],
        },
        {
            //   name: 'Page C',
            insulin: weekData[1],


        },
        {
            //   name: 'Page D',
            insulin: weekData[2],


        },
        {
            //   name: 'Page E',
            insulin: weekData[3],


        },
        {
            //   name: 'Page F',
            insulin: weekData[4],


        },
        {
            //   name: 'Page G',
            insulin: weekData[5],


        },
        {
            //   name: 'Page G',
            insulin: weekData[6],


        },
        {
            //   name: 'Page G',
            insulin: weekData[7],


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
                    
                    {/* <Legend /> */}

                    <Bar dataKey="insulin" fill="#62CF7B" />
                </BarChart>
            </div>
        </>
    )
}
