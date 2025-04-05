import { Box, Paper, Typography } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { AuthRequest } from '../../model/AuthRequest';
import { INITIAL_AUTH_FORM_VALUES } from '../../config';
import { authTestRequestAtom } from '../../state/atoms';
import { AuthFormInputs } from './AuthFormInputs';

export const AuthForm: React.FC  = () => {
    const [ , setAuthTestRequest] = useRecoilState(authTestRequestAtom);
    const navigate = useNavigate();

    const handleFormSubmit = (authTestRequest: AuthRequest) => {
          setAuthTestRequest(authTestRequest);
          navigate('/auth-response');
    }

    return (
        <div className="auth-form-container">
            <Box className="auth-form" sx={{ mx: "auto", p: 4 }}>
            <Typography align='center' variant='h4'>OIDC TEST Client</Typography>
            <Paper sx={{ p: 3 }}>
            <Formik onSubmit={handleFormSubmit}
                    initialValues={INITIAL_AUTH_FORM_VALUES}
                    component={AuthFormInputs} />
            </Paper>
        </Box>
        </div>
    );
}