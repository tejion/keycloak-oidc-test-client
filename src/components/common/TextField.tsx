import React from 'react';
import { FastField, FastFieldProps } from 'formik';
import { TextInputComponentProps, TextInput } from './TextInput';

export const TextField: React.FC<TextInputComponentProps> = ({
  withHelper = true,  
  ...rest
}) => {
  return (
    <FastField name={rest.name}>
      {({ field, meta }: FastFieldProps) => (
        <TextInput
          {...rest}
          {...field}
          error={meta.touched ? Boolean(meta.error) : false}
          helperText={meta.touched && withHelper ? meta.error : ""}
        />
      )}
    </FastField>
  );
};
