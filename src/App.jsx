import React from "react";
import "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/auth/Login";
import Main from "./screens/Main/HomePage/Main";
import Register from "./screens/auth/Register";
import ForgetPassword from "./screens/auth/ForgetPassword";
import ResetPassword from "./screens/auth/ResetPassword";
import Language from "./screens/Language";
import Setting from "./screens/Main/Setting"
import BolusWizard from "./screens/Main/Bolus/BolusWizard"
import Report from "./screens/Main/Report/Report"
import Profile from "./screens/Main/Profile/Profile"
import Protected from "./utils/Protected";
function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<Language />} />
          <Route exact path='/login' element={<Login />} />

          <Route exact path="/register" element={<Register />} />
          <Route exact path="/resetpassword" element={<ResetPassword />} />
          <Route exact path="/forgetPassword" element={<ForgetPassword />} />
          {/* Protected Route */}
          <Route element={<Protected />}>
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/bolus" element={<BolusWizard />} />
            <Route exact path="/setting" element={<Setting />} />
            <Route exact path="/report" element={<Report />} />
            <Route exact path="/home" element={<Main />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
