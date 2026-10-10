import React from 'react';
import BlobProfile from "../assets/blob-char3d.png";

const HeroSection = () => {
    return (
        <div className="items-center justify-between block w-full px-6 pt-4 mt-16 md:flex md:px-48 bg-gradient-to-r from-cyan-50 to-blue-50 md:mt-6">
            <div className="flex-1 py-4 md:py-6">
                <p className="text-xl font-semibold">Hello world, I'm</p>
                <div className="mt-8">
                    <p className="text-3xl md:text-6xl font-semibold">Moh. Iqbal Firman Ardiansyah</p>
                </div>
                <p className="mt-4 text-gray-600 text-lg max-w-md">Full-stack developer with a passion for building clean applications and ensuring quality at scale.</p>
                <div className="flex items-center gap-8 mt-8">
                    <a
                        href="/cv.pdf"
                        download
                        className="flex gap-2 px-4 py-2 text-base font-semibold text-white transition-colors bg-blue-500 rounded-lg shadow-xl md:px-8 md:py-4 hover:bg-yellow-500"
                    >
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            <p className="text-sm md:text-base">Download CV</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="flex items-center justify-center flex-1 py-6 md:py-12">
                <img src={BlobProfile} alt="Profile" className="w-full max-w-xs md:max-w-lg" />
            </div>
        </div>
    );
};

export default HeroSection;
