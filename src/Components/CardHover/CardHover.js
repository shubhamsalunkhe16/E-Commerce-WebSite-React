import React from "react";
import "./CardHover.css";

import bannerCardLeft from "../../Static/Images/bannerCardLeft.png";
import bannerCardRight1 from "../../Static/Images/bannerCardRight1.png";
import bannerCardRight2 from "../../Static/Images/bannerCardRight2.png";

const CardHover = () => {
  return (
    <>
      <div class="column">
        <div class="effect">
          <div class="effect-img">
            <img src={bannerCardLeft} alt="" />
          </div>
          <div class="effect-text">
            <div class="inner">
              <h2>This is heading</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat velit qui quos repellat nulla soluta exceptu
              </p>
              <div class="effect-btn">
                <a href="#" class="btn">
                  <i class="fa fa-eye"></i> Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHover;
