import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/project-item/item1.png";
import project2 from "../assets/project-item/item2.png";
import project3 from "../assets/project-item/item3.png";
import project4 from "../assets/project-item/item4.png";
import ModalProjectDetail from "../components/ModalProjectDetail";
import { DartIcon, FlutterIcon, NuxtIcon, TailwindCssIcon, VueIcon, ReactIcon, TypeScriptIcon, ViteIcon, SpringBootIcon, JavaIcon, PostgreSqlIcon, VercelIcon, MavenIcon } from "../assets/Icons";

const projects = [
    {
        id: 1,
        name: "my-money",
        description: "A personal finance tracker mobile app built with Flutter and Dart. Features expense categorization, budget tracking, and visual spending summaries to help users manage their daily finances effectively.",
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
        description: "A pixel-perfect clone of the Noveltoon web platform built with Vue.js, Nuxt, and Tailwind CSS. Replicates the reading experience with dynamic chapter navigation and a fully responsive layout.",
        sourceCode: "https://github.com/iqbalf-a/my-noveltoon-clone",
        technologies: [
            { Icon: VueIcon, name: "Vue" },
            { Icon: NuxtIcon, name: "Nuxt" },
            { Icon: TailwindCssIcon, name: "Tailwind CSS" },
        ],
        image: project2,
        demoUrl: "https://my-noveltoon-clone.pages.dev/",
    },
    {
        id: 3,
        name: "notenest-frontend",
        description: "A modern note-taking web application with sharing capabilities. Built with React 19, TypeScript, and Tailwind CSS v4. Features real-time note management, tag-based filtering, collaborative sharing, and a clean responsive UI. Deployed on Vercel with MSW for API mocking during development.",
        sourceCode: "https://github.com/iqbalf-a/notenest/tree/deploy/monolith/frontend",
        technologies: [
            { Icon: ReactIcon, name: "React 19" },
            { Icon: TypeScriptIcon, name: "TypeScript" },
            { Icon: ViteIcon, name: "Vite" },
            { Icon: TailwindCssIcon, name: "Tailwind CSS v4" },
            { Icon: VercelIcon, name: "Vercel" },
        ],
        image: project3,
        demoUrl: "https://ianlab-notenest.vercel.app/",
    },
    {
        id: 4,
        name: "notenest-backend",
        description: "A robust REST API for note management with JWT authentication and sharing features. Built with Java 21 and Spring Boot 3.4.6. Implements clean architecture with domain separation (auth, user, note services), Spring Security with JWT, Spring Data JPA with PostgreSQL, and comprehensive test coverage (36 tests). API documented with Scalar (OpenAPI).",
        sourceCode: "https://github.com/iqbalf-a/notenest/tree/deploy/monolith/backend",
        technologies: [
            { Icon: JavaIcon, name: "Java 21" },
            { Icon: SpringBootIcon, name: "Spring Boot 3.4" },
            { Icon: PostgreSqlIcon, name: "PostgreSQL" },
            { Icon: MavenIcon, name: "Maven" },
        ],
        image: project4,
        demoUrl: "https://ianlab-notenest.vercel.app/docs.html",
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
