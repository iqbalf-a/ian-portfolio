import React from "react";
import { AngularIcon, BootstrapIcon, CIcon, CodeigniterIcon, CppIcon, CSharpIcon, CssIcon, DartIcon, FigmaIcon, FlutterIcon, GitIcon, HtmlIcon, JavaIcon, JavaScriptIcon, LaravelIcon, MySqlIcon, NodeJsIcon, PhpIcon, PostgreSqlIcon, PostmanIcon, ReactIcon, SpringIcon, TailwindCssIcon } from "../assets/Icons";

const Skills = () => {
    return (
        <div className="flex justify-center mt-12">
            <div className="flex flex-col items-center w-3/5">
                <div className="flex text-center">
                    <p className="text-2xl font-semibold">My Toolkit</p>
                </div>
                <div className="flex flex-wrap w-3/4 mt-6 justify-center gap-10">
                    <PhpIcon />
                    <DartIcon />
                    <JavaIcon />
                    <JavaScriptIcon />
                    <NodeJsIcon />
                    <CIcon />
                    <CppIcon />
                    <CSharpIcon />
                    <CodeigniterIcon />
                    <FlutterIcon />
                    <SpringIcon />
                    <AngularIcon />
                    <ReactIcon />
                    <BootstrapIcon />
                    <TailwindCssIcon />
                    <LaravelIcon />
                    <MySqlIcon />
                    <PostgreSqlIcon />
                    <FigmaIcon/>
                    <PostmanIcon />
                    <GitIcon />
                    <HtmlIcon />
                    <CssIcon />
                </div>

                {/* UI Design 
                Figma

                codeigniter, flutter, springboot, angular, react js, react native,
                git
                html, css, bootstrap, tailwindcss, dart, php, java, javascript, nodejs

                mysql, postgresql,

                C#, javascript */}

            </div>
        </div>

    )
}

export default Skills;