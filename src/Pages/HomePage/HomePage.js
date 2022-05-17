import React, { useEffect } from 'react';
import HomePageBanner from '../../Components/HomePageBanner/HomePageBanner';

import './HomePage.css';
import NewArrivals from '../../Components/NewArrivals/NewArrival';
import BannerCards from '../../Components/BannerCards/BannerCards';

const HomePage = () => {
  useEffect(() => {
    window.scroll({
      top: '0px',
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <div className='homePageContainer'>
        <HomePageBanner />
        <NewArrivals />
      </div>
    </>
  );
};

export default HomePage;
