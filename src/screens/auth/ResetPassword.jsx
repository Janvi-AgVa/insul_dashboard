/* eslint-disable */

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { resetForgetPassword } from "../../store/action/AdminAction";
import { useNavigate } from "react-router-dom";
import Timer from "../analytics/Components/Timer";
import { forgetPassword } from "../../store/action/AdminAction";
import OtpInput from "./OtpInput";


export default function ResetPassword() {
  const [state, setState] = useState({
    otp: null,
    newPass: null,
    confirmPass: null,
  });

  const [showPassword, setShowPassword] = useState({
    new: false,
    confime: false,
  });

  const [stateErr, setStateErr] = useState({ err: null, inputErr: null });
  const [enableResendButton, setEnableResendButton] = useState(false);

  const resetPasswordReducer = useSelector(
    (state) => state.resetPasswordReducer
  );

  const handleEnableButton = () => {
    if (enableResendButton) setEnableResendButton(true);
    else setEnableResendButton(true);
  };
  const email = JSON.parse(localStorage.getItem("forgetEmail"));

  const handleResendButton = () => {
    setEnableResendButton(false);
    if (enableResendButton) {
      dispatch(forgetPassword(email));
    }
  };

  const { loading, data, error } = resetPasswordReducer;

  // console.log("resetPasswordReducer", resetPasswordReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (
      state.otp == null ||
      state.newPass == null ||
      !state.confirmPass == null
    ) {
      toast.error("Please provide all the required field!");
    } else if (state.otp && state.otp.length == 6) {
      if (state.newPass == state.confirmPass) {
        setStateErr({ err: null, inputErr: null });
        dispatch(resetForgetPassword({ email, resetData: state }));
      } else {
        setStateErr({
          inputErr: "New password and confirm password not matching",
        });
        toast.error(stateErr.inputErr);
      }
    } else if (stateErr.err) {
      setStateErr({ err: "Check OTP field!!" });
      toast.error(stateErr.err);
    } else {
      if (error) {
        toast.error("Please check all the credential!!");
      }
    }
  };

  if (data && data.success) {
    toast.success("Password reset done");
    localStorage.removeItem("forgetEmail");
    navigate("/login");
  }

  useEffect(() => { }, [enableResendButton]);
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
        
          <section style={{
          backgroundColor:"white",
          height:"60%",
          width:"30%"
          }}>
            <section className="Login-title" style={{
            fontSize:"35px",
            fontFamily:"Roboto",
            fontWeight:"bold",
            color:"#363556",
            marginLeft:"20%"

            }}>
              <p >Reset Password</p>
            </section>

            <section className="mt-4">
              {/*OTP section*/}
              <section style={{ marginLeft:"20%"}}>
                <p>Enter your OTP</p>
                <section >
                  <OtpInput setState={setState} state={state} />
                  {!enableResendButton ? (
                    <Timer
                      resetTimer={handleEnableButton}
                      initialMinute={1}
                      initialSeconds={59}
                    />
                  ) : (
                    ""
                  )}
                </section>
              </section>
            </section>

            <section className="Form-card" style={{ marginLeft:"20%",marginTop:"5%"}}>
              <form>
                <section >
                 
                  <input
                    type={showPassword.new ? "text" : "password"}
                    className="form-control LoginForminput "
                    placeholder="Enter your new password"
                    autoComplete="Enter you new password"
                    onChange={(e) =>
                      setState({ ...state, newPass: e.target.value })
                    }
                  />
                  
                </section>
                <section >
                 
                  <input
                    type={showPassword.confime ? "text" : "password"}
                    className="form-control LoginForminput"
                    placeholder="Confirm your new password"
                    autoComplete="Confirm your new password"
                    onChange={(e) =>
                      setState({ ...state, confirmPass: e.target.value })
                    }
                  />
                  
                
                </section>
                <section className="mt-4">
                  <p
                    style={{
                      textDecoration: "underline",
                      cursor: enableResendButton ? "pointer" : null,
                      color: enableResendButton
                        ? "#257d7c"
                        : "rgb(56, 56, 56, 0.5)",
                    }}
                    className={enableResendButton ? "cpactiveText" : null}
                    onClick={handleResendButton}
                  >
                    Resend OTP
                  </p>
                </section>

                <section >
                 
                    <Button className="mt-4" onClick={handleSubmit} style={{
                        
                        marginTop:'4%',
                        
                        backgroundColor:'#363556',
                        padding:'2%',
                        color:'white',
                        width: "50%",
                        fontSize:'15px',
                        borderRadius:'25px',
                        border:'0px',
                        boxShadow: '2px 2px 5px grey'
                        }}>
                      Reset Password
                    </Button>
               
                </section>
              </form>
            </section>
          </section>
       
      </section>
    </>
  );
}
