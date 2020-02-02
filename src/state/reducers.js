import { combineReducers } from "redux"
import { TOGGLE_THEME } from "./actions"

const initialState = {
  isDarkMode: false,
}

const theme = (state = initialState, action) => {
    if(action.type===TOGGLE_THEME) {
      return {
        ...state,
        isDarkMode: !state.isDarkMode
      }
    } else {
      return state;
    }
}

export default combineReducers({ theme })