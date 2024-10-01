import React from 'react';
import { DotLoader } from 'react-spinners';
import { Typography } from '@mui/material';

const LoadingOverlay = ({ open }) => (
  <div
    style={{
      display: open ? 'flex' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 9999,
    }}
  >
    <div style={{ textAlign: 'center', color: 'white' }}>
      <Typography variant="h6" gutterBottom>
        Loading...
      </Typography>
      <DotLoader color="#36d7b7" />
    </div>
  </div>
);

export default LoadingOverlay;
