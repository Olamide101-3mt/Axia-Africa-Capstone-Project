import React from "react";
import LandingPage from "./Pages/LandingPage";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/login";
import Signup from "./Pages/Signup";
import ResetPassword from "./Pages/ResetPassword";

import DashboardHome from "./Pages/DashboardHome";
import Courses from "./Pages/Courses";
import Assignments from "./Pages/Assignments";
import Profile from "./Pages/Profile";



function App() {
  // return <LandingPage />;
   return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/reset-password" element={<ResetPassword />} />

       {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/profile" element={<Profile />} />
      
    </Routes>
  );
}



export default App;
