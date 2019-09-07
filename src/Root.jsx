import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "reducers";
import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxThunk, reduxLogger)
  );

  return <Provider store={store}>{children}</Provider>;
};
