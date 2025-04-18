/**
 * @TODO: Create Redux store
 */
import { configureStore, createStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import talkDetailReducer from './talkDetail/reducer';
import talksReducer from './talks/reducer';
import usersReducer from './users/reducer';

// 41. Tambahkan 1 library baru
import { loadingBarReducer } from 'react-redux-loading-bar';

// 31. Buat store Redux dengan nama store
const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    talkDetail: talkDetailReducer,
    talks: talksReducer,
    users: usersReducer,

    // 42. Tambahkan loadingBarReducer ke dalam reducer
    loadingBar: loadingBarReducer,
    // 43. Pindah ke states/isPreload/action.js
  },
});

export default store;

/**
 * Untuk menggunakan Redux store pada React component,
 * kita membutuhkan library react-redux sebagai penghubung antara keduanya.
 * Pasang library react-redux melalui NPM dengan perintah berikut.
 * npm install react-redux
 */

// 32. Bungkus seluruh aplikasi dengan komponen Provider. Bukalah berkas src/index.jsx
