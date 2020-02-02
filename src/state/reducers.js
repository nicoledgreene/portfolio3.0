import { combineReducers } from "redux"
import { TOGGLE_THEME } from "./actions"

const initialState = {
  isDarkMode: false,
}

const reducer = (state = initialState, action) => {
    if(action.type===TOGGLE_THEME) {
      return Object.assign({
        ...state,
        isDarkMode: !state.isDarkMode
      })
    } else {
      return Object.assign({}, state);
    }
}

export default combineReducers({ reducer })