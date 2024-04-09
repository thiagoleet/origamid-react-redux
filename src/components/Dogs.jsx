import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../store/slices/photos";
import Photo from "./Photo";

const Dogs = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.photos);

  React.useEffect(() => {
    dispatch(fetchPhotos(1));
  }, [dispatch]);

  return (
    <section className="section">
      <h1 className="title">Fotos</h1>

      <div className="grid">
        {data && data.map((photo) => <Photo key={photo.id} photo={photo} />)}
      </div>
    </section>
  );
};

export default Dogs;
