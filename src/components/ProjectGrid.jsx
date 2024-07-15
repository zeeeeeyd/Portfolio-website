import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { useTranslation } from 'react-i18next';
import Footer from "./Footer ";
import Header from "./Header";

const ProjectGrid = ({ title, subtitle, backgroundImage, projectData }) => {

  const { t } = useTranslation();
  
  return (
    <Box sx={{ width: '100%' }}>
      <Header />
      <Box
        sx={{
          position: 'relative',
          height: '450px', 
          marginBottom: 4,
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)', 
          }
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography 
            variant="h1" 
            component="h1"
            sx={{ 
              position: 'relative', 
              zIndex: 1, 
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontFamily: "Poppins",
              fontWeight: "Bold"
            }}
          >
            {title}
          </Typography>
          <Typography 
            variant="h4" 
            sx={{ 
              position: 'relative', 
              zIndex: 1, 
              maxWidth: '1000px',
              px: 2, 
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
              fontFamily: "Poppins"
            }}
          >
            {subtitle}
          </Typography>
        </motion.h1>
      </Box>
      <Box sx={{ px: { xs: 2, sm: 3, md: 4 }, margin:"3rem 0"}}>
        <Grid container spacing={3}>
          {Array.isArray(projectData) ? (
            projectData.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ display: 'flex' }}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.3 }}
                  sx={{ width: '100%' }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              </Grid>
            ))
          ) : (
            <Grid item xs={12} style={{display:'flex',justifyContent:'center'}}>
              <Typography>{t('Coming Soon !')}</Typography>
            </Grid>
          )}
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default ProjectGrid;
