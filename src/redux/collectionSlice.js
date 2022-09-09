import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import unsplashAPI from "../assets/api";

const initialState = {
  photos: [],
  collectionPhotos: [],
  status: null,
  current_photo: [],
  current_page: 1,
  order_by: "latest",
  per_page: 5,
};

export const fetchPhotos = createAsyncThunk(
  "fetchPhotos",
  async (_, { rejectWithValue, dispatch, getState }) => {
    let page = getState().collection.current_page;
    let order_by = getState().collection.order_by;
    const response = await unsplashAPI.get(
      `/photos?per_page=${initialState.per_page}&page=${page}&order_by=${order_by}`
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
export const fetchPhotosByQuery = createAsyncThunk(
  "fetchPhotosCollection",
  async (query, page, per_page, { rejectWithValue, dispatch }) => {
    const response = await unsplashAPI.get(
      `/search/photos?query=${query}&per_page=${per_page}&page=${page}}`
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
    setOrderBy: (state, action) => {
      state.order_by = action.payload;
    },
    setPage: (state, action) => {
      state.current_page = action.payload;
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

export const {
  setPhotos,
  setCollectionPhotos,
  setOrderBy,
  setCurrentPhoto,
  setPage,
} = collectionSlice.actions;

export default collectionSlice.reducer;
