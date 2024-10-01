import { Modal, Paper, Box, Typography, Button } from '@mui/material';

const ErrorModal = ({ open, onClose, errorMessage }) => (
  <Modal open={open} onClose={onClose}>
    <Paper sx={{ width: 300, p: 2, mx: 'auto', my: 40 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Error
        </Typography>
        <Typography>{errorMessage}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
          <Button variant="contained" color="primary" onClick={onClose}>
            Close
          </Button>
        </Box>
      </Box>
    </Paper>
  </Modal>
);

export default ErrorModal;
