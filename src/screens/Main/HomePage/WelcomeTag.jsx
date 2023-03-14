import React from 'react'
import { useSelector } from "react-redux";
import '../../../css/Main/Welcome.css'
function WelcomeTag() {
    const adminLoginReducer = useSelector((state) => state.adminLoginReducer);
    const { adminInfo } = adminLoginReducer;
  return (
    <div style={{color:'#363556',height:'5%',marginTop:'8%'}}>
    <p className='Welcome' >Welcome back,&nbsp;{adminInfo && adminInfo.data && adminInfo.data.user && adminInfo.data.user.firstName}</p>
</div> 
  )
}

export default WelcomeTag
