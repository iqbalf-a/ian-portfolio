import React from "react";

const Specialization = () => {
    return (
        <div id="specialization" className="flex justify-center pt-20">
            <div className="flex flex-col items-center justify-center px-6 md:px-12 md:w-2/3">
                <p className="text-2xl font-semibold">Specialities</p>
                <div className="flex flex-wrap justify-center gap-6 mt-6">
                    <div className="flex flex-col items-center">
                        <p className="text-3xl font-bold text-blue-500">3+</p>
                        <p className="text-sm text-gray-500 mt-1">Years Experience</p>
                    </div>
                    <div className="w-px bg-gray-200 self-stretch hidden md:block" />
                    <div className="flex flex-col items-center">
                        <p className="text-3xl font-bold text-blue-500">Enterprise</p>
                        <p className="text-sm text-gray-500 mt-1">PT Bank Mandiri Tbk.</p>
                    </div>
                    <div className="w-px bg-gray-200 self-stretch hidden md:block" />
                    <div className="flex flex-col items-center">
                        <p className="text-3xl font-bold text-blue-500">10+</p>
                        <p className="text-sm text-gray-500 mt-1">Technologies</p>
                    </div>
                </div>
                <p className="mt-6 text-center text-gray-600 leading-relaxed">
                    Informatics Engineering graduate with enterprise-level experience in software quality assurance and performance testing. Strong technical depth across the full testing spectrum — from performance scripting with JMeter & LoadRunner, to end-to-end manual testing, log tracing with Kibana & Elastic Stack, SQL data validation, and Jenkins pipeline automation. Experienced in cross-functional collaboration with development and DevOps teams, with hands-on development skills in Java (Spring Boot), JavaScript (React, React Native), and RESTful API design.
                </p>
            </div>
        </div>
    )
}

export default Specialization;