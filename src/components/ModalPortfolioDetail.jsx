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
                <img src={itemPortfolio.image} alt={itemPortfolio.name} className="w-full h-80 object-cover rounded mb-4 border-2" />
                {/* <p className="mt-4">{itemPortfolio.description}</p> */}
                <div className="px-3 py-2 rounded-lg">
                    {/* <p className="text-xs italic">build with</p> */}
                    <div className="flex gap-4 mt-4">
                        {itemPortfolio.technologies.map((tech, index) => (
                            <div key={index}>{tech}</div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-6">
                    <div>
                        <a className="flex items-center px-3 py-2 rounded-md text-sm gap-2" href={itemPortfolio.sourceCode} target="_blank" rel="noopener noreferrer">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                            </svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                <path fill-rule="evenodd" d="M4.78 4.97a.75.75 0 0 1 0 1.06L2.81 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM11.22 4.97a.75.75 0 0 0 0 1.06L13.19 8l-1.97 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0ZM8.856 2.008a.75.75 0 0 1 .636.848l-1.5 10.5a.75.75 0 0 1-1.484-.212l1.5-10.5a.75.75 0 0 1 .848-.636Z" clip-rule="evenodd" />
                            </svg>

                            <p className="underline font-mono">source code</p>
                        </a>
                    </div>
                    <div>
                        <a className="flex items-center px-3 py-2 rounded-md text-white text-sm hover:bg-yellow-500 hover:text-white transition-colors hover:border-yellow-500 bg-blue-500 gap-2" href={itemPortfolio.demoUrl} target="_blank" rel="noopener noreferrer">
                            <p>Demo</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalPortfolioDetail;
