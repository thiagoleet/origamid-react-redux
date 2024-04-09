import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNewPhotos } from "../store/slices/photos";
import Photo from "./Photo";

const Dogs = () => {
  const dispatch = useDispatch();
  const { list, pages, infinite, loading } = useSelector(
    (state) => state.photos
  );

  function handleClick() {
    if (infinite) {
      dispatch(loadNewPhotos(pages + 1));
    }
  }

  React.useEffect(() => {
    dispatch(loadNewPhotos(1));
  }, [dispatch]);

  return (
    <section className="section">
      <h1 className="title">Fotos</h1>

      <div className="grid is-col-min-12">
        {list && list.map((photo) => <Photo key={photo.id} photo={photo} />)}
      </div>

      <div className="field">
        <p className="control is-expanded">
          <button
            disabled={!infinite}
            onClick={handleClick}
            className={`button is-primary ${loading ? "is-loading" : ""}`}
          >
            Carregar mais fotos
          </button>
        </p>
      </div>
    </section>
  );
};

export default Dogs;
