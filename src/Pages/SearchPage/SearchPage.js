import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AllProducts from '../../Components/AllProducts/AllProducts';
import FilterByCategory from '../../Components/FilterBy/FilterByCategory';
import FilterByPrice from '../../Components/FilterBy/FilterByPrice';
import FilterByRating from '../../Components/FilterBy/FilterByRating';
import { useState } from 'react';
import { useEffect } from 'react';

export default function SearchPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState([5, 1000]);
  const [selectedRating, setSelectedRating] = useState('');

  useEffect(() => {
    setSelectedCategory('');
    window.scroll({
      top: '0px',
      behavior: 'smooth',
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, margin: '0px auto', mt: '15px', maxWidth: '85%' }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={4}
          lg={3}
          sx={{
            margin: '0px auto',
            maxWidth: '95%',
            paddingLeft: '5px !important',
          }}
        >
          <FilterByCategory
            setSelectedCategory={setSelectedCategory}
            setSelectedPriceRange={setSelectedPriceRange}
            setSelectedRating={setSelectedRating}
            selectedCategory={selectedCategory}
            selectedPriceRange={selectedPriceRange}
            selectedRating={selectedRating}
          />
          <FilterByPrice
            setSelectedPriceRange={setSelectedPriceRange}
            selectedCategory={selectedCategory}
            selectedPriceRange={selectedPriceRange}
            selectedRating={selectedRating}
          />
          <FilterByRating
            setSelectedRating={setSelectedRating}
            selectedCategory={selectedCategory}
            selectedPriceRange={selectedPriceRange}
            selectedRating={selectedRating}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          lg={9}
          sx={{ margin: '0px auto', maxWidth: '95%' }}
        >
          <AllProducts />
        </Grid>
      </Grid>
    </Box>
  );
}
