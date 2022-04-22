import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { faUser, faHeart, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProfailIcon.css';

const ProfailIcon = () => {
    return (
        <div>
            <Container style={{paddingTop: '30px'}}>
                <div>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 6, sm: 8, md: 12 }} >
                        <Grid item xs={2} sm= {2} md={2}>
                            <Typography>loremipsum.com</Typography>
                        </Grid>
                        <Grid item xs={2} sm= {2} md={2}>
                            <Typography>loremipsum.com</Typography>
                        </Grid>
                        <Grid item xs={2} sm= {2} md={2}>
                            <Typography>loremipsum.com</Typography>
                        </Grid>
                        <Grid item xs={2} sm= {2} md={2}>
                            <Typography>loremipsum.com</Typography>
                        </Grid>
                        <Grid item xs={2} sm= {2} md={2}>
                            <Typography>loremipsum.com</Typography>
                        </Grid>
                        <Grid item xs={2} sm= {2} md={2}>
                            <Typography>loremipsum.com</Typography>
                        </Grid>
                    </Grid>
                </Box>
                </div>
                <div className='profail-icon'>
                    <Box sx={{ width: '100%' }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }} >
                                <Grid item xs={4} sm= {4} md={4} className='icon-text'>
                                <FontAwesomeIcon icon={faUser} className='icon'/>
                                <Typography>Profail</Typography>
                                </Grid>

                                <Grid item xs={4} sm= {4} md={4} className='icon-text'>
                                <FontAwesomeIcon icon={faHeart} className='icon'/>
                                <Typography>Friends</Typography>
                                </Grid>

                                <Grid item xs={4} sm= {4} md={4} className='icon-text'>
                                <FontAwesomeIcon icon={faPencil} className='icon'/>
                                <Typography>account</Typography>
                                </Grid>
                            </Grid>
                    </Box>
                </div>
            </Container>
        </div>
    );
};

export default ProfailIcon;