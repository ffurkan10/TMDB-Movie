import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../redux/AuthSlice";
import FavoriteSlice from "../redux/FavoriteSlice";
import MovieSlice from "../redux/MovieSlice";

export default configureStore({
  reducer: {
    data: MovieSlice,
    auth: AuthSlice,
    favorite: FavoriteSlice,
  },
});
