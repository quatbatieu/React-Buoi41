// File setup để khởi chạy ứng dụng React

import React from "react";
import ReactDOM from "react-dom/client";

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

// import store
import store from "./store";

// import Provider
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();