import { AuthRequest } from "./model/AuthRequest";
import { TAlgorithm } from "jwt-simple";

export const INITIAL_KEYCLOAK_STATE = {} as Keycloak.KeycloakInstance;

export const INITIAL_AUTH_FORM_VALUES: AuthRequest = {
    authUrl: import.meta.env.VITE_KEYCLOAK_AUTH_URL,
    realm: import.meta.env.VITE_KEYCLOAK_REALM,
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID
};

export const CLAIMS_ALGORITHM: TAlgorithm = "HS512";


export const APP_REDIRECT_URI=import.meta.env.VITE_APP_REDIRECT_URI

export const CLIENT_ID_PLACEHOLDER = "Client must be public with urls configured";
