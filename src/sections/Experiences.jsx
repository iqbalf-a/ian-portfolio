import React from "react";

const experiences = [
    {
        id: 1,
        workplace: "PT Bank Mandiri (Persero) Tbk.",
        jobTitle: "Performance Test Engineer",
        employmentDates: "February 2023 - Present · 2 years (Contract Resource)",
        jobDetails: [
            "Coordinated meetings to define objectives and gather necessary data for performance testing.",
            "Developed test scripts and automation processes to ensure efficient testing procedures.",
            "Performed performance testing on large-scale applications such as Kopra by Mandiri, ensuring system stability and performance under high traffic conditions.",
            "Identified performance bottlenecks in Kopra by Mandiri and provided recommendations for optimization and scalability.",
        ],
    },
    {
        id: 2,
        workplace: "PT Enigma Cipta Humanika",
        jobTitle: "Bootcamp Participant",
        employmentDates: "November 2022 - January 2023 · 3 months",
        jobDetails: [
            "Gained solid understanding of programming fundamentals.",
            "Learned Spring Boot for backend development.",
            "Acquired skills in React and React Native for frontend development.",
            "Implemented PostgreSQL as a Database Management System in application development.",
        ],
    },
    {
        id: 3,
        workplace: "PT Mejakita Edunusa Mandiri",
        jobTitle: "Internship",
        employmentDates: "February 2021 - April 2021 · 3 months",
        jobDetails: [
            "Learned API development and implementation techniques.",
            "Developed RESTful APIs using CodeIgniter 4 for web applications.",
        ],
    },
];

const Experiences = () => {
    return (
        <div id="experience">
            <div className="flex justify-center pt-20">
                <p className="text-2xl font-semibold">Experience</p>
            </div>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto p-8">
                    <div className="flow-root">
                        <ul className="mb-8">
                            {experiences.map((experience) => (
                                <li key={experience.id}>
                                    <div className="relative pb-8">
                                        <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                                        <div className="relative flex items-start space-x-3">
                                            <div>
                                                <div className="relative px-1">
                                                    <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center" />
                                                </div>
                                            </div>
                                            <div className="min-w-0 flex-1 py-0">
                                                <div className="text-md text-gray-500">
                                                    <div className="flex flex-wrap gap-1">
                                                        <span className="font-medium text-gray-900">{experience.workplace}</span>
                                                        <span className="my-0.5 relative inline-flex items-center gap-1.5 text-sm">
                                                            <span className="h-1.5 w-1.5 rounded-full bg-gray-400" aria-hidden="true" />
                                                            <span className="font-medium text-gray-900">{experience.jobTitle}</span>
                                                        </span>
                                                    </div>
                                                    <span className="whitespace-nowrap text-sm">{experience.employmentDates}</span>
                                                </div>
                                                <ul className="mt-2 text-gray-700 text-sm space-y-1">
                                                    {experience.jobDetails.map((detail, i) => (
                                                        <li key={i}>• {detail}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;
