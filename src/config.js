const oktaAuthConfig ={
    //This is a comment
    issuer: 'https://dev-84382888.okta.com/oauth2/commemoro',
    clientId: '0oa2vbpeyn400lev55d7',
    pkce: false,
    redirectUri: window.location.origin + '/login/callback',
};

const oktaSignInConfig = {
    baseUrl: 'https://dev-84382888.okta.com',
    clientId: '0oa2vbpeyn400lev55d7',
    issuer: 'https://dev-84382888.okta.com/oauth2/commemoro',
    redirectUri: window.location.origin + '/login/callback',
    authParams: {
        pkce: false,
        baseUrl: 'https://dev-84382888.okta.com',
        issuer: 'https://dev-84382888.okta.com/oauth2/commemoro'
    }
};

export { oktaAuthConfig, oktaSignInConfig};

