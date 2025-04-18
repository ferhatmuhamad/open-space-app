/**
 * @TODO: Define all the actions (creator) for the talkDetail state
 */
import api from '../../utils/api';

// 44. menerukan dari states/isPreload/action yaitu tambahkan import hideloading dan show loading
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const ActionType = {
  RECEIVE_TALK_DETAIL: 'RECEIVE_TALK_DETAIL',
  CLEAR_TALK_DETAIL: 'CLEAR_TALK_DETAIL',
  TOGGLE_LIKE_TALK_DETAIL: 'TOGGLE_LIKE_TALK_DETAIL',
};

// 23. Buat action
function receiveTalkDetailActionCreator(talkDetail) {
  return {
    type: ActionType.RECEIVE_TALK_DETAIL,
    payload: {
      talkDetail,
    },
  };
}

function clearTalkDetailActionCreator() {
  return {
    type: ActionType.CLEAR_TALK_DETAIL,
  };
}

function toggleLikeTalkDetailActionCreator({ userId }) {
  return {
    type: ActionType.TOGGLE_LIKE_TALK_DETAIL,
    payload: {
      userId,
    },
  };
}

// 24. buat fungsi thunk bernama asyncReceiveTalkDetail() dan asyncToogleLikeTalkDetail() untuk menangani proses asynchronous untuk mendapatkan dan menyukai talkDetail
function asyncReceiveTalkDetail(talkId) {
  return async (dispatch) => {
    // 45. Tampilkan loading
    dispatch(showLoading());
    try {
      const talkDetail = await api.getTalkDetail(talkId);
      dispatch(receiveTalkDetailActionCreator(talkDetail));
    } catch (error) {
      alert(error.message);
    }
    // 46. Sembunyikan loading
    dispatch(hideLoading());
  };
}

function asyncToogleLikeTalkDetail() {
  return async (dispatch, getState) => {
    const { authUser, talkDetail } = getState();
    dispatch(toggleLikeTalkDetailActionCreator(authUser.id));

    // 47. Tampilkan loading
    dispatch(showLoading());

    try {
      await api.toggleLikeTalk(talkDetail.id);
    } catch (error) {
      alert(error.message);
    }

    // 48. Sembunyikan loading
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveTalkDetailActionCreator,
  clearTalkDetailActionCreator,
  toggleLikeTalkDetailActionCreator,
  asyncReceiveTalkDetail,
  asyncToogleLikeTalkDetail,
};

// 25. Pindah ke berkas states/talkDetail/reducer.js
