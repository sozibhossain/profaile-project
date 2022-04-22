import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import videoBg1 from '../../../image/video1.mp4';
import videoBg2 from '../../../image/video2.mp4';
import './Gallery.css';



const Gallery = () => {
    return (
        <div>
            <div  style={{}}>
                <Container style={{paddingTop: '20px'}}>
                    <div>
                        <Typography style={{textAlign: 'center', padding: '0 0 30px 20px', fontSize: '15px' }}>
                        Each of the websites I design and build is designed to capture a specified audience's attention and keep them engaged. I have successfully worked with 20+ High profile clients/organizations in my career and completed 120+ jobs in different marketplaces.
                        Each of the websites I design and build is designed to capture a specified audience's 
                        </Typography>
                    </div>
                    <Box sx={{ width: '100%' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 6, sm: 8, md: 12 }} >
                            <Grid item xs={4} sm= {4} md={4}>
                                <video width="350" height="200" controls >
                                <source src={videoBg1} type="video/mp4" />
                                </video>
                            </Grid>
                            <Grid item xs={4} sm= {4} md={4} className='galleryBg'>
                                
                                <Typography variant="h6" className='gallery-text'>
                                    completed 120+ jobs in different marketplaces.
                                    Each of the websites I design
                                </Typography>
                            </Grid>
                            <Grid item xs={4} sm= {4} md={4}>
                                <video width="350" height="200" controls >
                                <source src={videoBg2} type="video/mp4" />
                                </video>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>
        </div>
    );
};

export default Gallery;