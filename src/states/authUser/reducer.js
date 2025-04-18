/**
 * @TODO: Define the reducer for the authUser state
 */

import { ActionType } from './action';

// 6. Buatlah fungsi reducer bernama authUserReducer
function authUserReducer(authUser = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return action.payload.authUser;
    case ActionType.UNSET_AUTH_USER:
      return null;
    default:
      return authUser;
  }
}

export default authUserReducer;

// 7. Buka berkas /states/isPreload/action.js
