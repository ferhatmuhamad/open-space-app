/**
 * @TODO: Define all the actions (creator) that uses a combination of actions from various domain
 */
import api from '../../utils/api';
import { receiveTalksActionCreator } from '../talks/action';
import { receiveUsersActionCreator } from '../users/action';

// 44. menerukan dari states/isPreload/action yaitu tambahkan import hideloading dan show loading
import { hideLoading, showLoading } from 'react-redux-loading-bar';

// 28. Buat fungsi thunk bernama asyncPopulateUsersAndTalks()
function asyncPopulateUsersAndTalks() {
  return async (dispatch) => {
    // 45. Tampilkan loading
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const talks = await api.getAllTalks();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveTalksActionCreator(talks));
    } catch (error) {
      alert(error.message);
    }
    // 46. Sembunyikan loading
    dispatch(hideLoading());
  };
}

export { asyncPopulateUsersAndTalks };

/**
 * 29. Mulai membuat Redux store!
 * npm install @reduxjs/toolkit
 * */

// 30. mulai membuat Redux store di /states/index.js
