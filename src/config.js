const oktaAuthConfig ={
    //This is a comment
    issuer: 'https://dev-84382888.okta.com/oauth2/default',
    clientId: '0oa2vbpeyn400lev55d7',
    redirectUri: window.location.origin + '/login/callback',
};

const oktaSignInConfig = {
    baseURL: 'https://dev-84382888.okta.com',
    clientId: '0oa2vbpeyn400lev55d7',
    redirectUri: window.location.origin + '/login/callback',
    authParams: {

    }
};

export { oktaAuthConfig, oktaSignInConfig};