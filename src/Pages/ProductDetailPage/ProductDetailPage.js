import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';
import { Container, Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import Forward10Icon from '@mui/icons-material/Forward10';

import Loader from '../../Components/Loader/Loader';
import FacilityCard from '../../Components/FacilityCard.js/FacilityCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  addAmountToTotalPriceInCart,
  fetchandSetProductById,
  removeSelectedProduct,
} from '../../Redux/Actions/ProductActions';

const ProductDetailPage = () => {
  let { productId } = useParams();

  const dispatch = useDispatch();
  const productData = useSelector((state) => [state.selectedProduct]);

  useEffect(() => {
    window.scroll({
      top: '0px',
      behavior: 'smooth',
    });
    productId !== '' && dispatch(fetchandSetProductById(productId));
    return () => {
      dispatch(removeSelectedProduct(productId));
    };
  }, []);

  if (productData[0]?.id === undefined) return <Loader />;

  return (
    <>
      <Container sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{ flexGrow: 1, margin: '0px auto', mt: '15px', maxWidth: '85%' }}
        >
          <Grid item xs={12} sm={6} mt='30px'>
            <Box
              sx={{
                flexGrow: 1,
                margin: '0px auto',
                padding: '20px',
                borderRadius: '5px',
                maxWidth: '92%',
                bgcolor: 'white',
              }}
            >
              <img
                src={productData[0].image}
                alt={productData[0].category}
                width='100%'
                // style={{
                //   borderRadius: '20px',
                //   margin: '0 auto',
                //   display: 'block',
                // }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h4' gutterBottom component='div' mt={4}>
              {productData[0].title}
            </Typography>
            <Typography
              variant='body2'
              display='block'
              gutterBottom
              sx={{ color: '#007185', mb: '15px' }}
            >
              Category : {productData[0].category}
            </Typography>
            <div>
              <Rating
                name='half-rating-read'
                defaultValue={productData[0].rating?.rate}
                precision={0.5}
                readOnly
              />
              &nbsp;&nbsp;
              <Typography
                variant='subtitle2'
                component='span'
                color='grey'
                fontSize='16px'
                position='relative'
                bottom='5px'
              >
                {productData[0].rating.count} reviews
              </Typography>
            </div>
            <Typography variant='h4' color='#c45500' my='15px'>
              Price : &#36; {productData[0].price}
            </Typography>
            <Typography variant='body2' gutterBottom>
              Inclusive of all taxes
            </Typography>
            <Grid
              container
              spacing={2}
              mt='15px'
              sx={{ display: window.innerWidth < 700 && 'none' }}
            >
              <Grid item xs={3}>
                <FacilityCard
                  icon={<LocalAtmIcon fontSize='large' />}
                  text='Pay on Delivery'
                />
              </Grid>
              <Grid item xs={3}>
                <FacilityCard
                  icon={<Forward10Icon fontSize='large' />}
                  text='10 Days Returnable'
                />
              </Grid>
              <Grid item xs={3}>
                <FacilityCard
                  icon={<ConnectWithoutContactIcon fontSize='large' />}
                  text='No-Contact Delivery'
                />
              </Grid>
              <Grid item xs={3}>
                <FacilityCard
                  icon={<LocalShippingIcon fontSize='large' />}
                  text='Fast Delivered'
                />
              </Grid>
            </Grid>
            <Typography variant='body1' my='15px'>
              {productData[0].description}
            </Typography>
            <Button
              variant='contained'
              color='primary'
              sx={{ mr: 1 }}
              startIcon={<AddShoppingCartIcon />}
              onClick={() => {
                dispatch(addToCart(productData[0]));
                // dispatch(addAmountToTotalPriceInCart(productData[0]));
              }}
            >
              Add to Cart
            </Button>
            {/* <Button
              variant="contained"
              color="primary"
              startIcon={<FavoriteIcon />}
            >
              Add to wishlist
            </Button> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProductDetailPage;
