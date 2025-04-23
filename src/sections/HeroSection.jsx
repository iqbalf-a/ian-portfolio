import React from 'react';
import BlobProfile from "../assets/blob.svg";

const HeroSection = () => {
    return (
        <div className="block md:flex px-12 md:px-48 w-full justify-between items-center bg-gradient-to-r from-cyan-50 to-blue-50 md:mt-6 mt-16 pt-4">
            <div className="flex-1 py-4 md:py-6">
                <p className="font-semibold text-xl">Hello gaes</p>
                <div className="mt-8">
                    <p className="text-6xl font-semibold">david</p>
                    <p className="text-6xl font-semibold">disini</p>
                </div>
                <div className="flex items-center mt-8 gap-8">
                    <a href="/" className="flex gap-2 px-4 md:px-8 py-2 md:py-4 bg-blue-500 rounded-lg text-white text-base font-semibold hover:bg-yellow-500 shadow-xl transition-colors">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                            <p className='text-sm md:text-base'>Download CV</p>
                        </div>
                    </a>
                    {/* <a href="/" className="text-base underline">See Portfolio</a> */}
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center">
                <img src={BlobProfile} alt="Profile Blob" width="550" height="550" />
            </div>
        </div>
    )
}

export default HeroSection;