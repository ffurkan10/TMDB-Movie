import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { fetchMovieAsync } from "./redux/MovieSlice";
import store from "./store/Store";

store.dispatch(fetchMovieAsync());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
