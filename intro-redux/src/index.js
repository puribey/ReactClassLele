import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import MoverProductos from "./state/reducer";

const middlewares = [];

if (window.devToolsExtension) {
  middlewares.push(window.devToolsExtension());
}

const store = createStore(MoverProductos, compose(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);