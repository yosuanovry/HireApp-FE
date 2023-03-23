import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from '../Pages/Home/landingPage';
import HomePerekrut from "../Pages/Home/homePerekrut";
import HomePerekrutSort from "../Pages/Home/homePerekrutSort";
import AuthLoginPekerja from "../Pages/Auth/Login/loginPekerja";
import AuthLoginPerekrut from "../Pages/Auth/Login/loginPerekrut";
import AuthRegisterPekerja from "../Pages/Auth/Register/registerPekerja";
import AuthRegisterPerekrut from "../Pages/Auth/Register/registerPerekrut";
import AuthConfirmPassword from "../Pages/Auth/ResetPassword/confirmPassword";
import AuthSendEmail from "../Pages/Auth/ResetPassword/sendEmail";
import AuthSendOtp from "../Pages/Auth/ResetPassword/sendOtp";
import EditProfileCorporate from "../Pages/Corporate/editProfileCorporate";
import EditProfileWorkers from "../Pages/Workers/editProfileWorkers";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="home" replace="true" />} />
        <Route path="/home" element={< Home />} />
        <Route path="/home-perekrut" element={< HomePerekrut />} />
        <Route path="/home-perekrut-sort" element={< HomePerekrutSort />} />
        <Route path="/auth/login-pekerja" element={<AuthLoginPekerja />} />
        <Route path="/auth/login-perekrut" element={<AuthLoginPerekrut />} />
        <Route path="/auth/register-pekerja" element={<AuthRegisterPekerja />} />
        <Route path="/auth/register-perekrut" element={<AuthRegisterPerekrut />} />
        <Route path="/auth/confirm-password" element={< AuthConfirmPassword />} />
        <Route path="/auth/send-email" element={<AuthSendEmail />} />
        <Route path="/auth/send-otp" element={<AuthSendOtp />} />
        <Route path="/edit/profile-corporate" element={<EditProfileCorporate />} />
        <Route path="/edit/profile-workers" element={<EditProfileWorkers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
