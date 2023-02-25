import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const FavoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : [],
  },
  reducers: {
    addFavorite(state, action) {
      const favoriteMovie = state.favorites.find(
        (movie) => movie.id === action.payload.id
      );
      if (favoriteMovie) {
        return;
      } else {
        state.favorites.push({ ...action.payload });
        toast.success(`Added to favorites`);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFavorite(state, action) {
      const filterFavorite = state.favorites.filter(
        (movie) => movie.id !== action.payload.id
      );
      state.favorites = filterFavorite;
      toast.success(`Removed from favorites`);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { addFavorite, removeFavorite } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
