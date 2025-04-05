import { atom, RecoilState } from "recoil";
import { INITIAL_AUTH_FORM_VALUES } from "../config";
import { AuthRequest } from "../model/AuthRequest";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
    key: 'test-client',
    storage: sessionStorage  // Changed from default localStorage to sessionStorage
});

export const authTestRequestAtom: RecoilState<AuthRequest> = atom({
    key: "authTestRequest",
    default: INITIAL_AUTH_FORM_VALUES,
    effects_UNSTABLE: [persistAtom],
});

export const keycloakStateAtom: RecoilState<Keycloak.KeycloakInstance> = atom({
    key: "keycloakState",
    default: {} as Keycloak.KeycloakInstance,
});