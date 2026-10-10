import React, { useState, useEffect, useRef } from 'react';

const navLinks = [
    { href: '#skills', label: 'My Tools', id: 'skills' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#education', label: 'Education', id: 'education' },
    { href: '#contact', label: 'Contact', id: 'contact' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const navRef = useRef(null);

    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            for (let i = navLinks.length - 1; i >= 0; i--) {
                const el = document.getElementById(navLinks[i].id);
                if (el && scrollY >= el.offsetTop - 120) {
                    setActiveSection(navLinks[i].id);
                    return;
                }
            }
            setActiveSection('');
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isMenuOpen) return;
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) closeMenu();
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    const linkClass = (id) =>
        id === activeSection
            ? 'text-blue-500 border-b-2 border-blue-500 pb-0.5'
            : 'text-gray-600 hover:text-gray-800';

    return (
        <nav ref={navRef} className="fixed top-0 left-0 z-20 flex items-center justify-between w-full px-6 py-4 bg-white shadow-sm md:px-20">
            <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-12 h-12 text-white transition-colors bg-blue-500 rounded-full hover:bg-yellow-500">
                    <p className="font-semibold">i</p>
                </div>
                <div className="text-sm">
                    <p className="font-semibold text-gray-800">ian</p>
                    <p className="text-gray-700">Full-stack Developer</p>
                </div>
            </div>

            {/* Hamburger button — mobile only */}
            <div className="md:hidden">
                <button
                    className="text-gray-800"
                    aria-label="Toggle Menu"
                    onClick={() => setIsMenuOpen(prev => !prev)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Desktop nav */}
            <ul className="items-center justify-center hidden gap-8 text-sm font-semibold md:flex">
                {navLinks.map(({ href, label, id }) => (
                    <li key={id}>
                        <a href={href} className={`transition-colors ${linkClass(id)}`}>{label}</a>
                    </li>
                ))}
            </ul>

            {/* Mobile dropdown */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-white shadow-lg z-10 mt-2 rounded-lg`}>
                <ul className="flex flex-col items-center gap-6 py-4 text-sm text-gray-600">
                    {navLinks.map(({ href, label, id }) => (
                        <li key={id}>
                            <a href={href} className={`transition-colors ${linkClass(id)}`} onClick={closeMenu}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
