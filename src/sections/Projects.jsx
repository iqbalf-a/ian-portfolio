import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/project-item/item1.png"
import project2 from "../assets/project-item/item2.png"
import ModalProjectDetail from "../components/ModalProjectDetail";
import { DartIcon, FlutterIcon, NuxtIcon, TailwindCssIcon, VueIcon } from "../assets/Icons";

const Project = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            name: 'my-money',
            description: 'desc',
            sourceCode: 'https://github.com/iqbalf-a/my-money',
            technologies: [
                <DartIcon width={50} height={50} name="Dart" />,
                <FlutterIcon width={50} height={50} name="Flutter" />
            ],
            image: project1,
            demoUrl: 'https://www.figma.com/design/dcilbSAPYrgk8rFPTpW5tc/MOney-Lovers?m=auto&t=ZBmj3dZiOyskz9zJ-6'
        }, {
            id: 2,
            name: 'noveltoon-clone',
            description: 'clone noveltoon',
            sourceCode: 'https://github.com/iqbalf-a/my-noveltoon-clone',
            technologies: [
                <VueIcon width={50} height={50} name="Vue" />,
                <NuxtIcon width={50} height={50} name="Nuxt" />,
                <TailwindCssIcon width={50} height={50} name="Tailwind CSS" />
            ],
            image: project2,
            demoUrl: 'https://my-noveltoon-clone.pages.dev/'
        },
    ]

    const showProjectDetail = (itemProject) => {
        setSelectedProject(itemProject)
    }

    const closeModal = () => {
        setSelectedProject(null)
    }

    return (
        <div id="projects" className="flex flex-col items-center pt-20 md:pt-20 px-8">
            <p className="text-2xl font-semibold">Projects</p>
            <div className="flex gap-8 md:gap-10 mt-4">
                {projects.map((itemProject) => (
                    <ProjectCard key={itemProject.id} itemProject={itemProject} onShowDetail={showProjectDetail} />
                ))}
            </div>
            <ModalProjectDetail itemProject={selectedProject} onClose={closeModal} />
        </div>
    )
}

export default Project;