import React, { useState } from 'react'
import classNames from 'classnames'
import projects from '../projects/projectsData'
import '../../styles/projectsMenu.css'

const ProjectsMenu = () => {
  const [activeProject, setActiveProject] = useState(1)

  const projectItems = ['PROJECT 1', 'PROJECT 2', 'PROJECT 3']

  const renderContent = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className={`project-sub-container-${index + 1}`}>
        <h3>{project.title}</h3>
        <img src={project.image} alt={project.title}></img>
        <div>{project.description}</div>
        <div className='link-container'>
          <a href={project.github} target='_blank' rel='noopener noreferrer'>
            GITHUB
          </a>
          <a href={project.demo} target='_blank' rel='noopener noreferrer'>
            DEMO
          </a>
        </div>
      </div>
    ))
  }

  return (
    <div className='project-menu'>
      <div className='project-items-container'>
        {projectItems.map((item, index) => (
          <div
            key={index}
            className={classNames('project-item', {
              activeProject: activeProject === index + 1,
            })}
            onClick={() => setActiveProject(index + 1)}
          >
            <h2 className='title'>{item}</h2>
          </div>
        ))}
      </div>
      <div className='project-sub-container'>
        {renderContent([projects[activeProject]])}
      </div>
    </div>
  )
}

export default ProjectsMenu
