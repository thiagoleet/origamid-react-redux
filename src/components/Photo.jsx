/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Photo = ({ photo }) => {
  return (
    <div className="cell">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={photo.src}
              alt={photo.title}
              style={{
                maxWidth: "100%",
                overflow: "clip",
                boxSizing: "border-box",
              }}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{photo.title}</p>
              <p className="subtitle is-6">@{photo.author}</p>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <div className="card-footer-item">Acessos: {photo.acessos}</div>

          <div className="card-footer-item">
            Comentários: {photo.total_comments}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Photo;
