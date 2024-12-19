import React from "react";
import SocialMediaFollow from "../sections/SocialMediaFollow";
import HeroSection from "../sections/HeroSection";
import Specialization from "../sections/Specialization";
import Skills from "../sections/Skills";
import Portfolio from "../sections/Portfolio";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";
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
            <Contact />
            <Footer/>

        </div>

    )
}

export default HomePage;