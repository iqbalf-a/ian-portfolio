import React from "react";
import { AngularIcon, BootstrapIcon, CodeigniterIcon, FlutterIcon, KatalonIcon, LoadRunnerIcon, PostgreSqlIcon, ReactIcon, SpringBootIcon, TailwindCssIcon } from "../assets/Icons";

const Skills = () => {
    return (
        <div id="skills" className="flex justify-center pt-20 md:pt-20">
            <div className="flex flex-col items-center px-12">
                <div className="flex text-center">
                    <p className="text-2xl font-semibold">My Toolkit</p>
                </div>
                <div className="flex flex-wrap md:w-1/2 mt-6 justify-center gap-8 md:gap-12">
                    <CodeigniterIcon name="CodeIgniter" />
                    <FlutterIcon name="Flutter" />
                    <SpringBootIcon width={60} height={60} name="SpringBoot" />
                    <ReactIcon name="React" />
                    <PostgreSqlIcon name="PostgreSql" />
                    <AngularIcon name="Angular" />
                    <TailwindCssIcon name="TailwindCSS" />
                    <BootstrapIcon name="Bootstrap" />
                    <LoadRunnerIcon name="LoadRunner" />
                    <KatalonIcon width={60} height={60} name="Katalon" />
                </div>
            </div>
        </div>

    )
}

export default Skills;