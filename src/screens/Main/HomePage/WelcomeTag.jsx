import React from 'react'
import { useSelector } from "react-redux";
function WelcomeTag() {
    const adminLoginReducer = useSelector((state) => state.adminLoginReducer);
    const { adminInfo } = adminLoginReducer;
  return (
    <div style={{color:'#363556',height:'5%',marginTop:'8%'}}>
    <p style={{margin:'5% 0% 0% 5%',fontSize:'25px'}}>Welcome back,&nbsp;{adminInfo && adminInfo.data && adminInfo.data.user && adminInfo.data.user.firstName}</p>
</div> 
  )
}

export default WelcomeTag
