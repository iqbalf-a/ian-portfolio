import React, { useEffect, useState } from "react";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > 200);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors border-2 border-white"
            aria-label="Back to top"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06l-2.47-2.47V21a.75.75 0 0 1-1.5 0V4.81L8.78 7.28a.75.75 0 0 1-1.06-1.06l3.75-3.75Z" clipRule="evenodd" />
            </svg>
        </button>
    );
};

export default BackToTopButton;
