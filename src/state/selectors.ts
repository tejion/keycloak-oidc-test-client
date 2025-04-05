import { encode } from "jwt-simple";
import { nanoid } from "nanoid";
import { selector } from 'recoil';
import { CLAIMS_ALGORITHM } from '../config';
import { authTestRequestAtom } from './atoms';

export const jwtClaim = selector({
    key: "jwtClaim",
    get: ({ get }) => {
        const authTestRequestState = get(authTestRequestAtom);
        const key = nanoid(64);
        if (key && Object.keys(authTestRequestState).length && authTestRequestState.claims) {
            const jwt = encode(authTestRequestState.claims, key, CLAIMS_ALGORITHM);
            console.log(jwt);
            return jwt;
        }
        return;
    }
})