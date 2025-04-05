export interface AuthRequest {
    authUrl: string;
    realm: string;
    clientId: string;
    claimsAcrLevels?: string[];
    essential?: boolean;
    acrValues?: string;
    claims?: string;
    idpHint?: string;
    scope?: string;
}