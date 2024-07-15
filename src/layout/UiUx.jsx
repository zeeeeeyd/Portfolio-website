import React from 'react';
import ProjectGrid from '../components/ProjectGrid';
import uiuxProjectData from '../data/UiuxData'
import { useTranslation } from 'react-i18next';

const UiUx = () => {

  const { t } = useTranslation();

  return (
    <div>
        <ProjectGrid
        title={t("UI/UX Design Services")}
        subtitle={t("Crafting intuitive and engaging user experiences for digital products")}
        backgroundImage="https://mir-s3-cdn-cf.behance.net/project_modules/1400/3fcd7b196600601.66225dd1d6e8b.jpg"
        projectData={uiuxProjectData}
        />
    </div>
  )
}

export default UiUx