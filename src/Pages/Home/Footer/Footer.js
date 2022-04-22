import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Container, Grid, Link, } from '@mui/material';
import React from 'react';
import { faSearch, faGithub, faBell } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        
        <div  style={{}}>
            <Container style={{color: 'black', padding: '30px 0 30px 0'}}>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 6, sm: 8, md: 12 }} >
                        <Grid item xs={2} sm= {2} md={2}>
                        <Link href="#" style={{textDecoration: 'none', display: 'block', paddingTop: '55px', color: '#000', fontSize: '12px' }}>
                                @ 2022 FunFindrr
                            </Link>
                        </Grid>
                        <Grid item xs={2} sm= {2} md={2}>
                            <Link href="#" style={{textDecoration: 'none', display: 'block', color: '#000', fontSize: '12px' }}>
                                Help
                            </Link>
                            <Link href="#" style={{textDecoration: 'none', display: 'block', color: '#000', fontSize: '12px' }}>
                                Store
                            </Link>
                            <Link href="#" style={{textDecoration: 'none', display: 'block', color: '#000', fontSize: '12px' }}>
                                How it works
                            </Link>
                        </Grid>
                        <Grid item xs={2} sm= {2} md={2}>
                            <Link href="#" style={{textDecoration: 'none', display: 'block', color: '#000', fontSize: '12px' }}>
                                About
                            </Link>
                            <Link href="#" style={{textDecoration: 'none', display: 'block', color: '#000', fontSize: '12px' }}>
                                Refferals
                            </Link>
                            <Link href="#" style={{textDecoration: 'none', display: 'block', color: '#000', fontSize: '12px' }}>
                                Prvacy
                            </Link>
                        </Grid>
                        <Grid item xs={2} sm= {2} md={2} >
                            <Link href="#" style={{textDecoration: 'none', display: 'block', color: '#000', fontSize: '12px' }}>
                                Coockie notice
                            </Link>
                            <Link href="#" style={{textDecoration: 'none', display: 'block', color: '#000', fontSize: '12px' }}>
                                Terms of services
                            </Link>
                            <Link href="#" style={{textDecoration: 'none', display: 'block', color: '#000', fontSize: '12px' }}>
                                Acceptable use policy
                            </Link>
                        </Grid>
                        <Grid item xs={2} sm= {2} md={2}>
                            <Link href="#" style={{textDecoration: 'none', display: 'block', color: '#000', fontSize: '12px' }}>
                                Branding
                            </Link>
                            <Link href="#" style={{textDecoration: 'none', display: 'block', color: '#000', fontSize: '12px' }}>
                                Statement
                            </Link>
                            <Link href="#" style={{textDecoration: 'none', display: 'block', color: '#000', fontSize: '12px' }}>
                                Blog
                            </Link>
                        </Grid>
                        <Grid item xs={2} sm= {2} md={2}>
                            <Link href="#" style={{textDecoration: 'none', display: 'block', color: '#000', fontSize: '12px' }}>
                            {/* <FontAwesomeIcon icon={faTwitter} /> */}
                            </Link>
                            <Link href="#" style={{textDecoration: 'none', display: 'block', color: '#000', fontSize: '12px' }}>
                                about
                            </Link>
                            <Link href="#" style={{textDecoration: 'none', display: 'block', color: '#000', fontSize: '12px' }}>
                                EN &nu;
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Footer;