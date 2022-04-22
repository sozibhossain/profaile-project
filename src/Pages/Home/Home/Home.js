import React from 'react';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import ProfailBanner from '../ProfailBanner/ProfailBanner';
import ProfailIcon from '../ProfailIcon/ProfailIcon';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ProfailBanner></ProfailBanner>
            <ProfailIcon></ProfailIcon>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;