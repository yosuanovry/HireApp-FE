import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AuthLogin from "../Pages/Auth/Login/Login"
import AuthRegisterPekerja from "../Pages/Auth/Register/registerPekerja";
import AuthRegisterPerekrut from "../Pages/Auth/Register/registerPerekrut"
import AuthConfirPassword from "../Pages/Auth/ResetPassword/confirPass"
import AuthSendEmail from "../Pages/Auth/ResetPassword/sendEmail"
import AuthSendOtp from "../Pages/Auth/ResetPassword/sendOtp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="home" replace="true" />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="/auth/registerPekerja" element={<AuthRegisterPekerja />} />
        <Route path="/auth/registerPerekrut" element={<AuthRegisterPerekrut />} />
        <Route path="/auth/confirPassword" element={<AuthConfirPassword />} />
        <Route path="/auth/sendEmail" element={<AuthSendEmail />} />
        <Route path="/auth/sendOtp" element={<AuthSendOtp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
