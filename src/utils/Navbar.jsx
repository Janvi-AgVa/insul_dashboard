import React, { useState, useEffect } from 'react'
import Profile from '../asset/img/account.png'
import Arrow from '../asset/img/down-arrow.png'
import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import '../css/Navbar.css'
import { adminLogout } from "../store/action/AdminAction";
function Navbar() {
  const cookies = new Cookies();
  const Dispatch = useDispatch();
  // GETTING USER NAME
  const navigate = useNavigate();
  const adminLoginReducer = useSelector((state) => state.adminLoginReducer);
  // console.log('adminLoginReducer',adminLoginReducer)
  const [open,setOpen]=useState(false);
  const { adminInfo } = adminLoginReducer;
  useEffect(() => {
    if (!cookies.get('ddAdminToken')) {
      navigate("/");
    }

  }, []);
  const avatar = useState(
    adminInfo && adminInfo.data && adminInfo.data.user && adminInfo.data.user.firstName[0]
  )[0];
  // console.log(avatar)
  // Logout function
  const handlelogout = (e) => {
    e.preventDefault();
    Dispatch(adminLogout(navigate));
  };
  return (
    <section>


      <div className='Nav-div'  >
        <p className='Heading'>InsuLink</p>
        <div
          className='NavBar'
         
          onClick={()=>setOpen(!open)}
          >
          <img 
            className='Profile-Img'
            
            src={Profile}
            alt="profile-icon"
          />
          <div><p style={{
            color: 'white',
            fontSize:'15px'
          }}>
            {adminInfo && adminInfo.data && adminInfo.data.user && adminInfo.data.user.firstName}&nbsp;{adminInfo && adminInfo.data && adminInfo.data.user && adminInfo.data.user.lastName}
          </p>
          </div>
          <img
            style={{
            marginTop:'5%',
            marginLeft:'17%',
              width: "20px",
              height:"10px",
              filter: "invert(1)",
            }}
            src={Arrow}
            alt="arrow-icon"
          />
          </div>
          {open && (
            <div className='DropDown-Profile' >
            <Card className='Profile-Card-DropDown'>

              <Card.Body>
                <center style={{marginTop:'5%'}}>
                  <span class="dot">
                  <b style={{ fontSize:'20px',color:'#363556', alignItems:'center',}}>{avatar}</b></span>
                  <Card.Text style={{marginBottom:'20px'}}>
                    <p style={{
                      color: 'white',
                      margin: '10% 5% 5% 5%',
                      fontSize: '20px', width: '100%'

                    }}>
                      <b> {adminInfo && adminInfo.data && adminInfo.data.user && adminInfo.data.user.firstName}&nbsp;{adminInfo && adminInfo.data && adminInfo.data.user && adminInfo.data.user.lastName}
                      </b></p>
                    <p className='Email' style={{margin:'0%',padding:'0%'}}>
                      <Link style={{
                        color: 'white'
                      }}>{adminInfo && adminInfo.data && adminInfo.data.user && adminInfo.data.user.email}</Link>
                    </p>
                  </Card.Text>
                  <div style={{display:'flex'}} >
                  <Card.Text
                  className='sign-out'
                    onClick={(e) => {
                      handlelogout(e);
                    }}><button   style={{backgroundColor:'#353656', color: 'white',border:'0px'}}>Sign Out</button> &nbsp;&nbsp;</Card.Text>
                  <Card.Link href="/Profile" className='View-Profile'>|&nbsp;&nbsp;&nbsp;View Profile</Card.Link>
                  </div>
                </center>
              </Card.Body>
            </Card>
          </div>
          )}
          
        </div>
     
    </section>

  )
}

export default Navbar
