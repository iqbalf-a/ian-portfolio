import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/project-item/item1.png";
import project2 from "../assets/project-item/item2.png";
import ModalProjectDetail from "../components/ModalProjectDetail";
import { DartIcon, FlutterIcon, NuxtIcon, TailwindCssIcon, VueIcon } from "../assets/Icons";

const projects = [
    {
        id: 1,
        name: "my-money",
        description: "A personal finance tracker mobile app.",
        sourceCode: "https://github.com/iqbalf-a/my-money",
        technologies: [
            { Icon: DartIcon, name: "Dart" },
            { Icon: FlutterIcon, name: "Flutter" },
        ],
        image: project1,
        demoUrl: "https://www.figma.com/design/dcilbSAPYrgk8rFPTpW5tc/MOney-Lovers?m=auto&t=ZBmj3dZiOyskz9zJ-6",
    },
    {
        id: 2,
        name: "noveltoon-clone",
        description: "A clone of the Noveltoon web platform.",
        sourceCode: "https://github.com/iqbalf-a/my-noveltoon-clone",
        technologies: [
            { Icon: VueIcon, name: "Vue" },
            { Icon: NuxtIcon, name: "Nuxt" },
            { Icon: TailwindCssIcon, name: "Tailwind CSS" },
        ],
        image: project2,
        demoUrl: "https://my-noveltoon-clone.pages.dev/",
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div id="projects" className="flex flex-col items-center pt-20 px-8">
            <p className="text-2xl font-semibold">Projects</p>
            <div className="flex flex-wrap gap-8 md:gap-10 mt-4 justify-center">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} onShowDetail={setSelectedProject} />
                ))}
            </div>
            <ModalProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
        </div>
    );
};

export default Projects;
