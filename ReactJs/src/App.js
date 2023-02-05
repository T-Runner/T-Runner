import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../src/Routes';
import { MsalProvider } from '@azure/msal-react';

const App = (props) => {
  return (
      <BrowserRouter>
          <MsalProvider instance={props.msalInstance}>
              <Router />
          </MsalProvider>
    </BrowserRouter>
  )
};

export default App;