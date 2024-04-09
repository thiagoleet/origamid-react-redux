/* eslint-disable react/prop-types */
const Loading = ({ isLoading }) => {
  return (
    <progress
      className={`progress is-small is-primary ${
        isLoading ? "" : "is-invisible"
      }`}
      max="100"
    ></progress>
  );
};

export default Loading;
