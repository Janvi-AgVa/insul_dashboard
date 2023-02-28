import React, { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Style from "../../css/Login.module.css";
import { loginWithEmail } from "../../store/action/AdminAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validateEmailHelper } from "../../helper/Emails";
import Container from 'react-bootstrap/Container';
import email from "../../asset/img/email.png"
import password from "../../asset/img/lock.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Col from 'react-bootstrap/Col';


const cookies = new Cookies();

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    email: localStorage.getItem("adminUserName")
      ? JSON.parse(localStorage.getItem("adminUserName"))
      : "",
    password: localStorage.getItem("adminUserCredential")
      ? JSON.parse(localStorage.getItem("adminUserCredential"))
      : "",
  });
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [setErrorPassword, setSetErrorPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const adminLoginReducer = useSelector((state) => state.adminLoginReducer);
  const {  error, adminInfo } = adminLoginReducer;
  const navigate = useNavigate();

  // VALIDATE EMAIL
  const validateEmail = (email) => {
    const isEmailValid = validateEmailHelper(email);
    if (isEmailValid.isSuccess) {
      setLoginForm({
        ...loginForm,
        email,
      });

      return isEmailValid.isSuccess;
    }
    if (!isEmailValid.isSuccess && !isEmailValid.isEmail) {
      setEmailError(isEmailValid.message);
      return isEmailValid.isSuccess;
    }
    if (!isEmailValid.isSuccess && isEmailValid.isEmail) {
      setEmailError(isEmailValid.message);
      return isEmailValid.isSuccess;
    }
    setEmailError(null);
    return true;
  };

  // PASSWORD VALIDATE
  const validatePassword = (password) => {
    if (!password) {
      setPasswordError("Please enter your password.");
      return false;
    }
   
    setLoginForm({
      ...loginForm,
      password: password,
    });
    setPasswordError(null);
    return true;
  };

  // HANDLE SUBMIT AND DISPATCH
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = validateEmail(loginForm.email);
    const password = validatePassword(loginForm.password);

    if (email && password) {
      dispatch(loginWithEmail(loginForm.email, loginForm.password));
    }
  };
  // console.log(cookies.get('ddAdminToken'))
  useEffect(() => {
    if (cookies.get('ddAdminToken')) {
      navigate("/home");
    }
  }, [navigate, adminInfo]);

  useEffect(() => {
    setSetErrorPassword(error);
  }, [error]);

  return (
    <>
       <Container style={{margin:'0%',padding:'0%'}}>
        <section >
          <Col style={{
            display: 'flex',
            flexDirection:'row',
            height: '100vh',
           
          }}>
            <Col  style={{
              backgroundColor: "#363556",
              width: "100vh",
              marginLeft:'0%',
              color: 'white'

            }}>
              <div className='welcome-container'>
                <h1 className='ProjectName' style={{
                  paddingTop: '5%',
                  paddingLeft: '10%',
                  fontSize: '45px',
                  fontFamily: 'Arial',
                  color:'white'
                }}>
                  InsuLink
                </h1>
                <div className="ProjectDescription" style={{
                  paddingTop: '45%',
                  paddingLeft: '5%',
                  textAlign: 'center',
                  fontFamily: 'Arial'
                }}>
                  <h1 style={{
                    fontSize: '45px',
                    margin: '1% ',
                    color:'white'
                  }}>
                    Welcome
                  </h1>
                  <h6 style={{
                    fontSize: '20px',
                    margin: '0%',
                    paddingBottom: '20%',
                    color:'white'

                  }}>
                    Get into your account using your email
                  </h6>
                </div>
              </div>
            </Col>
            <Col >
              <div className='formContainer'>

                <form className="SignIn-Form" style={{
                  height: '100%',
                  width: '100%',
                  paddingTop: '25%',
                  paddingLeft: '50%',
                  fontFamily: 'Avenir',


                }}>

                  <h1 style={{
                    margin: '0%',
                    fontSize: '45px',
                    color: '#363556'
                  }} >Sign in to InsuLink</h1>

                  <section style={{
                    paddingTop: '30%'
                  }}>
                    <div>
                      
                      <input
                        style={{
                          zIndex:'1',
                          padding: '10px',
                          paddingRight: '40%',
                          marginBottom: '5%',
                          border: '0.2px ',
                          borderRadius: '2px',
                          boxShadow: '2px 2px 5px grey',
                          fontFamily:'FontAwesome',
                          
                          
                          
                        }}
                        type="email"
                        className="form-control LoginForminput "
                        placeholder="&#xf0e0; Email"
                        autoComplete="Enter your email"
                        onChange={(e) =>
                          setLoginForm({ ...loginForm, email: e.target.value }
                        )}
                        value={loginForm.email}
                      />
                      {/* <img
                        style={{
                        top:'52%',
                        marginLeft:'0.5%',
                        height:'15px',
                        width:'15px',
                        position:'absolute',
                        zIndex:'2'
                       
                        }}
                        src={email}
                      ></img> */}
                    </div>
                    

                    <div>
                      <input
                        style={{

                          padding: '10px',
                          paddingRight: '40%',
                          marginBottom:'1%',
                          border: '0.2px ',
                          borderRadius: '2px',
                          boxShadow: '2px 2px 5px grey',
                          fontFamily:'FontAwesome',
                        }}
                        type="password"
                        className="form-control LoginForminput "
                        placeholder="&#xf023; Password"
                        autoComplete="Enter your password"
                        onChange={(e) =>
                          setLoginForm({ ...loginForm, password: e.target.value })
                        }
                        value={loginForm.password}
                      />
                       {/* <img
                        style={{
                        top:'61%',
                        marginLeft:'0.5%',
                        height:'20px',
                        width:'15px',
                        position:'absolute'
                        }}
                        src={password}
                      ></img> */}
                    </div>
                    
                    <Link
                    to="/forgetPassword"
                    style={{
                    color:'#363556',
                    margin:'0%',
                    marginLeft:'66%',
                    fontSize:'12px'
                    }}
                    className="cpactiveText"
                  >
                    Forget Password?
                  </Link>
                   
                    <div>
                    <Button
                      style={{
                      marginTop:'20%',
                      marginLeft:'10%',
                      backgroundColor:'#363556',
                      paddingTop:'2%',
                      paddingBottom:'2%',
                      paddingRight:'10%',
                      paddingLeft:'10%',
                      color:'white',
                      width: "60%",
                      fontSize:'20px',
                      borderRadius:'25px',
                      border:'0px',
                      boxShadow: '2px 2px 5px grey'
                      }}
                      type="submit"
                      className="mt-4"
                      onClick={(e) => handleSubmit(e)}
                    >
                     SIGN IN
                    </Button>
                    </div>
                 
                  </section>
                  <p style={{
                      fontSize:'15px',
                      color:'black',
                      margin:'2% 15%',
                      color:'#363556'
                      }}>Don't have an account?<Link to='/register'>Register</Link></p>

                </form>
              </div>

            </Col>
          </Col>



        </section>
      </Container>
    </>
  );
}
