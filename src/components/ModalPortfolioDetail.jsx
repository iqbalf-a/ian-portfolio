import React from "react";

const ModalPortfolioDetail = ({ itemPortfolio, onClose }) => {
    if (!itemPortfolio) return null;

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleBackgroundClick}>
            <div className="bg-white rounded-lg shadow-lg relative px-8 py-6 w-1/2">
                <button onClick={onClose} className="absolute top-2 right-4 text-gray-600 hover:text-gray-800" >
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-4">{itemPortfolio.name}</h2>
                <img src={itemPortfolio.image} alt={itemPortfolio.name} className="w-full h-80 object-cover rounded mb-4" />
                <p className="mt-4">{itemPortfolio.description}</p>
                <p className="text-xs mt-4">build with</p>
                <div className="flex gap-4 mt-2">
                    {itemPortfolio.technologies.map((tech, index) => (
                        <div key={index}>{tech}</div>
                    ))}
                </div>
                <div className="flex items-center gap-2 mt-4">
                    <div>
                        <a className="flex items-center px-6 py-3 rounded-lg text-white text-sm hover:bg-yellow-500 hover:text-white transition-colors hover:border-yellow-500 bg-blue-500 gap-2" href={itemPortfolio.sourceCode}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                            </svg>
                            <p>source code</p>
                        </a>
                    </div>
                    <p>or</p>
                    <a href={itemPortfolio.sourceCode} className="underline">
                        {itemPortfolio.sourceCode}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ModalPortfolioDetail;
