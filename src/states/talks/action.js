/**
 * @TODO: Define all the actions (creator) for the talks state
 */
import api from '../../utils/api';

// 44. menerukan dari states/isPreload/action yaitu tambahkan import hideloading dan show loading
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const ActionType = {
  RECEIVE_TALKS: 'RECEIVE_TALKS',
  ADD_TALK: 'ADD_TALK',
  TOGGLE_LIKE_TALK: 'TOGGLE_LIKE_TALK',
};

// 18. Buat action
function receiveTalksActionCreator(talks) {
  return {
    type: ActionType.RECEIVE_TALKS,
    payload: {
      talks,
    },
  };
}

function addTalkActionCreator(talk) {
  return {
    type: ActionType.ADD_TALK,
    payload: {
      talk,
    },
  };
}

function toggleLikeTalkActionCreator({ talkId, userId }) {
  return {
    type: ActionType.TOGGLE_LIKE_TALK,
    payload: {
      talkId,
      userId,
    },
  };
}

// 19. Buat fungsi thunk asyncAddTalk() dan asyncToogleLikeTalk()untuk menangani proses menambahkan talk dan menyukai/batal menyukai talk.
function asyncAddTalk({ text, replyTo = '' }) {
  return async (dispatch) => {
    // 45. Tampilkan loading
    dispatch(showLoading());
    try {
      const talk = await api.createTalk({ text, replyTo });
      dispatch(addTalkActionCreator(talk));
    } catch (error) {
      alert(error.message);
    }
    // 46. Sembunyikan loading
    dispatch(hideLoading());
  };
}

function asyncToogleLikeTalk(talkId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleLikeTalkActionCreator({ talkId, userId: authUser.id }));

    // 47. Tampilkan loading
    dispatch(showLoading());

    try {
      await api.toggleLikeTalk(talkId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeTalkActionCreator({ talkId, userId: authUser.id }));
    }

    // 48. Sembunyikan loading
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveTalksActionCreator,
  addTalkActionCreator,
  toggleLikeTalkActionCreator,
  asyncAddTalk,
  asyncToogleLikeTalk,
};

// 20. Pindah ke berkas states/talks/reducer.js
