import React from "react";
import SocialMediaFollow from "../sections/SocialMediaFollow";
import HeroSection from "../sections/HeroSection";
import Specialization from "../sections/Specialization";
import Skills from "../sections/Skills";
import Project from "../sections/Projects";
import Experiences from "../sections/Experiences";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";


const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <SocialMediaFollow />
            <Specialization />
            <Skills />
            <Project />
            <Experiences />
            <Contact />
            <Footer/>

            <BackToTopButton />

        </div>

    )
}

export default HomePage;