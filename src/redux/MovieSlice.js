import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
  currentPage: 1,
  selectedMovie: [],
  similarMovies: [],
};

export const fetchMovie = createAsyncThunk("fetchMovie", async (page) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=ccb0a8566b23ab43471cda53fed3d9e7&language=en-US&page=${page}`
  );
  return {
    movie: response.data.results,
  };
});

export const fetchMovieDetail = createAsyncThunk(
  "fetchMovieDetail",
  async (id) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ccb0a8566b23ab43471cda53fed3d9e7&language=en-US`
    );
    return response.data;
  }
);

export const fetchSimilarMovie = createAsyncThunk(
  "fetchSimilarMovie",
  async (id) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=ccb0a8566b23ab43471cda53fed3d9e7&language=en-US&page=1`
    );
    console.log(response.data.results);
    return response.data.results;
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
    builder.addCase(fetchMovie.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchMovie.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    builder.addCase(fetchMovieDetail.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMovieDetail.fulfilled, (state, action) => {
      state.selectedMovie = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchMovieDetail.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    builder.addCase(fetchSimilarMovie.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchSimilarMovie.fulfilled, (state, action) => {
      state.similarMovies = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchSimilarMovie.rejected, (state, action) => {
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
  dispatch(fetchMovie(currentPage + 1));
};

export const prevPage = () => (dispatch, getState) => {
  const currentPage = selectCurrentPage(getState());
  if (currentPage > 1) {
    dispatch(setCurrentPage(currentPage - 1));
    dispatch(fetchMovie(currentPage - 1));
  }
};

export const { setCurrentPage } = MovieSlice.actions;
