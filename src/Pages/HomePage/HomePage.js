import React from "react";
import HomePageBanner from "../../Components/HomePageBanner/HomePageBanner";

import "./HomePage.css";
import NewArrivals from "../../Components/NewArrivals/NewArrival";
import BannerCards from "../../Components/BannerCards/BannerCards";
import CardHover from "../../Components/CardHover/CardHover";
import ImageGallery from "../../Components/ImageGallery/ImageGallery";

const HomePage = () => {
  return (
    <>
      <div className="homePageContainer">
        <HomePageBanner />
        <BannerCards />
        <NewArrivals />
        {/* <CardHover /> */}
        {/* <ImageGallery /> */}
      </div>
    </>
  );
};

export default HomePage;
