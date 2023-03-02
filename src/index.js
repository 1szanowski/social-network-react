
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Route, Routes } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          store={store}
          dispatch={store.dispatch.bind(store)}
         
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());

reportWebVitals();
store.subscribe(()=> {
  let state = store.getState();
  rerenderEntireTree(state)});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
