import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import unsplashAPI from "../assets/api";

const initialState = {
  photos: [],
  collectionPhotos: [],
  status: null,
  current_photo: [],
  current_page: 1,
  per_page: 5,
};

export const fetchPhotos = createAsyncThunk(
  "fetchPhotos",
  async (_, { rejectWithValue, dispatch }) => {
    const response = await unsplashAPI.get(
      `/photos?per_page=${initialState.per_page}`
    );
    dispatch(setPhotos(response.data));
  }
);
export const fetchPhotosCollection = createAsyncThunk(
  "fetchPhotosCollection",
  async (_, { rejectWithValue, dispatch }) => {
    const response = await unsplashAPI.get(
      `/search/collections?query=mountain&per_page=3}`
    );
    dispatch(setCollectionPhotos(response.data.results));
  }
);
export const fetchPhotoById = createAsyncThunk(
  "fetchPhotoById",
  async (photoID, { rejectWithValue, dispatch }) => {
    const response = await unsplashAPI.get(`/photos/${photoID}`);
    dispatch(setCurrentPhoto(response.data));
  }
);

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    setPhotos: (state, action) => {
      state.photos = action.payload;
    },
    setCollectionPhotos: (state, action) => {
      state.collectionPhotos = action.payload;
    },
    setCurrentImage: (state, action) => {
      state.current_photo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchPhotos.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.status = "fulfilled";
      });
  },
});

export const { setPhotos, setCollectionPhotos, setCurrentPhoto } =
  collectionSlice.actions;

export default collectionSlice.reducer;
