import React, { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { adminRegister } from "../../store/action/AdminAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validateEmailHelper } from "../../helper/Emails";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cookies = new Cookies();

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    country: "",
    password: "",
    cpassword: "",
  });
  const [fieldError, setfieldError] = useState(null);
  // const [lastNameError, setlastNameError] = useState(null);
  // const [genderError, setgenderError] = useState(null);
  // const [phoneError, setphoneError] = useState(null);
  // const [countryError, setcountryError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState({
    password: null,
    cpassword: null,
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    cpassword: false,
  });
  const setResponseError = useState(null)[1];

  const dispatch = useDispatch();
  const adminRegisterReducer = useSelector(
    (state) => state.adminRegisterReducer
  );
  const { loading, error, data } = adminRegisterReducer;
  // VALIDATE EMAIL
  const validateEmail = (email) => {
    const isEmailValid = validateEmailHelper(email);
    if (isEmailValid.isSuccess) {
      setRegisterForm({
        ...registerForm,
        email,
      });
      setEmailError(null);
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
  const validatePassword = (password, cpassword) => {
    if (!password) {
      setPasswordError({
        ...passwordError,
        password: "Please enter your password.",
      });
      return false;
    } else {
      setPasswordError({ ...passwordError, password: null });
    }
    if (!cpassword) {
      setPasswordError({
        ...passwordError,
        cpassword: "Please enter your Confirm password.",
      });
      return false;
    } else {
      // console.log('cpassword available')
      setPasswordError({ ...passwordError, cpassword: null });
    }
    if (password !== cpassword) {
      setPasswordError({
        password: "Password does not match with confirm password.",
        cpassword: "Confirm password does not match with password.",
      });
      return false;
    } else {
      setPasswordError({ password: null, cpassword: null });
    }

    setRegisterForm({
      ...registerForm,
      password: password,
    });
    setPasswordError({
      password: null,
      cpassword: null,
    });
    return true;
  };

  // HANDLE SUBMIT AND DISPATCH
  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("registerForm", registerForm);
    const email = validateEmail(registerForm.email);
    const password = validatePassword(
      registerForm.password,
      registerForm.cpassword
    );
    const name=registerForm.name;
    const lastName = registerForm.lastName;
    const phone = registerForm.phone;
    const gender = registerForm.gender;
    const country = registerForm.country;
    

    if (!registerForm.name || !registerForm.lastName || !registerForm.phone || !registerForm.gender || !registerForm.country) {
      setfieldError("Please fill all the fields");
      return false;
    } else {
      setfieldError(null);
    }
    // if (!registerForm.lastName) {
    //   setlastNameError("Please check user name field");
    //   return false;
    // } else {
    //   setlastNameError(null);
    //   setlastNameError(null);
    // }
    // if (!registerForm.phone) {
    //   setphoneError("Please check user name field");
    //   return false;
    // } else {
    //   setphoneError(null);
    //   setphoneError(null);
    // }
    // if (!registerForm.gender) {
    //   setgenderError("Please check user name field");
    //   return false;
    // } else {
    //   setgenderError(null);
    //   setgenderError(null);
    // }
    // if (!registerForm.country) {
    //   setcountryError("Please check user name field");
    //   return false;
    // } else {
    //   setcountryError(null);
    //   setcountryError(null);
    // }
    if (name && email && password && lastName && phone && country && gender) {
      dispatch(
        adminRegister(
          registerForm.name,
          registerForm.lastName,
          registerForm.email,
          registerForm.phone,
          registerForm.gender[0],
          registerForm.country,
          registerForm.password,
          history
        )
      );
    }
  };


  useEffect(() => {
    if (cookies.get('ddAdminToken')) {
      history("/");
    }
  }, [history, data]);

  useEffect(() => {
    setResponseError(error);

    // @@ CLEANING UP ALL ERROR RESPONSE AND CUSTOM ERROR WITH API HIT
    return () => {
      setResponseError(null);
      // setEmailError(null);
    };
  }, [error]);

  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
    return canBeSubmitted();
  };

  const canBeSubmitted = () => {
    return isChecked ? setIsDisabled(true) : setIsDisabled(false);
  };
  return (
   
    
        <section style={{margin:'0%',padding:'0%',width:'100%'}}>
          <Col style={{
            display: 'flex',
            flexDirection:'row',
            width:'100%',
            height: '100%',
            
            
          }}>
            <Row style={{
              width: "70%",
              color: 'white',
              
            
            }}>
              <div className='formContainer'>

                <form className="SignIn-Form" style={{
                  height: '100%',
                  width: '80%',
                  marginTop: '5%',
                  paddingLeft: '10%',
                  fontFamily: 'Avenir',
                 
                }}>

                  <h1 style={{
                    margin: '0%',
                    marginLeft: '20%',
                    fontSize: '45px',
                    color: '#363556'
                  }} >Create Account</h1>

                  <section style={{
                    paddingTop: '5%',

                  }}>
                    <div>
                      <table>
                        <tbody>
                          <tr>

                            <td>
                              <div>

                                <input
                                  style={{
                                    margin: '0%',
                                    padding: '15px',
                                    marginBottom: '10%',
                                    marginLeft: '20%',
                                    border: '0.2px ',
                                    borderRadius: '2px',
                                    boxShadow: '2px 2px 5px grey',
                                    fontFamily:'FontAwesome',
                                  }}
                                  type="text"
                                  className="form-control registerForminput "
                                  placeholder="&#xf007; Name"
                                  autoComplete="Name"
                                  onChange={(e) =>
                                    setRegisterForm({ ...registerForm, name: e.target.value })
                                  }
                                  value={registerForm.name}
                                />
                              </div>
                              {/* {nameError && <p style={{ color: "red" }}>{nameError}</p>} */}

                            </td>
                            <td>

                              <div>

                                <input
                                  style={{
                                    margin: '0%',
                                    padding: '15px',
                                    marginBottom: '10%',
                                    marginLeft: '50%',
                                    
                                    border: '0.2px ',
                                    borderRadius: '2px',
                                    boxShadow: '2px 2px 5px grey',
                                    fontFamily:'FontAwesome',
                                  }}
                                  type="text"
                                  className="form-control registerForminput "
                                  placeholder="&#xf007; Last Name"
                                  autoComplete="Last Name"
                                  onChange={(e) =>
                                    setRegisterForm({ ...registerForm, lastName: e.target.value })
                                  }
                                  value={registerForm.lastName}
                                />
                              </div>
                              {/* {lastNameError && <p style={{ color: "red" }}>{lastNameError}</p>} */}

                            </td>

                          </tr>
                          <tr>

                            <td>
                              <div>
                                <input
                                  style={{
                                    margin: '0%',
                                    padding: '15px',
                                    marginBottom: '10%',
                                    marginLeft: '20%',
                                    border: '0.2px ',
                                    borderRadius: '2px',
                                    boxShadow: '2px 2px 5px grey',
                                    fontFamily:'FontAwesome',
                                  }}

                                  type="email"
                                  className="form-control registerForminput "
                                  placeholder="&#xf0e0; Email"
                                  autoComplete="Email"
                                  onChange={(e) =>
                                    setRegisterForm({
                                      ...registerForm,
                                      email: e.target.value,
                                    })
                                  }
                                  value={registerForm.email}
                                />
                              </div>
                              {emailError && <p style={{ color: "red" }}>{emailError}</p>}
                            </td>
                            <td>
                              <div>

                                <input
                                  style={{
                                    margin: '0%',
                                    padding: '15px',
                                    marginBottom: '10%',
                                    marginLeft: '50%',
                                    border: '0.2px ',
                                    borderRadius: '2px',
                                    boxShadow: '2px 2px 5px grey',
                                    fontFamily:'FontAwesome',
                                  }}
                                  type="text"
                                  className="form-control registerForminput "
                                  placeholder="&#xf095; Contact"
                                  autoComplete="Contact"
                                  onChange={(e) =>
                                    setRegisterForm({ ...registerForm, phone: e.target.value })
                                  }
                                  value={registerForm.phone}
                                />
                              </div>
                              {/* {phoneError && <p style={{ color: "red" }}>{phoneError}</p>} */}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div>
                                <input
                                  style={{
                                    margin: '0%',
                                    padding: '15px',
                                    marginBottom: '10%',
                                    marginLeft: '20%',
                                    border: '0.2px ',
                                    borderRadius: '2px',
                                    boxShadow: '2px 2px 5px grey',
                                    fontFamily:'FontAwesome',
                                  }}

                                  type="text"
                                  className="form-control registerForminput "
                                  placeholder="&#xe548; Gender"
                                  autoComplete="Gender"
                                  onChange={(e) =>
                                    setRegisterForm({
                                      ...registerForm,
                                      gender: e.target.value,
                                    })
                                  }
                                  value={registerForm.gender}
                                />
                              </div>
                              {/* {genderError && <p style={{ color: "red" }}>{genderError}</p>} */}
                            </td>
                            <td>
                              <div>
                                <input
                                  style={{
                                    margin: '0%',
                                    padding: '15px',
                                    marginBottom: '10%',
                                    marginLeft: '50%',
                                    border: '0.2px ',
                                    borderRadius: '2px',
                                    boxShadow: '2px 2px 5px grey',
                                    fontFamily:'FontAwesome',
                                  }}
                                  type="text"
                                  className="form-control registerForminput "
                                  placeholder="&#xf0ac; Country"
                                  autoComplete="Country"
                                  onChange={(e) =>
                                    setRegisterForm({ ...registerForm, country: e.target.value })
                                  }
                                  value={registerForm.country}
                                />
                              </div>
                              {/* {countryError && <p style={{ color: "red" }}>{countryError}</p>} */}
                            </td>

                          </tr>
                          <tr>
                            <tb>
                              <div>

                                <input
                                  style={{
                                    margin: '0%',
                                    padding: '15px',
                                    marginBottom: '10%',
                                    marginLeft: '20%',
                                    border: '0.2px ',
                                    borderRadius: '2px',
                                    boxShadow: '2px 2px 5px grey',
                                    fontFamily:'FontAwesome',
                                  }}
                                  type="password"
                                  className="form-control registerForminput "
                                  placeholder="&#xf023; Password"
                                  autoComplete="Enter your password"
                                  onChange={(e) =>
                                    setRegisterForm({
                                      ...registerForm,
                                      password: e.target.value,
                                    })
                                  }
                                  value={registerForm.password}
                                />

                              </div>
                              {/* {passwordError.password && (
                                <p style={{ color: "red" }}>{passwordError.password}</p>
                              )} */}


                            </tb>
                            <td>
                              <div>
                                <input
                                  style={{
                                    margin: '0%',
                                    padding: '15px',
                                    marginBottom: '10%',
                                    marginLeft: '50%',
                                    border: '0.2px ',
                                    borderRadius: '2px',
                                    boxShadow: '2px 2px 5px grey',
                                    fontFamily:'FontAwesome ',
                                  
                                  }}
                                  type="password"
                                  className="form-control registerForminput "
                                  placeholder="&#xf023; Confirm Password"
                                  autoComplete="Confirm your password"
                                  onChange={(e) =>
                                    setRegisterForm({
                                      ...registerForm,
                                      cpassword: e.target.value,
                                    })
                                  }
                                  value={registerForm.cpassword}
                                />

                              </div>
                              {fieldError && <p style={{ color: "red", margin: '0%',
                                    
                                    marginLeft: '50%' }}>{fieldError}</p>} 
                              {passwordError.cpassword && (
                                <p style={{ color: "red" }}>{passwordError.cpassword}</p>
                              )}
                            </td>



                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div 
                    style={{
                      display:'flex',
                      
                    }}
                    >
                      <input
                      style={{
                      margin:'5% 0% 5% 10%'
                      
                      }}
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleOnChange}
                      />
                      <p style={{
                      fontSize:'18px',
                      color:'black',
                      margin:'5% 1%'
                      }}>
                      I here by agree that the detail provided are legitimate and verified
                      </p>
                    </div>
                    <div>
                      <Button
                        style={{
                        marginTop:'3%',
                          marginLeft: '50%',
                          backgroundColor: '#363556',
                          padding: '2%',
                          color: 'white',
                          width: "30%",
                          fontSize: '20px',
                          borderRadius: '25px',
                          border: '0px',
                          boxShadow: '2px 2px 5px grey'
                        }}
                        type="submit"
                        disabled={isDisabled}
                        onClick={(e) => handleSubmit(e)}
                      >
                        SIGN IN
                      </Button>
                    </div>
                    <p style={{
                      fontSize:'15px',
                      color:'black',
                    
                      marginLeft:'40%',
                      color:'#363556'
                      }}>Already have an account?<Link to='/login'>Login here</Link></p>
                  </section>

                </form>
              </div>

            </Row>
            <Row  style={{
            
              backgroundColor: "#363556",
              width: '50%',
              color: 'white',
            }}>
              <div className='welcome-container' style={{}}>
                <h1 className='ProjectName' style={{
                  paddingTop: '5%',
                  paddingLeft: '30%',
                  fontSize: '45px',
                  fontFamily: 'Arial',
                  color:'white'
                }}>
                  InsuLink
                </h1>
                <div className="ProjectDescription" style={{
                  paddingTop: '20%',
                  paddingLeft: '10%',
                  textAlign: 'center',
                  fontFamily: 'Arial'
                }}>
                  <h1 style={{
                    fontSize: '45px',
                    margin: '0%',
                    color:'white'
                  }}>
                    Create an Account
                  </h1>
                  <h6 style={{
                    fontSize: '20px',
                    margin: '0%',
                    paddingBottom: '20%',
                    color:'white'

                  }}>
                    Provide your personal information to help <br />
                    us build an account for you
                  </h6>
                </div>
              </div>
            </Row>
          </Col>
        </section>
    
   
  );
};

export default Register;
