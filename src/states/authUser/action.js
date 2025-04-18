/**
 * @TODO: Define all the actions (creator) for the authUser state
 */
import api from '../../utils/api';

// 44. menerukan dari states/isPreload/action yaitu tambahkan import hideloading dan show loading
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

// 1. Buat Action untuk set User
function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

// 3. Buat Action ntuk logout
function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
  };
}

// 2. Buat Thunk untuk digunakan pada proses login
function asyncSetAuthUser({ id, password }) {
  return async (dispatch) => {
    // 45. Tampilkan loading
    dispatch(showLoading());
    try {
      const token = await api.login({ id, password });
      api.putAccessToken(token);

      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      alert(error.message);
    }
    // 46. Sembunyikan loading
    dispatch(hideLoading());
  };
}

//  4. Buat fungsi thunk untuk menangani proses logout
function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    api.putAccessToken('');
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};

// 5. Pindah ke berkas states/authUser/reducer.js
