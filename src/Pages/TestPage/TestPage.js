import React from 'react';
import GetImage from './GetImage';
import GetLocation from './GetLocation';
import GetLiveScore from './GetLiveScore';
import Slider from 'react-slick';

const TestPage = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const imgArray = [
    'https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/04/26/12/14/travel-3351825_960_720.jpg',
    'https://cdn.pixabay.com/photo/2013/02/01/18/14/url-77169_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/01/28/17/43/fish-2016013_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244648_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/04/26/16/31/marine-3352341_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg',
    'https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_960_720.jpg',
    'https://cdn.pixabay.com/photo/2014/07/16/05/18/beach-394503_960_720.jpg',
    'https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg',
    'https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/03/28/16/40/lake-696098_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/04/26/12/14/travel-3351825_960_720.jpg',
    'https://cdn.pixabay.com/photo/2013/02/01/18/14/url-77169_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/01/28/17/43/fish-2016013_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244648_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg',
    'https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_960_720.jpg',
    'https://cdn.pixabay.com/photo/2014/07/16/05/18/beach-394503_960_720.jpg',
  ];
  return (
    <div style={{ textAlign: 'center' }}>
      <GetLiveScore />
      <div>
        <Slider {...settings}>
          {imgArray.map((imgsrc) => {
            return (
              <img
                className='bannerImage'
                width='396px'
                height='198px'
                src={imgsrc}
                alt='Banner Image'
              />
            );
          })}
        </Slider>
      </div>
      <h4 style={{ textAlign: 'center', paddingTop: '25px' }}>
        Test to access <span style={{ color: '#faaf00' }}>Files</span> from your
        device
      </h4>
      <br />
      <input type='file' name='testFile' id='testFile' />
      <br />
      <br />
      <br />
      <h4>
        Test to access <span style={{ color: '#faaf00' }}>Camera</span> of your
        device
      </h4>
      <GetImage />
      <br />
      <h4>
        Test to access <span style={{ color: '#faaf00' }}>Location</span> of
        your device
      </h4>
      <GetLocation />
    </div>
  );
};

export default TestPage;
