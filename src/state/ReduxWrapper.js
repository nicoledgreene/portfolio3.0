import { composeWithDevTools } from "redux-devtools-extension"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./reducers"
import React from "react"

const store = createStore(rootReducer, composeWithDevTools())

export default ({ element }) => <Provider store={store}>{element}</Provider>
