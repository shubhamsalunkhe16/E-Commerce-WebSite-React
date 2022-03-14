import React from "react";
import HomePageBanner from "../../Components/HomePageBanner/HomePageBanner";

import "./HomePage.css";
import NewArrivals from "../../Components/NewArrivals/NewArrival";
import BannerCards from "../../Components/BannerCards/BannerCards";

const HomePage = () => {
  return (
    <>
      <div className="homePageContainer">
        <HomePageBanner />
        <BannerCards />
        <NewArrivals />
      </div>
    </>
  );
};

export default HomePage;
