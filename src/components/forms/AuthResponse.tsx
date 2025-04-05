import { Alert, Box, Button, Paper, Stack} from '@mui/material';
import Keycloak, { KeycloakLoginOptions} from 'keycloak-js';
import React, { useEffect, useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { authTestRequestAtom, keycloakStateAtom } from '../../state/atoms';
import { DetailCard } from './DetailCard';

export const AuthResponse: React.FC = () => {
    const [error, setError] = useState();
    const [authTestRequest, setAuthTestRequest] = useRecoilState(authTestRequestAtom);
    const [keycloakState, setKeycloakState] = useRecoilState(keycloakStateAtom);

    const keycloakInitialized = useRef(false);
    const authRequestUpdated = useRef(false);

    useEffect(() => {
        console.log("inside merged useEffect");

        if (!keycloakInitialized.current && !keycloakState?.authenticated) {
            keycloakInitialized.current = true;

            const keycloak = new Keycloak({
                url: authTestRequest.authUrl,
                realm: authTestRequest.realm,
                clientId: authTestRequest.clientId,
            });

            keycloak.init({
                checkLoginIframe: false,
                enableLogging: true,
                pkceMethod: 'S256'
            }).then(() => {
                if (keycloak.authenticated) {
                    console.log("keycloak authenticated");
                    setKeycloakState(keycloak);
                    window.history.replaceState({}, document.title, window.location.pathname);
                } else {
                    keycloak.login({
                        idpHint: authTestRequest.idpHint,
                        scope: authTestRequest.scope,
                        acrValues: authTestRequest.acrValues,
                        claims: authTestRequest.claims
                    } as unknown as KeycloakLoginOptions);
                }
            }).catch((err) => {
                console.error(err);
                setError(err);
            });
        }

        // Ensure we update only once after authentication
        if (keycloakState?.authenticated && !authRequestUpdated.current) {
            authRequestUpdated.current = true;
            const { idpHint, ...rest } = authTestRequest;
            setAuthTestRequest(rest);
        }
    }, [authTestRequest, keycloakState, setKeycloakState, setAuthTestRequest, setError]);

    const tokenToString = (parsedToken: Keycloak.KeycloakTokenParsed) => {
        return JSON.stringify(parsedToken!, null, 2);
    };

    const handleLogout = () => {
        keycloakState.logout({
            redirectUri: import.meta.env.VITE_APP_REDIRECT_URI
        }).catch(error => console.log(error));
    };

    return (
        <Box sx={{ mx: "auto", p: 4 }}>

        {error && (
            <Alert severity="error" style={{ marginTop: '2em' }}
                action={<Button color="inherit" size="small" onClick={() => window.location.reload()}>RETRY</Button>}>
                <code>{JSON.stringify(error, null, 2)}</code>
            </Alert>
        )}

            {keycloakState?.authenticated && <>
                <Paper className="auth-response-form">
                    <Stack sx={{ p: 4 }} spacing={2}>
                        <DetailCard title="Access Token" id="accessToken" contents={keycloakState?.token!} />
                        <DetailCard title="Parsed Access Token"
                            id="accessTokenParsed"
                            contents={tokenToString(keycloakState?.tokenParsed!)}
                            pretty
                        />
                        <DetailCard title="ID Token" id="idToken" contents={keycloakState?.idToken!} />
                        <DetailCard title="Parsed ID Token"
                            id="idTokenParsed"
                            contents={tokenToString(keycloakState?.idTokenParsed!)}
                            pretty
                        />
                        <DetailCard title="Refresh Token" id="refreshToken" contents={keycloakState?.refreshToken!} />
                        <DetailCard title="Parsed Refresh Token"
                            id="refreshTokenParsed"
                            contents={tokenToString(keycloakState?.refreshTokenParsed!)}
                            pretty
                        />
                    </Stack>
                    <Stack sx={{ pb: 2 }} direction="row" justifyContent="center">
                        <Button variant="contained"
                            id="logoutButton"
                            color="primary"
                            onClick={handleLogout}>
                            Logout
                        </Button>
                    </Stack>
                </Paper>

            </>}
        </Box>
    );
};
