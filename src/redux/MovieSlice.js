import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMovie, fetchMovieDetail, fetchSimilarMovie } from "../api/Index";

const initialState = {
  data: [],
  status: "idle",
  currentPage: 1,
  selectedMovie: [],
  similarMovies: [],
};

export const fetchMovieAsync = createAsyncThunk("fetchMovie", async (page) => {
  const response = await fetchMovie(page);
  return { movie: response };
});

export const fetchMovieDetailAsync = createAsyncThunk(
  "fetchMovieDetail",
  async (id) => {
    const response = await fetchMovieDetail(id);
    return response;
  }
);

export const fetchSimilarMovieAsync = createAsyncThunk(
  "fetchSimilarMovie",
  async (id) => {
    const response = await fetchSimilarMovie(id);
    return response;
  }
);

const MovieSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovieAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMovieAsync.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchMovieAsync.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    builder.addCase(fetchMovieDetailAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMovieDetailAsync.fulfilled, (state, action) => {
      state.selectedMovie = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchMovieDetailAsync.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    builder.addCase(fetchSimilarMovieAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchSimilarMovieAsync.fulfilled, (state, action) => {
      state.similarMovies = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchSimilarMovieAsync.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default MovieSlice.reducer;

export const selectAllPosts = (state) => state.data.data;
export const selectCurrentPage = (state) => state.data.currentPage;
export const selectSelectedMovie = (state) => state.data.selectedMovie;
export const selectSelectedSimilar = (state) => state.data.similarMovies;

export const nextPage = () => (dispatch, getState) => {
  const currentPage = selectCurrentPage(getState());
  dispatch(setCurrentPage(currentPage + 1));
  dispatch(fetchMovieAsync(currentPage + 1));
};

export const prevPage = () => (dispatch, getState) => {
  const currentPage = selectCurrentPage(getState());
  if (currentPage > 1) {
    dispatch(setCurrentPage(currentPage - 1));
    dispatch(fetchMovieAsync(currentPage - 1));
  }
};

export const { setCurrentPage } = MovieSlice.actions;
