import React, { useState } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Grid, Box, IconButton } from '@mui/material';

const GetImage = () => {
  const [source, setSource] = useState('');
  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };

  return (
    <div style={{ height: '100%', textAlign: 'center' }}>
      <Grid container>
        <Grid item xs={12}>
          <h5>Capture your image</h5>
          {source}
          {source && (
            <Box
              display='flex'
              justifyContent='center'
              border={1}
              style={{ maxWidth: '80%', maxHeight: '80%', margin: '10px' }}
            >
              <img
                src={source}
                alt={'snap'}
                style={{ height: 'inherit', maxWidth: 'inherit' }}
              ></img>
            </Box>
          )}
          <input
            accept='image/*'
            style={{ display: 'none' }}
            id='icon-button-file'
            type='file'
            capture='environment'
            onChange={(e) => handleCapture(e.target)}
          />
          <label htmlFor='icon-button-file'>
            <IconButton
              color='primary'
              aria-label='upload picture'
              component='span'
            >
              <CameraAltIcon fontSize='large' color='primary' />
            </IconButton>
          </label>
        </Grid>
      </Grid>
    </div>
  );
};
export default GetImage;
