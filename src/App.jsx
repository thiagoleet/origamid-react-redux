import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./store/slices/login";
import Login from "./components/Login";
import Contador from "./components/Contador";

function App() {
  const [username, setUsername] = React.useState("dog");
  const [password, setPassword] = React.useState("dog");
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.login);

  async function handleSubmit(event) {
    event.preventDefault();
    await dispatch(login({ username, password }));
  }

  return (
    <div className="container">
      <div className="grid">
        <div className="cell py-2 px-2">
          <Login
            handleSubmit={handleSubmit}
            password={password}
            setPassword={setPassword}
            setUsername={setUsername}
            token={token}
            user={user}
            username={username}
          />
        </div>
        <div className="cellpy-2 px-2">
          <Contador />
        </div>
      </div>
    </div>
  );
}

export default App;
