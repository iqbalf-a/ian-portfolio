import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-20 flex justify-between py-4 items-center px-6 md:px-20 bg-white shadow-sm">
            <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-yellow-500 transition-colors text-white rounded-full">
                    <p className="font-semibold">i</p>
                </div>
                <div className="text-sm">
                    <p className="font-semibold text-gray-800">iann</p>
                    <p className="text-gray-700">-</p>
                </div>
            </div>

            {/* Hamburger button — mobile only */}
            <div className="md:hidden">
                <button
                    className="text-gray-800"
                    aria-label="Toggle Menu"
                    onClick={() => setIsMenuOpen(prev => !prev)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Desktop nav */}
            <ul className="hidden md:flex justify-center font-semibold gap-16 text-gray-600 text-sm items-center">
                <li><a href="#skills" className="hover:text-gray-800">My Tools</a></li>
                <li><a href="#projects" className="hover:text-gray-800">Projects</a></li>
                <li><a href="#experience" className="hover:text-gray-800">Experience</a></li>
                <li><a href="#contact" className="hover:text-gray-800">Contact</a></li>
            </ul>

            {/* Mobile dropdown */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-white shadow-lg z-10 mt-2 rounded-lg`}>
                <ul className="flex flex-col items-center gap-6 text-gray-600 text-sm py-4">
                    <li><a href="#skills" className="hover:text-gray-800" onClick={closeMenu}>My Tools</a></li>
                    <li><a href="#projects" className="hover:text-gray-800" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#experience" className="hover:text-gray-800" onClick={closeMenu}>Experience</a></li>
                    <li><a href="#contact" className="hover:text-gray-800" onClick={closeMenu}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
