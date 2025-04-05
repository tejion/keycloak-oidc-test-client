import React from 'react';
import TextField, { OutlinedTextFieldProps } from '@mui/material/TextField';

export interface TextInputComponentProps
  extends Omit<OutlinedTextFieldProps, 'variant'> {
  name: string; // Required for Formik integration
  width?: string;
  withHelper?: boolean;
  fullWidth?: boolean; // Default true, but customizable
}

export const TextInput: React.FC<TextInputComponentProps> = ({
  width,
  fullWidth = true,
  ...props
}) => (
  <TextField
    {...props}
    size="small"
    color="primary"
    fullWidth={fullWidth}
    sx={width ? { width } : undefined}
    id={`TextInputId-${props.name}`} // ✅ Assign test ID via `id`
    slotProps={{
      input: { id: `TextInputId-${props.name}` }, // ✅ Pass ID for testing
    }}
  />
);
