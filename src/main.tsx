import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { router } from "./app/router";
import store from "./app/store";

import "./index.css";
import { initializeAuth } from "./features/auth/slice/authSlice";

store.dispatch(initializeAuth());
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
