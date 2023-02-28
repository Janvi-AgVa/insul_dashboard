import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  forgetPassword,
  resetForgetPasswordState,
} from "../../store/action/AdminAction";

import { useDispatch, useSelector } from "react-redux";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { validateEmailHelper } from "../../helper/Emails";


export default function ForgetPassword() {
  const [forgetEmail, setForgetEmail] = useState("");
  const [forgetEmailErr, setForgetEmailErr] = useState(null);

  const dispatch = useDispatch();
  const handleForgetPassword = () => {
    const isEmailValid = validateEmailHelper(forgetEmail);
    // console.log(`forget email ${forgetEmail}`)
    if (isEmailValid.isSuccess) {
      setForgetEmail(forgetEmail);
      dispatch(forgetPassword(forgetEmail));
      return isEmailValid.isSuccess;
    }
    if (!isEmailValid.isSuccess && !isEmailValid.isEmail) {
      setForgetEmailErr(isEmailValid.message);
      return isEmailValid.isSuccess;
    }
    if (!isEmailValid.isSuccess && isEmailValid.isEmail) {
      setForgetEmailErr(isEmailValid.message);
      return isEmailValid.isSuccess;
    }
    setForgetEmailErr(null);
  };

  const forgetPasswordReducer = useSelector(
    (state) => state.forgetPasswordReducer
  );

  // console.log("forgetPasswordReducer", forgetPasswordReducer);

  const { loading, error, forgetPasswordInfo } = forgetPasswordReducer;
  const navigate = useNavigate();

  if (error) {
    toast.error(error);
  }

  if (forgetPasswordInfo && forgetPasswordInfo.success) {
    toast.success(forgetPasswordInfo.message);
    localStorage.setItem("forgetEmail", JSON.stringify(forgetEmail));
    // clear forget password reducer
    dispatch(resetForgetPasswordState());
    navigate("/resetpassword");
  }

  return (
    <>
      <Toaster />
      <section
        style={{
          display: "flex",
          backgroundColor:"#363556",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
       
          <section
          style={{
          backgroundColor:"white",
          height:"50%",
          width:"50%"
          }}
          >
            <div className="Login-title"
            style={{
            fontSize:"35px",
            fontFamily:"Roboto",
            fontWeight:"bold",
            color:"#363556",
            marginLeft:"30%"

            }}>
              <p>Forgot Password</p>
            </div>
            <div className="Form-card">
              <form>
                <div>
                 
                  <input
                  style={{
                   padding:"1% 8% 1% 8%",
                   marginLeft:"28%"
                   
                  }}
                    type="email"
                    value={forgetEmail}
                    onChange={(e) => setForgetEmail(e.target.value)}
                    className="form-control LoginForminput "
                    autoComplete="Enter your email"
                    placeholder="Enter your email"
                  />
                </div>
                {forgetEmailErr != null ? (
                  <small style={{ color: "red" }}>{forgetEmailErr}</small>
                ) : forgetEmailErr ? (
                  <small style={{ color: "red" }}>{forgetEmailErr}</small>
                ) : (
                  ""
                )}
                <section
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  
                    <Button
                      style={{
                        
                      marginTop:'4%',
                      
                      backgroundColor:'#363556',
                      padding:'2%',
                      color:'white',
                      width: "20%",
                      fontSize:'15px',
                      borderRadius:'25px',
                      border:'0px',
                      boxShadow: '2px 2px 5px grey'
                      }}
                      className="mt-4"
                      onClick={handleForgetPassword}
                    >
                      Send Email
                    </Button>
                 
                </section>
              </form>
            </div>
          </section>
     
      </section>
    </>
  );
}
