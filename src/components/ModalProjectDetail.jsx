import React from "react";

const ModalProjectDetail = ({ project, onClose }) => {
    if (!project) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-lg shadow-lg relative px-8 py-6 w-11/12 md:w-1/2 max-h-[90vh] overflow-y-auto">
                <button onClick={onClose} className="absolute top-2 right-4 text-gray-600 hover:text-gray-800 text-xl">
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
                <img src={project.image} alt={project.name} className="w-full h-80 object-cover rounded mb-4 border-2" />
                <p className="text-gray-600 text-sm">{project.description}</p>
                <div className="flex gap-4 mt-4">
                    {project.technologies.map(({ Icon, name }, index) => (
                        <Icon key={index} width={50} height={50} name={name} />
                    ))}
                </div>
                <div className="flex items-center gap-4 mt-6">
                    <a
                        className="flex items-center px-3 py-2 rounded-md text-sm gap-2 border hover:bg-gray-50 transition-colors"
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M4.78 4.97a.75.75 0 0 1 0 1.06L2.81 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM11.22 4.97a.75.75 0 0 0 0 1.06L13.19 8l-1.97 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0ZM8.856 2.008a.75.75 0 0 1 .636.848l-1.5 10.5a.75.75 0 0 1-1.484-.212l1.5-10.5a.75.75 0 0 1 .848-.636Z" clipRule="evenodd" />
                        </svg>
                        <span className="underline font-mono">code</span>
                    </a>
                    <a
                        className="flex items-center px-3 py-2 rounded-md text-white text-sm gap-2 bg-blue-500 hover:bg-yellow-500 transition-colors"
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>Demo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ModalProjectDetail;
