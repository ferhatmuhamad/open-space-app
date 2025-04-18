/**
 * @TODO: Define reducer for the isPreLoad state
 */
import { ActionType } from './action';

// 11. Buatlah fungsi reducer bernama authUserReducer
function isPreloadReducer(isPreload = true, action = {}) {
  switch (action.type) {
    case ActionType.SET_IS_PRELOAD:
      return action.payload.isPreload;
    default:
      return isPreload;
  }
}

export default isPreloadReducer;

// 12. Buka berkas /states/users/action.js
