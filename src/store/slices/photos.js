import createAsyncSlice from "../util/createAsyncSlice";

const photos = createAsyncSlice({
  name: "photos",
  fetchConfig: (page = 1, total = 3) => ({
    url: `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=${total}&_user=0`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  }),
});

export const fetchPhotos = photos.asyncAction;

export default photos.reducer;
