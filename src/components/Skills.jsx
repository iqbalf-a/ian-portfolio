import React from "react";
import { AngularIcon, BootstrapIcon, CodeigniterIcon, CSharpIcon, CssIcon, DartIcon, FigmaIcon, FlutterIcon, GitIcon, HtmlIcon, JavaIcon, JavaScriptIcon, MySqlIcon, NodeJsIcon, PhpIcon, PostgreSqlIcon, ReactIcon, SpringIcon, TailwindCssIcon } from "../assets/Icons";

const Skills = () => {
    return (
        <div className="flex justify-center mt-12">
            <div className="flex w-3/5">
                <div className="flex w-1/4 text-center">
                    <p className="text-2xl font-semibold">_My Toolkit</p>
                </div>
                <div className="flex flex-wrap w-3/4 text-center gap-6">
                    <CodeigniterIcon width={80} height={80} />
                    <FlutterIcon width={80} height={80} />
                    <SpringIcon width={80} height={80} />
                    <AngularIcon width={80} height={80} />
                    <ReactIcon width={80} height={80} />
                    <GitIcon width={80} height={80} />
                    <HtmlIcon width={80} height={80} />
                    <CssIcon width={80} height={80} />
                    <BootstrapIcon width={80} height={80} />
                    <TailwindCssIcon width={80} height={80} />
                    <DartIcon width={80} height={80} />
                    <PhpIcon width={80} height={80} />
                    <JavaIcon width={80} height={80} />
                    <JavaScriptIcon width={80} height={80} />
                    <NodeJsIcon width={80} height={80} />
                    <MySqlIcon width={80} height={80} />
                    <PostgreSqlIcon width={80} height={80} />
                    <CSharpIcon width={80} height={80} />
                    <FigmaIcon width={80} height={80} />
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