import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { Card } from 'react-bootstrap'
import '../../../css/Main/CardMain.css'
import '../../../css/Main/Progress.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { avgfromdaterange, previousWeek } from '../../../store/action/DashboardAction';
import { getDate, getprevDate } from '../../../helper/getDate'
const cookies = new Cookies();
function WeekReading() {

    const Dispatch = useDispatch();
    const navigate = useNavigate();

    const prevweekReducer = useSelector((state) => state.prevweekReducer)
    const avgFromDateRangeReducer = useSelector((state) => state.avgFromDateRangeReducer)
    // console.log('avgfromdaterangeReduccer', avgFromDateRangeReducer,prevweekReducer)

    const weeklyInsulin = useState(
        avgFromDateRangeReducer && avgFromDateRangeReducer.data && avgFromDateRangeReducer.data.insulin && avgFromDateRangeReducer.data.insulin.avgInsulin
    )
    const prevInsulin = useState(
        prevweekReducer && prevweekReducer.data && prevweekReducer.data.insulin && prevweekReducer.data.insulin.avgInsulin
    )
    const [insulin, setInsulin] = useState();
    const [previnsulin, setPrevInsulin] = useState();

    // console.log("avgInsulin",weeklyInsulin,previnsulin)

    const [filled, setFilled] = useState(0);
    const [prevfilled, setPrevFilled] = useState(0);

    const [comapre, setCompare] = useState("")



  


    // CHECKING IF USER IS LOGIN OR NOT
    useEffect(() => {
        if (!cookies.get('ddAdminToken')) {
            navigate('/');
        }
        if (weeklyInsulin < prevInsulin) {
            setCompare("less than")
        } else if (weeklyInsulin > prevInsulin) {
            setCompare("greater than")
        } else {
            setCompare("same")
        }
      
        var start = getDate()[0]
        var end = getDate()[1]
        Dispatch(avgfromdaterange({
            start,
            end,

        }));
        start = getprevDate()[0]
        end = getprevDate()[1]
      

        Dispatch(previousWeek({
            start,
            end,

        }));
        setFilled(insulin)
        setPrevFilled(previnsulin)
        setInsulin(weeklyInsulin[0].toFixed(2))
        setPrevInsulin(prevInsulin[0].toFixed(2))
    },[insulin, previnsulin],  [comapre],[filled], [prevfilled],[navigate]);



    return (

        <Card className='upper-card-second'>
            <Card className='text-card' >
                Your average insulin intake is {comapre} the last week average
            </Card>
            <div className='Graph'>
                <p className='text'>THIS WEEK</p>
                <div style={{ display: 'flex', flexDirection: 'row', margin: '0%', top: '2%' }}>
                    <div className="progressbar">
                        <div style={{
                            height: "100%",
                            width: `${filled}%`,
                            backgroundColor: "#363556",

                        }}></div>

                    </div>
                    <div>
                        <p className="progressPercent" style={{ color: '#363556' }}>{insulin} units/day</p>
                    </div>
                </div>
            </div>
            <div className='Graph'>
                <p className='text'>PREVIOUS WEEK</p>
                <div style={{ display: 'flex', flexDirection: 'row', margin: '0%', top: '2%' }}>
                    <div className="progressbar">
                        <div style={{
                            height: "100%",
                            width: `${prevfilled}%`,
                            backgroundColor: "#62CF7B",

                        }}></div>

                    </div>
                    <div>
                        <p className="progressPercent" style={{ color: '#62CF7B' }}>{previnsulin} units/day</p>
                    </div>
                </div>

            </div>

        </Card>

    )
}

export default WeekReading
