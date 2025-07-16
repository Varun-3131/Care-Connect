import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import DoctorPage from "./pages/DoctorPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import MyAppointments from "./pages/MyAppointments.jsx";
import Appointment from "./pages/Appointment.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <div className="mx-4 sm:mx-[10%]">

            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/doctors" element={<DoctorPage/>} />
                <Route path="/doctors/:speciality" element={<HomePage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/my-profile" element={<MyProfile/>} />
                <Route path="/my-appointments" element={<MyAppointments/>} />
                <Route path="/appointment/:docId" element={<Appointment/>} />
            </Routes>
            <Footer/>
        </div>
    )
}

export default App;

