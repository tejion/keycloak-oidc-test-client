
# keycloak-oidc-test-client

keycloak-oidc-test-client is a utility designed for testing OAuth 2.0 public clients. It assists in validating correct URL configurations and inspecting the claims returned by the Keycloak Identity Provider (IdP) during the OIDC flow.

# Configuration

Step 1.  Create public client in Keycloak realm with all urls configured properly
Step 2.  Create user in Keycloak 
Step 3. Update .env file with the values.

# Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tejion/keycloak-oidc-test-client.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd keycloak-oidc-test-client
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Create a `.env` file in the root directory** and add the following environment variables:
   ```bash
   VITE_KEYCLOAK_AUTH_URL=<idp_url>
   VITE_KEYCLOAK_REALM=<keycloak_realm>
   VITE_KEYCLOAK_CLIENT_ID=<keycloak_client>
   VITE_APP_REDIRECT_URI=<app_uri>
   ```
5. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000/`
