import React from 'react'
import Header from "../components/Header.jsx";
import SpecialityMenu from "../components/SpecialityMenu.jsx";
import TopDoctors from "../components/TopDoctors.jsx";
import Banner from "../components/Banner.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
    return (
        <div>
            <Header />
            <SpecialityMenu />
            <TopDoctors />
            <Banner/>
        </div>
    )
}

export default HomePage;