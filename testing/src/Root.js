import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";

// Allows us to create a Provider tag with a store
// and on-the-fly pass in any component as a child
export default props => {
  return (
    <Provider store={createStore(reducers, {})}>{props.children}</Provider>
  );
};