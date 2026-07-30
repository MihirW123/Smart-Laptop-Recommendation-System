import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import Questionnaire from "./Questionnaire";
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./admin/AdminDashboard";

import OTPVerification from "./pages/OTPVerification";
import "./LoginPage.css";
import "./Questionnaire.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify-otp"element={<OTPVerification />}/>
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;