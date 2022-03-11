import React from "react";
import "./BannerCards.css";
import { Grid } from "@mui/material";

import bannerCardLeft from "../../Static/Images/bannerCardLeft.png";
import bannerCardRight1 from "../../Static/Images/bannerCardRight1.png";
import bannerCardRight2 from "../../Static/Images/bannerCardRight2.png";

const BannerCards = () => {
  return (
    <div>
      <Grid container spacing={2} mt="2px">
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "gray",
              height: "400px",
              borderRadius: "20px",
            }}
          >
            <img
              className="bannerCardImage"
              src={bannerCardLeft}
              alt="Banner Image"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "gray",
              height: "192px",
              borderRadius: "20px",
              mb: "16px",
            }}
          >
            <img
              className="bannerCardImage"
              src={bannerCardRight1}
              alt="Banner Image"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "gray",
              height: "192px",
              borderRadius: "20px",
            }}
          >
            <img
              className="bannerCardImage"
              src={bannerCardRight2}
              alt="Banner Image"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default BannerCards;
