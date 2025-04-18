/**
 * @TODO: Define all the actions (creator) for the users state
 */
import api from '../../utils/api';

// 44. menerukan dari states/isPreload/action yaitu tambahkan import hideloading dan show loading
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

// 13. Buat Action
function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

// 14. Buat fungsi thunk untuk menangani proses register pengguna dengan nama
function asyncRegisterUser({ id, name, password }) {
  return async () => {
    // 45. Tampilkan loading
    dispatch(showLoading());

    try {
      await api.register({ id, name, password });
    } catch (error) {
      alert(error.message);
    }

    // 46. Sembunyikan loading
    dispatch(hideLoading());
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };

/**
 * kita tidak membuat fungsi thunk untuk proses receive users karena akan dibuat pada berkas lain.
 * Proses receive users akan digabung dengan proses receive talks dengan membuat fungsi thunk asyncPopulateUsersAndTalks()
 * sehingga tidak ideal bila fungsi thunk berada di action users ataupun talk.
 * */

// 15. Pindah ke berkas states/users/reducer.js
