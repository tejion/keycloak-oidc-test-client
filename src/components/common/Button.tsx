import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  text: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, variant = "contained", ...props }) => {
  return (
    <Button variant={variant} color="primary" {...props}>
      {text}
    </Button>
  );
};

export default CustomButton;
