import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Routes } from "../routes";
import BasicApiSettings from "../BasicApiSettings";

const App = () => {
  //set up interceptors
  BasicApiSettings();

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
