import React, { useState } from 'react';

const Navbar = () => {
    // State untuk mengontrol visibility dari menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fungsi untuk toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-20 flex justify-between py-4 items-center px-6 md:px-20 bg-white">
            <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-yellow-500 transition-colors text-white rounded-full">
                    <p className="font-semibold">i</p>
                </div>
                <div className="text-sm">
                    <p className="font-semibold text-gray-800">iann</p>
                    <p className="text-gray-700">Banyuwangi</p>
                </div>
            </div>

            {/* Menu Button (Hamburger Icon) */}
            <div className="md:hidden">
                <button
                    className="text-gray-800"
                    aria-label="Toggle Menu"
                    onClick={toggleMenu} // Memanggil fungsi toggleMenu saat tombol diklik
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Menu Items (For desktop) */}
            <ul className="hidden md:flex justify-center font-semibold gap-16 text-gray-600 text-sm items-center">
                <li>
                    <a href="#skills" className="hover:text-gray-800">My Tools</a>
                </li>
                <li>
                    <a href="#projects" className="hover:text-gray-800">Projects</a>
                </li>
                <li>
                    <a href="#experience" className="hover:text-gray-800">Experience</a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-gray-800">Contact</a>
                </li>
            </ul>

            {/* Mobile Menu (Visible only when isMenuOpen is true) */}
            <div
                className={`md:hidden ${isMenuOpen ? 'block opacity-100' : 'opacity-0'} absolute top-full left-0 right-0 bg-white shadow-lg z-10 mt-2 rounded-lg transition-all duration-300 ease-out`}
                style={{ minWidth: '250px' }}
            >
                <ul className="flex flex-col items-center gap-6 text-gray-600 text-sm py-4">
                    <li>
                        <a href="#skills" className="hover:text-gray-800">My Tools</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-gray-800">Projects</a>
                    </li>
                    <li>
                        <a href="#experience" className="hover:text-gray-800">Experience</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-gray-800">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
