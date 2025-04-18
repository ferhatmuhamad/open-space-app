import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './states';

import './styles/style.css';

const root = createRoot(document.getElementById('root'));

// 33. Bungkus seluruh aplikasi dengan komponen Provider dan props store

// TODO: wrap App with store provider
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>,
);

//  34. buka berkas src/App.jsx
