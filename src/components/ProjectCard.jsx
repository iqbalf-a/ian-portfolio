import React from 'react'

const ProjectCard = ({ itemProject, onShowDetail }) => {
    return (
        <div className='shadow px-3 md:px-6 py-3 md:py-6 rounded-md cursor-pointer transition-transform duration-200' onClick={() => onShowDetail(itemProject)}>
            <img src={itemProject.image} alt="" className='w-[350px] h-[150px] md:h-[200px] object-cover object-left rounded-md border' />
            <p className='font-semibold mt-2'>{itemProject.name}</p>
        </div>
    )
}

export default ProjectCard;