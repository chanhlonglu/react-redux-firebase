import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";
import reducers from "./reducers";

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxThunk, reduxLogger)
  );

  return <Provider store={store}>{children}</Provider>;
};
