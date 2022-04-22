import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Typography } from '@mui/material';
import React from 'react';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import profailBanner from '../../../image/banner.jpeg';
import profail from '../../../image/profail.jpg';
import './ProfailBanner.css';

const ProfailBanner = () => {
    return (
        <Container>
            <div className='banner-section'>
                <img src={profailBanner} alt="" className='banner'/>
                <FontAwesomeIcon icon={faCamera}  className='profail-banner-icon'/>
            </div>
            <div className='profail-section'>
                <img src={profail} alt="" className='banner-profail'/>
                <FontAwesomeIcon icon={faCamera}  className='banner-profail_icon'/>
                <div className='banner-text'>
                <Typography variant="h5">Sozib Hossain</Typography>
                <Typography variant="h6">@sozibhossain <span style={{fontSize: '10px'}}> * Last seen Mar 1</span></Typography>
                </div>
            </div>
        </Container>
    );
};

export default ProfailBanner;