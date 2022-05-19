import './NewArrival.css';

import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchandSetAllProducts } from '../../Redux/Actions/ProductActions';
import Grid from '@mui/material/Grid';
import Loader from '../Loader/Loader';
import ProductCard from '../ProductCard/ProductCard';
import { Box, Skeleton, Container } from '@mui/material';

export default function AllProducts(props) {
  const [isLoading, setisLoading] = useState(true);
  const dispatch = useDispatch();
  const ProductsFromStoreInitial = useSelector((state) => state.allProducts);
  const ProductsFromStore = useSelector(
    (state) => state.filteredProducts
  ).slice(0, 6);

  useEffect(() => {
    dispatch(fetchandSetAllProducts()).then(() => {
      setisLoading(false);
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          width: '85%',
          margin: '0 auto',
        }}
      >
        <Grid container spacing={3}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'start',
              fontSize: '32px',
              paddingLeft: 3,
              fontWeight: 'bold',
              position: 'relative',
              top: '40px',
            }}
          >
            New Products
          </Box>

          {ProductsFromStore.length === 0 ? (
            <>
              {ProductsFromStore?.map((product) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={2}
                    xl={2}
                    key={'product' + product.id}
                    sx={{ mt: '30px' }}
                  >
                    <ProductCard
                      key={product.id}
                      imgSrc={product.image}
                      title={product.title}
                      rating={product.rating.rate}
                      price={product.price}
                      product={product}
                    />
                  </Grid>
                );
              })}
            </>
          ) : (
            <>
              {new Array(6).fill('').map(() => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
                    <Skeleton
                      variant='rectangular'
                      height={500}
                      sx={{ mt: '30px' }}
                    />
                  </Grid>
                );
              })}
            </>
          )}
        </Grid>
      </Box>
    </>
  );
}
