import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useNavigate } from 'react-router-dom';
import ItemCounter from '../ItemCounter.js/ItemCounter';
import { Button } from '@mui/material';
import {
  removeFromCart,
  addToCartTotalPrice,
} from '../../Redux/Actions/ProductActions';
import { useDispatch } from 'react-redux';

export default function CartItem(props) {
  const [count, setCount] = useState(props.product.qty);
  const [productTotal, setProductTotal] = useState(props.product.price);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // setProductTotal(props.product.price * count);
    // console.log("total", productTotal);
    // dispatch(addToCartTotalPrice(props.product.price));
  }, [count]);

  const {
    id,
    title,
    description,
    image,
    rating,
    price,
    category,
    qty,
  } = props.product;

  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: '10px',
        flexDirection: window.innerWidth > 550 ? 'row' : 'column',
      }}
    >
      <Box sx={{ width: '125px' }}>
        <CardMedia
          component='img'
          sx={{
            width: '110px',
            height: '110px',
            borderRadius: '10px',
            mx: '15px',
            objectFit: 'contain',
            cursor: 'pointer',
            mt: window.innerWidth < 550 && '15px',
          }}
          onClick={() => {
            navigate('/Product/' + id);
          }}
          image={image}
          alt={title}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: window.innerWidth > 550 ? 'calc( 100% - 300px)' : '100%',
          alignItems: window.innerWidth < 550 && 'center',
          justifyContent: 'center',
        }}
      >
        <CardContent
          sx={{
            pb: '0',
            width: '100%',
            margin: window.innerWidth < 550 && '0 auto',
            textAlign: window.innerWidth < 550 && 'center',
          }}
        >
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontSize: '1.3rem',
              cursor: 'pointer',
            }}
            onClick={() => {
              navigate('/Product/' + id);
            }}
          >
            {title}
          </Typography>
          <Typography
            variant='body2'
            display='block'
            gutterBottom
            sx={{ color: '#007185', mb: '15px' }}
          >
            Category : {category}
          </Typography>
          <ItemCounter
            count={count}
            setCount={setCount}
            product={props.product}
          />
        </CardContent>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '175px',
          textAlign: 'right',
          mr: window.innerWidth > 550 ? '20px' : '0px',
          alignItems: 'center',
        }}
      >
        <Typography variant='h4' color='primary' mb='15px'>
          &#36; {(price * qty).toFixed(2)}
        </Typography>
        <Button
          sx={{
            width: 'fit-content',
            alignSelf: window.innerWidth > 550 && 'end',
          }}
          variant='text'
          color='error'
          className='removeFromCartBtn'
          onClick={() => {
            dispatch(removeFromCart(props.product));
          }}
        >
          Remove
        </Button>
      </Box>
    </Card>
  );
}
