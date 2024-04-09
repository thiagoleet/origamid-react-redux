/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";

const User = () => {
  const { user } = useSelector((state) => state.login);

  return (
    <div
      className={`card mt-6 ${user.data || user.loading ? "" : "is-hidden"}`}
    >
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
            {user.data && (
              <>
                <p className="title is-4" id="email">
                  {user.data.email}
                </p>
                <p className="subtitle is-6" id="user">
                  @{user.data.username}
                </p>
              </>
            )}
            {user.loading && <p>Loading...</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
