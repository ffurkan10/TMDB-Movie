import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "ccb0a8566b23ab43471cda53fed3d9e7",
    language: "en-US",
  },
});

// film listeleme
export const fetchMovie = (page) =>
  instance.get(`movie/popular?page=${page}`).then((res) => res.data.results);

// detay sayfası
export const fetchMovieDetail = (id) =>
  instance.get(`movie/${id}`).then((res) => res.data);

// benzer filmler
export const fetchSimilarMovie = (id) =>
  instance.get(`movie/${id}/similar?page=1`).then((res) => res.data.results);
