import "./App.css";
import { useSelector } from "react-redux";

import Login from "./components/Login";
import User from "./components/User";
import Header from "./components/Header";
import Dogs from "./components/Dogs";
import Loading from "./components/Loading";

function App() {
  const { token, user } = useSelector((state) => state.login);
  const { loading } = useSelector((state) => state.photos);

  return (
    <div className="container">
      <Header />
      <div className="my-2">
        <Loading isLoading={token.loading || user.loading || loading}></Loading>
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
      {user.data && (
        <div className="my-4">
          <Dogs />
        </div>
      )}
    </div>
  );
}

export default App;
