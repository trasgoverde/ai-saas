import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CustomCheckbox = ({ label, ...props }) => {
  return (
    <FormControlLabel
      control={<Checkbox {...props} color="primary" />}
      label={label}
    />
  );
};

export default CustomCheckbox;
