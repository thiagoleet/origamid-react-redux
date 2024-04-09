/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, autoLogin } from "../store/slices/login";

const Login = () => {
  const [username, setUsername] = React.useState("dog");
  const [password, setPassword] = React.useState("dog");
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.login);

  async function handleSubmit(event) {
    event.preventDefault();
    await dispatch(login({ username, password }));
  }

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="card p-4">
        <header className="card-header">
          <p className="card-header-title">Login</p>
        </header>
        <div className="card-content">
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Username"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
                disabled={token.loading}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                disabled={token.loading}
              />
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <button disabled={token.loading} className={`card-footer-item`}>
            {token.loading ? "Carregando..." : "Login"}
          </button>
        </footer>
      </div>
    </form>
  );
};

export default Login;
