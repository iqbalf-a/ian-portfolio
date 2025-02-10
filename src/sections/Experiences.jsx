import React from "react";

const Experiences = () => {

    const experiences = [
        {
            id: 1,
            workplace: "PT Bank Mandiri (Persero) Tbk.",
            jobTitle: "Performance Test Engineer",
            employmentDates: "February 2023 - Present · 2 years (Contract Resource)",
            jobDetails: "• Coordinated meetings to define objectives and gather necessary data for performance testing. <br />" +
                "• Developed test scripts and automation proccess to ensure efficient testing procedures. <br />" +
                "• Perfomed performance testing an large-scale applications such as Kopra by Mandiri, ensuring system stability and performance under high traffic conditions. <br/> " +
                "• Identified performance bottlenecks in Kopra by Mandiri and provided recommendations for for optimization user experience scalability."
        }, {
            id: 3,
            workplace: "PT Enigma Cipta Humanika",
            jobTitle: "Bootcamp Participant",
            employmentDates: "November 2022 - January 2023 · 3 months",
            jobDetails: "• Gained solid understanding of programming fundamentals. <br /> " +
                "• Learned Spring Boot for backend development. <br />" +
                "• Acquired skills in React and React Native for frontend development. <br/> " +
                "• Implement PostgreSQL as ad Database Management System in application development."
        }, {
            id: 4,
            workplace: "PT Mejakita Edunusa Mandiri",
            jobTitle: "Internship",
            employmentDates: "February 2021 - April 2021 · 3 months",
            jobDetails: "• Learned API development and implementation techniques. <br /> " +
                " • Developed RESTful APIs using CodeIgniter 4 for web applications. <br />"
        }
    ]

    return (
        <div id="experience">
            <div className="flex justify-center mt-8">
                <p className="text-2xl font-semibold">Experience</p>
            </div>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto p-8">
                    <div className="flow-root">
                        <ul className="mb-8">
                            {experiences.map((itemExperience) => (
                                <li>
                                    <div className="relative pb-8">
                                        <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                                        <div className="relative flex items-start space-x-3">
                                            <div>
                                                <div className="relative px-1">
                                                    <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="min-w-0 flex-1 py-0">
                                                <div className="text-md text-gray-500">
                                                    <div className="flex">
                                                        <div className="font-medium text-gray-900 mr-2">{itemExperience.workplace}</div>
                                                        <div className="my-0.5 relative inline-flex items-center rounded-full py-0.5 text-sm">
                                                            <div className="absolute flex-shrink-0 flex items-center justify-center">
                                                                <span className="h-1.5 w-1.5 rounded-full bg-gray-500" aria-hidden="true"></span>
                                                            </div>
                                                            <div className="ml-3.5 font-medium text-gray-900">{itemExperience.jobTitle}</div>
                                                        </div>
                                                    </div>
                                                    <span className="whitespace-nowrap text-sm">{itemExperience.employmentDates}</span>
                                                </div>
                                                <div className="mt-2 text-gray-700">
                                                    <div dangerouslySetInnerHTML={{ __html: itemExperience.jobDetails }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}

                            {/* 
                            <li>
                                <div className="relative pb-8">
                                    <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                                    <div className="relative flex items-start space-x-3">
                                        <div>
                                            <div className="relative px-1">
                                                <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center">
                                                    <svg className="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="min-w-0 flex-1 py-0">
                                            <div className="text-md text-gray-500">
                                                <div>
                                                    <a href="#" className="font-medium text-gray-900 mr-2">PT Enigma Cipta Humanika</a>
                                                    <a href="#" className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                                                        <div className="absolute flex-shrink-0 flex items-center justify-center">
                                                            <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true"></span>
                                                        </div>
                                                        <div className="ml-3.5 font-medium text-gray-900">Trainee</div>
                                                    </a>
                                                </div>
                                                <span className="whitespace-nowrap text-sm">November 2022 - January 2023</span>
                                            </div>
                                            <div className="mt-2 text-gray-700">
                                                <p> - Resolved a critical issue causing crashes on certain devices. <br /> - Fixed a login error that prevented some users from accessing their accounts. <br /> - Addressed a display glitch causing text overflow in long messages. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;
