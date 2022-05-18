import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import StarIcon from '@mui/icons-material/Star';

import { useDispatch, useSelector } from 'react-redux';
import {
  setAllProducts,
  setFilteredProducts,
} from '../../Redux/Actions/ProductActions';

export default function FilterByRating(props) {
  const [selectedRatingIndex, setSelectedRatingIndex] = useState();
  const ProductsFromStore = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const array = document.querySelectorAll('.ratingItem span');
    array.forEach((e) => (e.style.color = 'white'));
    document.querySelectorAll('.ratingItem span')[selectedRatingIndex] &&
      (document.querySelectorAll('.ratingItem span')[
        selectedRatingIndex
      ].style.color = '#FAAF00');
  }, [selectedRatingIndex]);

  var ratings = ['Below 3', 'above 3', 'above 3.5', 'above 4', 'above 4.5'];

  const filterProducts = (rating) => {
    const maxRatingNumber = Number(rating.substring(6));
    // const minRatingNumber = maxRatingNumber - 0.5;
    props.setSelectedRating(maxRatingNumber);

    const filteredProductsByRating = ProductsFromStore.filter((product) => {
      if (rating === 'Below 3') {
        return (
          product.rating.rate < maxRatingNumber &&
          product.category === props.selectedCategory
        );
      } else
        return (
          product.rating.rate >= maxRatingNumber &&
          product.category === props.selectedCategory
        );
    });

    console.log('rating', rating);
    console.log('selectedCategory', props.selectedCategory);
    console.log('filteredProductsByRating', filteredProductsByRating);
    dispatch(setFilteredProducts(filteredProductsByRating));
  };

  return (
    <Grid
      item
      xs={12}
      md={12}
      sx={{
        backgroundColor: 'rgb(15 17 17)',
        color: 'white',
        borderRadius: '10px',
        ml: '10px',
        mt: '10px',
      }}
    >
      <Typography sx={{ p: '10px 15px' }} variant='h6' component='div'>
        Filter By Rating
      </Typography>
      <Divider variant='fullWidth' />
      <List>
        {ratings.map((rating, i) => {
          return (
            <ListItem key={'rating' + i}>
              <ListItemText
                className='ratingItem'
                primary={rating.charAt(0).toUpperCase() + rating.slice(1)}
                sx={{ cursor: 'pointer', display: 'inline-block' }}
                onClick={() => {
                  filterProducts(rating);
                  setSelectedRatingIndex(i);
                }}
              />
              {/* {rating}&nbsp;&nbsp;&nbsp; */}
              <StarIcon sx={{ color: '#faaf00' }} />
              <Divider variant='middle' component='li' />
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
}
