import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import { store, persistor } from './Redux/ReactStore';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import theme from './CustomTheme';

import registerServiceWorker from './swDev';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker();
