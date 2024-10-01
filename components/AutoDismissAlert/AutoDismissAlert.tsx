import React, { useState, useEffect } from 'react';
import { Alert, AlertTitle, Button } from '@mui/material';

const AutoDismissAlert = ({ severity, message, onClose }) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
      onClose && onClose(); 
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!showAlert) {
    return null; 
  }

  return (
    <Alert severity={severity} sx={{ position: 'absolute', top: 20, right: 20 }}>
      <AlertTitle>Error</AlertTitle>
      {message}
      {onClose && (
        <Button size="small" onClick={() => setShowAlert(false)}>
          Close
        </Button>
      )}
    </Alert>
  );
};

export default AutoDismissAlert;
