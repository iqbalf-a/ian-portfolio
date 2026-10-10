import React from "react";

const experiences = [
    {
        id: 1,
        workplace: "PT Bank Mandiri (Persero) Tbk.",
        jobTitle: "Performance Test Engineer",
        employmentDates: "February 2023 – Present · 3+ years",
        jobDetails: [
            "Designed and executed automated performance test scripts using Apache JMeter and LoadRunner Enterprise for Kopra by Mandiri, simulating high-traffic scenarios to validate system stability.",
            "Performed end-to-end manual and regression testing across complete application flows to validate functionality and ensure stability after each deployment.",
            "Traced request/response flows end-to-end using Kibana and Elastic Stack to support root cause analysis and developer troubleshooting.",
            "Monitored real-time server metrics during load tests, identified bottlenecks, and delivered optimization recommendations based on response time, throughput, error rate, and SLA compliance targets.",
            "Conducted API testing via Postman and executed SQL queries against staging and production databases to validate data integrity and detect integration issues early.",
            "Automated test job scheduling and execution via Jenkins batch pipelines, ensuring consistent and repeatable test runs across environments.",
            "Built internal tooling for the Kopra team using JavaScript/Node.js and Angular — including an auto-indexing utility, form-based tools for text encoding and data processing, a bulk ZIP export tool, a dynamic test data generator for single-use data needs, and a lightweight Express.js proxy service that exposes database queries via simple HTTP GET endpoints.",
            "Collaborated with cross-functional teams — including developers, DevOps, and infrastructure — to define test objectives, coordinate environment setup, and manage defect reporting via Jira.",
        ],
    },
    {
        id: 2,
        workplace: "PT Enigma Cipta Humanika",
        jobTitle: "Full Stack Developer Trainee",
        employmentDates: "November 2022 – January 2023 · 3 months",
        jobDetails: [
            "Built production-ready backend services using Spring Boot (Java) with RESTful API architecture, integrated with PostgreSQL as the primary relational database.",
            "Developed responsive web interfaces and mobile application screens using React and React Native.",
            "Delivered a complete end-to-end capstone application as part of a cross-functional team, covering the full development lifecycle from design to deployment.",
            "Applied Git-based version control, code review practices, and Agile-style collaboration throughout the project.",
        ],
    },
    {
        id: 3,
        workplace: "PT Mejakita Edunusa Mandiri",
        jobTitle: "Back-End Developer Intern",
        employmentDates: "February 2021 – April 2021 · 3 months",
        jobDetails: [
            "Developed RESTful APIs using CodeIgniter 4 to support web application requirements, with MySQL for database design and management.",
            "Collaborated with the frontend team to ensure seamless client-server data integration and delivered complete API documentation to accelerate developer onboarding.",
            "Performed local API testing, identified bugs, and optimized performance based on test results and team feedback.",
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
                <div className="max-w-2xl p-4 md:p-8 mx-auto">
                    <div className="flow-root">
                        <ul className="mb-8">
                            {experiences.map((experience) => (
                                <li key={experience.id}>
                                    <div className="relative pb-8">
                                        <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                                        <div className="relative flex items-start space-x-3">
                                            <div>
                                                <div className="relative px-1">
                                                    <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full ring-8 ring-white" />
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0 py-0">
                                                <div className="text-gray-500 text-md">
                                                    <div className="flex flex-wrap gap-1">
                                                        <span className="font-medium text-gray-900">{experience.workplace}</span>
                                                        <span className="my-0.5 relative inline-flex items-center gap-1.5 text-sm">
                                                            <span className="h-1.5 w-1.5 rounded-full bg-gray-400" aria-hidden="true" />
                                                            <span className="font-medium text-gray-900">{experience.jobTitle}</span>
                                                        </span>
                                                    </div>
                                                    <span className="text-sm whitespace-nowrap">{experience.employmentDates}</span>
                                                </div>
                                                <ul className="mt-2 space-y-1 text-sm text-gray-700">
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
