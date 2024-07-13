import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Rating } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const ProjectCard = ({ project }) => {
  if (!project || typeof project !== 'object') {
    return <Card><CardContent>Invalid project data</CardContent></Card>;
  }

  const { title, description, images, rating } = project;

  return (
      <Card sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        overflow: 'hidden',
        transition: 'transform 0.3s',
        ':hover': {
          transform: 'scale(1.03)'
        }
      }}>
      {Array.isArray(images) && images.length > 0 ? (
        <Carousel sx={{ flexGrow: 0, flexShrink: 0, flexBasis: 'auto' }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title || 'Project'} - Image ${index + 1}`}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
          ))}
        </Carousel>
      ) : (
        <div style={{ width: '100%', height: '200px', backgroundColor: '#ccc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          No Image Available
        </div>
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography sx={{color:"#0C4B54",fontFamily:"Poppins",fontWeight:'500'}} gutterBottom variant="h5" component="div">
          {title || 'Untitled Project'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description || 'No description available'}
        </Typography>
        {typeof rating === 'number' && (
          <Rating name="read-only" value={rating} readOnly sx={{color:"#d9ea24"}}/>
        )}
      </CardContent>
      <CardActions>
        <button style={{backgroundColor:"#0C4B54"}}>View Project</button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;