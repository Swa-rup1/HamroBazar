import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import App from './App';

import { RouterProvider } from "react-router-dom";
import { MainRoute } from "./Components/Router/MainRouter";
import { Provider } from "react-redux";
import Store, { persistor } from "./Redux/Store";
import { PersistGate } from "redux-persist/integration/react";

import { AppContextProvider } from "./Components/ContextApi";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={"...loading"}>
      <Provider store={Store}>
        <PersistGate loading={"loading ..."} persistor={persistor}>
          <AppContextProvider>
            <RouterProvider router={MainRoute} />
          </AppContextProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
