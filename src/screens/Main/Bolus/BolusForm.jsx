import React, { useState } from 'react'
import '../../../css/Bolus.css'
import info from '../../../asset/img/102.png'
import info2 from '../../../asset/img/info.png'
import pen from '../../../asset/img/pen.png'
import { Card } from 'react-bootstrap'
import { ArrayList } from '../../../helper/ArrayList'
function BolusForm() {
    const [advance, setadvance] = useState(false)
    const [calculates, setCalculate] = useState(false)
    const [style, setStyle] = useState('bolus-advance-box')
   
    const [valueBox, setValueBox] = useState(false)
     const [valueBox2, setValueBox2] = useState(false)
     const [valueBox3, setValueBox3] = useState(false)
     const [valueBox4, setValueBox4] = useState(false)
    const changeStyle = () => {
        setStyle("cont2");
        setadvance(!advance)
    };
    const [ActiveInsulin, setActiveInsulin] = useState("");
    const [CarbIntake, setCarbIntake] = useState("");
    const [CurrentBG, setCurrentBG] = useState("");
    const [TargetBG, setTargetBG] = useState("");
    const onChange = (event) => {
        const value = event.target.value;
        setActiveInsulin(value);
    };

    const onChange2 = (event) => {
        const value = event.target.value;
        setCarbIntake(value);
    };
    const onChange3 = (event) => {
        const value = event.target.value;
        setTargetBG(value);
    };
    const onChange4 = (event) => {
        const value = event.target.value;
        setCurrentBG(value);
    };

    
    return (
        <div className='form-div'>

            {calculates && (<div >
                <Card className='bolus-card'>
                    <div style={{
                        display: 'flex', boxShadow: '2px 2px 5px grey',
                        borderRadius: '5px',
                    }}>
                        <h2 style={{ marginRight: '45%', fontWeight: 'bold' }}> Recommendation</h2>
                        <h2 style={{ fontWeight: 'bold' }} onClick={() => setCalculate(!calculates)}>Done</h2>
                    </div>
                    <div style={{
                        display: 'flex', boxShadow: '2px 2px 5px grey', height: '90px',
                        borderRadius: '5px',
                    }}>
                        <h2 style={{ marginRight: '45%', fontSize: '15px', marginTop: '5%' }}> Required Insulin Doses</h2>
                        <h2 style={{ fontSize: '15px', marginTop: '5%' }} onClick={() => setCalculate(!calculates)}><b style={{ fontSize: '20px' }}>10</b> unit/h</h2>
                    </div>
                    <div style={{
                        display: 'flex', boxShadow: '2px 2px 5px grey', height: '100%',
                        borderRadius: '5px',
                    }}>
                        <div style={{ display: 'block' }}>
                            <div style={{ display: 'flex', marginBottom: '0%', marginTop: '10%' }}>
                                <img
                                    style={{ width: '15px', height: '15px', margin: '3%' }}
                                    src={info}
                                />

                                <h2 style={{ fontWeight: 'bold', fontSize: '15px' }}> There values are calculated on basis of input provided to bolus wizard.</h2>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <img
                                    style={{ width: '15px', height: '15px', margin: '3%' }}
                                    src={info}
                                />
                                <h2 style={{ fontWeight: 'bold', fontSize: '15px' }}> Use the recommended setting after taking the approval from your medical consultant (or doctor)</h2>
                            </div>
                            <h6 style={{ color: 'gray', fontSize: '15px', margin: '35% 0% 0% 20%' }}>Digitially Generated By <spam style={{ color: '#cb297b' }}>AgVa</spam> <spam style={{ color: '#444444' }}>HealthCare</spam></h6>
                        </div>
                    </div>
                </Card>

            </div>
            )}
            <h1>Bolus Wizard</h1>
            <div className='bolus-first-line'>
                <img
                    className='bolus-info'
                    src={info2}
                />
                <h6> Bolus Wizard automatically calculates the recommended dosage of insulin based on your meal intake</h6>
            </div>
            <div className='bolus-main-div'>

                <div className='bolus-value-box'>
                    <h6 style={{ margin: '5% 2% 0% 2%', fontSize: '15px' }}>IC Ratio</h6>
                    <img
                        style={{
                            width: '15px',
                            height: '15px',
                            marginTop: "5%",
                            marginRight: '0%',
                        }}
                        src={info2}
                    />
                    <p style={{ fontSize: '20px', margin: "3.5% 0% 0% 52%", color: 'gray' }}>0.0</p>
                    <p style={{ margin: "5% 0% 0% 0%" }}>gms/u &nbsp; </p>
                    <p style={{ color: 'gray', margin: '5% 1% 0% 1%' }}>|</p>
                    <img
                        style={{
                            width: '15px',
                            height: '15px',
                            marginTop: "5%",
                            marginRight: '0%',


                        }}
                        src={pen}
                       
                    />

                </div>

                <div className='bolus-value-box'>
                    <h6 style={{ margin: '5% 2% 0% 2%', fontSize: '15px' }}>Carb Intake</h6>
                    <img
                        style={{
                            width: '15px',
                            height: '15px',
                            marginTop: "5%",
                            marginRight: '0%',
                        }}
                        src={info2}
                    />
                    <p style={{ fontSize: '20px', margin: "3.5% 0% 0% 47%", color: 'gray' }}>{CarbIntake}</p>
                    <p style={{ margin: "5% 0% 0% 0%" }}>gms &nbsp; </p>
                    <p style={{ color: 'gray', margin: '5% 1% 0% 1%' }}>|</p>
                    <img
                        style={{
                            width: '15px',
                            height: '15px',
                            marginTop: "5%",
                            marginRight: '0%',


                        }}
                        src={pen}
                        onClick={() => setValueBox(!valueBox)}
                    />

                </div>
                {valueBox && (<div className='Value-card'>
                    <Card >
                        <div style={{ display: 'flex' }}>
                            <h6 style={{ fontSize: '20px', color: 'black' }}>Carb Intake</h6>  <span style={{ margin: '2% 1% 0% 60%', fontSize: '30px' }} onClick={() => setValueBox(!valueBox)} >+</span>

                        </div>


                        <div>
                            <select  className="form-select" onChange={onChange2}>
                                {ArrayList(10,401).map(data => (
                                    <option value={data}>{data}</option>
                                ))}

                            </select>


                         
                        </div>


                    </Card>
                </div>
                )}





            </div>
            <div className='bolus-main-div'>
                <div className='bolus-value-box'>
                    <h6 style={{ margin: '5% 1% 0% 2%', fontSize: '15px' }}>Insulin Sensitivity</h6>
                    <img
                        style={{
                            width: '15px',
                            height: '15px',
                            marginTop: "5%",
                            marginRight: '0%',
                        }}
                        src={info2}
                    />
                    <p style={{ fontSize: '20px', margin: "3.5% 0% 0% 37%", color: 'gray' }}>0.0</p>
                    <p style={{ margin: "5% 0% 0% 0%" }}>md/dl &nbsp; </p>
                    <p style={{ color: 'gray', margin: '5% 1% 0% 1%' }}>|</p>
                    <img
                        style={{
                            width: '15px',
                            height: '15px',
                            marginTop: "5%",
                            marginRight: '0%',


                        }}
                        src={pen}
                        
                    />

                </div>
                <div className={style}><h1 onClick={changeStyle}>ADVANCE OPTION</h1></div>
                {advance && (
                    <div className='bolus-value-box'>
                        <h6 style={{ margin: '5% 1% 0% 2%', fontSize: '15px' }}>Active Insulin</h6>
                        <img
                            style={{
                                width: '15px',
                                height: '15px',
                                marginTop: "5%",
                                marginRight: '0%',
                            }}
                            src={info2}
                        />
                        <p style={{ fontSize: '20px', margin: "3.5% 0% 0% 45%", color: 'gray' }}>{ActiveInsulin}</p>
                        <p style={{ margin: "5% 0% 0% 0%" }}>unit &nbsp; </p>
                        <p style={{ color: 'gray', margin: '5% 1% 0% 1%' }}>|</p>
                        <img
                            style={{
                                width: '15px',
                                height: '15px',
                                marginTop: "5%",
                                marginRight: '0%',


                            }}
                            src={pen}
                            onClick={() => setValueBox2(!valueBox2)}
                        />

                    </div>
                    
                    )}
                    { valueBox2 && ( <div className='Insul-Value-div'>
                    <Card >
                        <div style={{ display: 'flex' }}>
                            <h6 style={{ fontSize: '20px', color: 'black' }}>Insulin Intake</h6>  <span style={{ margin: '2% 1% 0% 60%', fontSize: '30px' }} onClick={() => setValueBox2(!valueBox2)} >+</span>

                        </div>


                        <div>
                            <select style={{width:'100%',height:'40px'}} onChange={onChange}>
                                {ArrayList(0,26).map(data => (
                                    <option value={data} >{data}</option>
                                ))}

                            </select>


                        
                        </div>


                    </Card>
                    </div>
                   ) }
                   
            </div>
            
         
        
             
            {advance && (
            <div className='bolus-main-div'>

                <div className='bolus-value-box'>
                    <h6 style={{ margin: '5% 1% 0% 2%', fontSize: '15px' }}>Target BG</h6>
                    <img
                        style={{
                            width: '15px',
                            height: '15px',
                            marginTop: "5%",
                            marginRight: '0%',
                        }}
                        src={info2}
                    />
                    <p style={{ fontSize: '20px', margin: "3.5% 0% 0% 50%", color: 'gray' }}>{TargetBG}</p>
                    <p style={{ margin: "5% 0% 0% 0%" }}>md/dl &nbsp; </p>
                    <p style={{ color: 'gray', margin: '5% 1% 0% 1%' }}>|</p>
                    <img
                        style={{
                            width: '15px',
                            height: '15px',
                            marginTop: "5%",
                            marginRight: '0%',


                        }}
                        src={pen}
                        onClick={() => setValueBox4(!valueBox4)}
                    />

                </div>
                
                { valueBox4 && 
                ( <div className='Insul-Value-div'>
                    <Card >
                        <div style={{ display: 'flex' }}>
                            <h6 style={{ fontSize: '20px', color: 'black' }}>Target BG</h6>  <span style={{ margin: '2% 1% 0% 60%', fontSize: '30px' }} onClick={() => setValueBox4(!valueBox4)} >+</span>

                        </div>


                        <div>
                            <select style={{width:'100%',height:'40px'}} onChange={onChange3}>
                                {ArrayList(0,251).map(data => (
                                    <option value={data}>{data}</option>
                                ))}

                            </select>


                        
                        </div>


                    </Card>
                    </div>
                   ) }




            
                <div className='bolus-value-box'>
                    <h6 style={{ margin: '5% 1% 0% 2%', fontSize: '15px' }}>Current BG</h6>
                    <img
                        style={{
                            width: '15px',
                            height: '15px',
                            marginTop: "5%",
                            marginRight: '0%',
                        }}
                        src={info2}
                    />
                    <p style={{ fontSize: '20px', margin: "3.5% 0% 0% 50%", color: 'gray' }}>{CurrentBG}</p>
                    <p style={{ margin: "5% 0% 0% 0%" }}>xyz &nbsp; </p>
                    <p style={{ color: 'gray', margin: '5% 1% 0% 1%' }}>|</p>
                    <img
                        style={{
                            width: '15px',
                            height: '15px',
                            marginTop: "5%",
                            marginRight: '0%',


                        }}
                        src={pen}
                        onClick={() => setValueBox3(!valueBox3)}
                    />

                </div>
                { valueBox3 && ( <div className='Insul-Value-div'>
                    <Card >
                        <div style={{ display: 'flex' }}>
                            <h6 style={{ fontSize: '20px', color: 'black' }}>Current BG</h6>  <span style={{ margin: '2% 1% 0% 60%', fontSize: '30px' }} onClick={() => setValueBox3(!valueBox3)} >+</span>

                        </div>


                        <div>
                            <select style={{width:'100%',height:'40px'}} onChange={onChange4} >
                                {ArrayList(0,301).map(data => (
                                    <option value={data}>{data}</option>
                                ))}

                            </select>


                        
                        </div>


                    </Card>
                    </div>
                   ) }




            </div>
            )}
            <div>
                <button className='bolus-btn' onClick={() => setCalculate(!calculates)}>CALCULATE</button>
            </div>

        </div>
    )
}

export default BolusForm
