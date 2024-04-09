import React from "react";
import "./App.css";
import { useSelector } from "react-redux";

import Login from "./components/Login";
import User from "./components/User";
import Header from "./components/Header";

function App() {
  const { token, user } = useSelector((state) => state.login);

  return (
    <div className="container">
      <Header />
      <div className="my-2">
        <progress
          className={`progress is-small is-primary ${
            token.loading || user.loading ? "" : "is-invisible"
          }`}
          max="100"
        ></progress>
      </div>
      <div
        className={`my-4 ${
          token?.data?.token !== undefined ? "is-hidden" : ""
        }`}
      >
        <Login />
      </div>
      <div className="my-4">
        <User />
      </div>
    </div>
  );
}

export default App;
