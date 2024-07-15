import React from 'react'
import ProjectGrid from '../components/ProjectGrid';
import { useTranslation } from 'react-i18next';

const SoftwareDev = () => {

  const { t } = useTranslation();

  return (
    <div>
        <ProjectGrid
        title={t("Software Development")}
        subtitle={t("Building robust software solutions tailored to your business needs")}
        backgroundImage="https://img.freepik.com/premium-photo/man-is-working-computer-with-blue-light-screen_1044943-23016.jpg?w=996"
        />
    </div>
  )
}

export default SoftwareDev