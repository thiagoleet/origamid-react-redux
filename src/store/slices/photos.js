import createAsyncSlice from "../util/createAsyncSlice";

const photos = createAsyncSlice({
  name: "photos",
  initialState: {
    list: [],
    pages: 0,
    infinite: true,
  },
  reducers: {
    addPhotos(state, action) {
      state.list.push(...action.payload);
      state.pages++;

      if (action.payload.length === 0) {
        state.infinite = false;
      }
    },
    removePhotos(state) {
      state.pages = 0;
      state.list = [];
      state.data = null;
      state.infinite = true;
    },
  },
  fetchConfig: (page = 1, total = 4) => ({
    url: `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=${total}&_user=0`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  }),
});

export const { addPhotos, removePhotos } = photos.actions;

export const loadNewPhotos =
  (page = 1) =>
  async (dispatch) => {
    const { payload } = await dispatch(fetchPhotos(page));
    dispatch(addPhotos(payload));
  };
export const fetchPhotos = photos.asyncAction;

export default photos.reducer;
