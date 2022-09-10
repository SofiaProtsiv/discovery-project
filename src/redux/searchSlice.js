import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import unsplashAPI from "../assets/api";

const initialState = {
  photos: [],
  query: "featured locations",
  status: null,
  current_page: 1,
  per_page: 6,
};

export const fetchPhotosByQuery = createAsyncThunk(
  "fetchPhotosCollection",
  async (_, { rejectWithValue, dispatch, getState }) => {
    let query = getState().search.query;
    let current_page = getState().search.current_page;
    let per_page = getState().search.per_page;

    const response = await unsplashAPI.get(
      `/search/photos?query=${query}&page=${current_page}&per_page=${per_page}`
    );
    dispatch(setPhotos(response.data.results));
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setPhotos: (state, action) => {
      state.photos = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.current_page = action.payload;
    },
    setPerPage: (state, action) => {
      state.per_page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotosByQuery.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchPhotosByQuery.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchPhotosByQuery.fulfilled, (state, action) => {
        state.status = "fulfilled";
      });
  },
});

export const { setPhotos, setQuery, setCurrentPage, setPerPage } =
  searchSlice.actions;

export default searchSlice.reducer;
