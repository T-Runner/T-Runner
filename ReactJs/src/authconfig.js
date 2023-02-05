export const b2cPolicies = {
  names: {
    signUpSignIn: 'B2C_1_signupandsigninflow',
    forgotPassword: 'B2C_1_reset-password',
    editProfile: 'B2C_1_edit-profile',
  },
  authorities: {
    signUpSignIn: {
      authority: 'https://utradib2c.b2clogin.com/utradib2c.onmicrosoft.com/B2C_1_signupandsigninflow',
    },
    forgotPassword: {
      authority: 'https://utradib2c.b2clogin.com/utradib2c.onmicrosoft.com/B2C_1_reset-password',
    },
    editProfile: {
      authority: 'https://utradib2c.b2clogin.com/utradib2c.onmicrosoft.com/B2C_1_edit-profile',
    },
  },
  authorityDomain: 'utradib2c.onmicrosoft.com',
};

export const msalConfig = {
  auth: {
    clientId: '7aa1c720-d0a1-4798-a8f9-a7346a6bcd07',
    // clientId: '3d8db61b-c61e-43cb-a99e-42bb9121465b',
    authority: 'https://utradib2c.b2clogin.com/utradib2c.onmicrosoft.com/B2C_1_signupandsigninflow',
    knownAuthorities: ['https://utradib2c.b2clogin.com/utradib2c.onmicrosoft.com'],
    // redirectUri: 'http://localhost:3000/',
    // postLogoutRedirectUri: 'http://localhost:3000/',
    redirectUri: 'https://www.izibds.com',
    postLogoutRedirectUri: 'https://www.izibds.com',
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
};

export const protectedResources = {
  apiList: {
    endpoint: 'will provide later',
    scopes: {
      read: ['scope1'],
      write: ['scope2'],
    },
  },
};
export const loginRequest = {
  scopes: ['openid'],
};
