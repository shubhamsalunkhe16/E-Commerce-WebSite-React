import * as React from 'react';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { useDispatch, useSelector } from 'react-redux';
import {
  setAllProducts,
  setFilteredProducts,
} from '../../Redux/Actions/ProductActions';
import { useState } from 'react';
import { useEffect } from 'react';

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement='top' title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: '#FAAF00',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 3,
  },
  '& .MuiSlider-markLabel': {
    color: 'white',
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className='airbnb-bar' />
      <span className='airbnb-bar' />
      <span className='airbnb-bar' />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

const marks = [
  {
    value: 5,
    label: '5',
  },
  {
    value: 250,
    label: '250',
  },
  {
    value: 500,
    label: '500',
  },
  {
    value: 750,
    label: '750',
  },
  {
    value: 1000,
    label: '1000',
  },
];

export default function FilterByPrice(props) {
  const [priceRange, setpriceRange] = useState([5, 1000]);
  const ProductsFromStore = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    setpriceRange([5, 1000]);
    console.log('*****cat change');
  }, [props.selectedCategory]);

  const filterProducts = (e) => {
    const [minRange, maxRange] = e.target.value;
    setpriceRange([minRange, maxRange]);
    props.setSelectedPriceRange([minRange, maxRange]);
    const filteredProductsByPrice = ProductsFromStore.filter((product) => {
      if (props.selectedRating !== '') {
        return (
          product.price > minRange &&
          product.price < maxRange &&
          product.category.includes(props.selectedCategory) &&
          product.rating.rate >= props.selectedRating
        );
      } else {
        console.log('props.selectedCategory', props.selectedCategory);

        return (
          product.price > minRange &&
          product.price < maxRange &&
          product.category.includes(props.selectedCategory)
          // product.category.includes("")
        );
      }
    });
    console.log('filteredProductsByPrice', filteredProductsByPrice);

    dispatch(setFilteredProducts(filteredProductsByPrice));
  };

  return (
    <Box
      sx={{
        width: window.innerWidth > 800 ? '97%' : '95%',
        p: '0px 20px',
        backgroundColor: 'rgb(15 17 17)',
        color: 'white',
        borderRadius: '10px',
        ml: '10px',
        mt: '10px',
      }}
    >
      <Typography sx={{ p: '10px 0px' }} variant='h6' component='div'>
        Filter By Price
      </Typography>
      <Divider variant='fullWidth' />
      <AirbnbSlider
        valueLabelDisplay='auto'
        sx={{ mt: '15px' }}
        components={{ Thumb: AirbnbThumbComponent }}
        getAriaLabel={(index) =>
          index === 0 ? 'Minimum price' : 'Maximum price'
        }
        value={priceRange}
        defaultValue={priceRange}
        min={5}
        max={1000}
        marks={marks}
        onChange={(e) => {
          filterProducts(e);
        }}
      />
    </Box>
  );
}
