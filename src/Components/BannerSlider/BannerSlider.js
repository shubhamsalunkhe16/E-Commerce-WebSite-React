import React, { Component } from 'react';
import Slider from 'react-slick';

// import BannerImage1 from "../../Static/Images/bannerImage1.png";
import BannerImage2 from '../../Static/Images/bannerImage2.png';
import BannerImage3 from '../../Static/Images/bannerImage3.jpg';

export default class BannerSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: 'linear',
      adaptiveHeight: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <img className='bannerImage' src={BannerImage2} alt='Banner Image' />
          <img className='bannerImage' src={BannerImage3} alt='Banner Image' />
        </Slider>
      </div>
    );
  }
}
