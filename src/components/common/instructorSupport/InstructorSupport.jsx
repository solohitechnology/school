import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@material-ui/core';

const instructorSupportServices = [
  {
    title: 'Teaching Resources',
    description: 'Access teaching materials, lesson plans, and resources.',
  },
  {
    title: 'Professional Development',
    description: 'Participate in workshops and training to enhance teaching skills.',
  },
  {
    title: 'Technical Assistance',
    description: 'Get help with technical issues related to teaching platforms.',
  },
  {
    title: 'Student Feedback',
    description: 'Receive feedback from students to improve teaching methods.',
  },
  {
    title: 'Collaboration Spaces',
    description: 'Join forums and groups to collaborate with fellow instructors.',
  },
];

const InstructorSupport = () => {
  return (
    <Container style={{overflowY:"hidden"}} maxWidth="lg">
      <Typography style={{color:"black", background:"skyblue", borderRadius:"30px", overflowY:"hidden", marginTop:"130px"}} variant="h3" align="center" gutterBottom>
        Instructor Support Services
      </Typography>
      <Grid container spacing={3}>
        {instructorSupportServices.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Typography style={{color:"black", background:" skyblue ", borderRadius:"2px 2px 100px 100px ", textAlign:"center" }} variant="h5" gutterBottom>
                  {service.title}
                </Typography>
                <Typography  style={{fontWeight:"bold", fontSize:"18px", fontFamily:"monospace"}} >{service.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default InstructorSupport;













   





