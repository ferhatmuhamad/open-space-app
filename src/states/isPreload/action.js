/**
 * @TODO: Define all the actions (creator) for the isPreLoad state
 */

import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';

// 44. tambahkan import hideloading dan show loading
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

// 8. Buat Action
function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

// 9. Buat fungsi thunk bernama asyncPreloadProcess()untuk melakukan preload aplikasi
function asyncPreloadProcess() {
  return async (dispatch) => {
    // 45. Tampilkan loading
    dispatch(showLoading());

    try {
      // Preload Process
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      dispatch(setAuthUserActionCreator(null));
    } finally {
      dispatch(setIsPreloadActionCreator(false));
    }

    // 46. Sembunyikan loading
    dispatch(hideLoading());

    // 47. Lakukan hal yang sama pada seluruh fungsi thunk yang kita miliki, ya, agar seluruh proses asynchronous dapat menampilkan loading bar.
    // 48. Pindah ke components/loading.jsx
  };
}

export { ActionType, setIsPreloadActionCreator, asyncPreloadProcess };

// 10. Pindah ke berkas states/isPreload/reducer.js
