import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../store/slices/login";

const Header = () => {
  const { user } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <span className="navbar-item">Dogs Mini</span>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            {user.data && (
              <div className="buttons">
                <a
                  className="button is-light"
                  onClick={() => dispatch(userLogout())}
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
