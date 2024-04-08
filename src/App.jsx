import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./store/slices/login";

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
      {user.data && (
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src="https://bulma.io/assets/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4" id="email">
                  {user.data.email}
                </p>
                <p className="subtitle is-6" id="user">
                  @{user.data.username}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {!user.data && (
        <form onSubmit={handleSubmit}>
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

          <div className="field is-grouped">
            <div className="control">
              <button
                disabled={token.loading}
                className={`button is-link ${
                  token.loading ? "is-loading" : ""
                }`}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default App;
