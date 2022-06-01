import React from 'react';
import './Footer.css';
import { Grid, Typography } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div className='footerContainter'>
      <Grid
        container
        spacing={2}
        sx={{
          color: 'white',
          width: '100%',
          m: '0px auto',
          textAlign: 'center',
        }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant='h6'
            gutterBottom
            component='div'
            textTransform='uppercase'
          >
            Contact Information
          </Typography>
          <Typography variant='body2' gutterBottom component='div'>
            9191919191 (call) <br /> 9191919192 (Whatsapp) <br />
            Version - 0.1.4
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant='h6'
            gutterBottom
            component='div'
            textTransform='uppercase'
          >
            Customer Support
          </Typography>
          <Typography variant='body2' gutterBottom component='div'>
            Frequent Questions <br /> Shipping & returns <br /> Contact us
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant='h6'
            gutterBottom
            component='div'
            textTransform='uppercase'
          >
            Legal Warning
          </Typography>
          <Typography variant='body2' gutterBottom component='div'>
            Terms of use <br /> Condition of contracts <br /> Cookies policy
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant='h6'
            gutterBottom
            component='div'
            textTransform='uppercase'
          >
            Follow Us
          </Typography>
          <Grid container sx={{ mb: '10px' }} className='iconContainer'>
            <Grid item xs={6} lg={3} sx={{ mb: '10px' }}>
              <Fab
                color='primary'
                aria-label='add'
                size='small'
                sx={{
                  backgroundColor: '#4267B2',
                  '&.MuiButtonBase-root:hover': {
                    bgcolor: '#4267B2',
                    opacity: '0.5',
                  },
                }}
              >
                <FacebookIcon />
              </Fab>
            </Grid>
            <Grid item xs={6} lg={3} sx={{ mb: '10px' }}>
              <Fab
                color='primary'
                aria-label='add'
                size='small'
                sx={{
                  backgroundColor: '#46c055',
                  '&.MuiButtonBase-root:hover': {
                    bgcolor: '#46c055',
                    opacity: '0.5',
                  },
                }}
              >
                <WhatsAppIcon />
              </Fab>
            </Grid>

            <Grid item xs={6} lg={3}>
              <Fab
                color='primary'
                aria-label='add'
                size='small'
                sx={{
                  backgroundColor: '#0e76a8',

                  '&.MuiButtonBase-root:hover': {
                    bgcolor: '#0e76a8',
                    opacity: '0.5',
                  },
                }}
              >
                <LinkedInIcon />
              </Fab>
            </Grid>

            <Grid item xs={6} lg={3}>
              <Fab
                color='primary'
                aria-label='add'
                size='small'
                sx={{
                  backgroundColor: '#00acee',
                  '&.MuiButtonBase-root:hover': {
                    bgcolor: '#00acee',
                    opacity: '0.5',
                  },
                }}
              >
                <TwitterIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
