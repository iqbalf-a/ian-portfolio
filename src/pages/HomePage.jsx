import React from "react";
import SocialMediaFollow from "../components/SocialMediaFollow";
import HeroSection from "../components/HeroSection";
import Specialization from "../components/Specialization";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Footer from "../components/Footer";


const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <SocialMediaFollow />
            <Specialization />
            <Skills />
            <Portfolio />
            <Experience />
            <Footer/>

        </div>

    )
}

export default HomePage;