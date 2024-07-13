import React from 'react';
import ProjectGrid from '../components/ProjectGrid';
import uiuxProjectData from '../data/UiuxData'

const UiUx = () => {
  return (
    <div>
        <ProjectGrid
        title="UI/UX Design Services"
        subtitle="Crafting intuitive and engaging user experiences for digital products"
        backgroundImage="https://mir-s3-cdn-cf.behance.net/project_modules/1400/3fcd7b196600601.66225dd1d6e8b.jpg"
        projectData={uiuxProjectData}
        />
    </div>
  )
}

export default UiUx