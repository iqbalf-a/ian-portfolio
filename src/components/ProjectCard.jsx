import React from 'react';

const ProjectCard = ({ project, onShowDetail }) => {
    return (
        <div
            className="shadow px-3 md:px-6 py-3 md:py-6 rounded-md cursor-pointer transition-transform duration-200 hover:scale-105"
            onClick={() => onShowDetail(project)}
        >
            <img src={project.image} alt={project.name} className="w-[350px] h-[150px] md:h-[200px] object-cover object-left rounded-md border" />
            <p className="font-semibold mt-2">{project.name}</p>
        </div>
    );
};

export default ProjectCard;
