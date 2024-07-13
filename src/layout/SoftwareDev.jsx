import React from 'react'
import ProjectGrid from '../components/ProjectGrid';
import softwareDevProjects from '../data/UiuxData'

const SoftwareDev = () => {
  return (
    <div>
        <ProjectGrid
        title="Software Development"
        subtitle="Building robust software solutions tailored to your business needs"
        backgroundImage="https://img.freepik.com/premium-photo/man-is-working-computer-with-blue-light-screen_1044943-23016.jpg?w=996"
        projectData={softwareDevProjects}
        />
    </div>
  )
}

export default SoftwareDev