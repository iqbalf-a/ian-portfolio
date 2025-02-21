import React from "react";
import { AngularIcon, BootstrapIcon, CIcon, CodeigniterIcon, CppIcon, CSharpIcon, CssIcon, DartIcon, FigmaIcon, FlutterIcon, GitIcon, HtmlIcon, JavaIcon, JavaScriptIcon, KatalonIcon, LaravelIcon, LoadRunnerIcon, MySqlIcon, NodeJsIcon, PhpIcon, PostgreSqlIcon, PostmanIcon, ReactIcon, SpringBootIcon, SpringIcon, TailwindCssIcon } from "../assets/Icons";

const Skills = () => {
    return (
        <div id="skills" className="flex justify-center mt-12">
            <div className="flex flex-col items-center w-3/5">
                <div className="flex text-center">
                    <p className="text-2xl font-semibold">My Toolkit</p>
                </div>
                <div className="flex flex-wrap w-3/4 mt-6 justify-center gap-12">
                    <CodeigniterIcon />
                    <FlutterIcon />
                    <SpringBootIcon width={60} height={60} />
                    <ReactIcon />
                    <PostgreSqlIcon />
                    <AngularIcon />
                    <TailwindCssIcon />
                    <BootstrapIcon />
                    <LoadRunnerIcon />
                    <KatalonIcon width={60} height={60} />
                </div>
            </div>
        </div>

    )
}

export default Skills;