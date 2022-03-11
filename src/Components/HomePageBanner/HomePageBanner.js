import React from "react";
import BannerSlider from "../BannerSlider/BannerSlider";
import NewArrivals from "../NewArrivals/NewArrival";

import "./HomePageBanner.css";

const HomePageBanner = () => {
  return (
    <>
      <div className="bannerContainer">
        <BannerSlider />
      </div>
    </>
  );
};

export default HomePageBanner;
