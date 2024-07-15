import React from 'react'
import ProjectGrid from '../components/ProjectGrid';
import { useTranslation } from 'react-i18next';

const AiBasedSolution = () => {

  const { t } = useTranslation();

  return (
    <div>
        <ProjectGrid
        title={t("AI-Based Applications")}
        subtitle={t("Innovative AI solutions to transform your business processes")}
        backgroundImage="https://img.freepik.com/premium-photo/closeup-shot-individual-wearing-glasses_153912-327730.jpg?w=826"
        />
    </div>
  )
}

export default AiBasedSolution