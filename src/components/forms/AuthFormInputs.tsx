import { Button, Stack } from '@mui/material';
import { Form, FormikProps } from 'formik';
import React from 'react';
import { AuthRequest } from '../../model/AuthRequest';
import { TextField } from '../common/TextField';
import { CLIENT_ID_PLACEHOLDER} from '../../config';

export const AuthFormInputs: React.FC<FormikProps<AuthRequest>> = (props) => (
    <Form>
        <Stack sx={{ p: 4 }} spacing={2}>
            <TextField name="authUrl" label="Authorization Url" id="authUrl" disabled/>
            <TextField name="realm" label="Realm" id="realm"/>
            <TextField name="clientId" 
                label="Client ID" 
                id="clientId" 
                value={CLIENT_ID_PLACEHOLDER}/>
            <TextField name="scope" 
                label="Scopes" 
                id="scopes" />
        </Stack>
        <Stack sx={{ pb: 2 }} direction="row" justifyContent="center">
            <Button type="submit" 
                variant="contained" 
                color="primary"
                id="submitButton" 
                disabled={!props.isValid}>
                    Login
            </Button>
        </Stack>
    </Form>);