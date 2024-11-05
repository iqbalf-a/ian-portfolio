import React from "react";
import SocialMediaFollow from "../components/SocialMediaFollow";
import HeroSection from "../components/HeroSection";
import Specialization from "../components/Specialization";
import Skills from "../components/Skills";

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <SocialMediaFollow />
            <Specialization />
            <Skills />

            {/* notes */}
            {/* <header>
    <!-- Navbar -->
</header>

<section id="hero">
    <!-- Hero Section -->
</section>

<section id="specialties">
    <!-- Specialties Section -->
</section>

<section id="skills">
    <!-- Skills Section -->
</section>

<section id="portfolio">
    <!-- My Portfolio Section -->
</section>

<section id="experience">
    <!-- Experience Section -->
</section>

<footer>
    <!-- Footer -->
</footer> */}
        </div>

    )
}

export default HomePage;