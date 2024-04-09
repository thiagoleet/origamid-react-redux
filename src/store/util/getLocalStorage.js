function getLocalStorage(key, initial) {
  try {
    return JSON.parse(window.localStorage.getItem(key)) || initial;
  } catch (error) {
    console.error("Error getting data from localStorage", error);
    return initial;
  }
}

export default getLocalStorage;
