/* eslint-disable no-unused-vars */
const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const { meta } = action;
  if (meta && meta.localStorage) {
    const { key, value } = meta.localStorage;
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  return result;
};

export default localStorageMiddleware;
