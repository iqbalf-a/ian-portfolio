import React from "react";

const educations = [
    {
        id: 1,
        institution: "Universitas Negeri Malang",
        degree: "Bachelor of Informatics Engineering",
        years: "2018 - 2022",
        gpa: "GPA: 3.81",
    },
];

const Education = () => {
    return (
        <div id="education">
            <div className="flex justify-center pt-20">
                <p className="text-2xl font-semibold">Education</p>
            </div>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto p-4 md:p-8">
                    <div className="flow-root">
                        <ul className="mb-8">
                            {educations.map((edu) => (
                                <li key={edu.id}>
                                    <div className="relative pb-8">
                                        <div className="relative flex items-start space-x-3">
                                            <div>
                                                <div className="relative px-1">
                                                    <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center" />
                                                </div>
                                            </div>
                                            <div className="min-w-0 flex-1 py-0">
                                                <div className="text-md text-gray-500">
                                                    <div className="flex flex-wrap gap-1">
                                                        <span className="font-medium text-gray-900">{edu.institution}</span>
                                                        <span className="my-0.5 relative inline-flex items-center gap-1.5 text-sm">
                                                            <span className="h-1.5 w-1.5 rounded-full bg-gray-400" aria-hidden="true" />
                                                            <span className="font-medium text-gray-900">{edu.degree}</span>
                                                        </span>
                                                    </div>
                                                    <span className="whitespace-nowrap text-sm">{edu.years}</span>
                                                </div>
                                                <p className="mt-2 text-gray-700 text-sm">{edu.gpa}</p>
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

export default Education;
