import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store'
import './globals.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
//import { GoogleOAuthProvider } from '@react-oauth/google'

import { PublicClientApplication, EventType } from "@azure/msal-browser";
import { msalConfig } from "./authconfig";

let persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById('root'));

const msalInstance = new PublicClientApplication(msalConfig);
if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
    msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
}

msalInstance.addEventCallback((event) => {
    if (
        (event.eventType === EventType.LOGIN_SUCCESS ||
            event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS ||
            event.eventType === EventType.SSO_SILENT_SUCCESS) &&
        event.payload.account
    ) {
        msalInstance.setActiveAccount(event.payload.account);
    }
});


root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App msalInstance={msalInstance}/>
        </PersistGate>
    </Provider>
);

