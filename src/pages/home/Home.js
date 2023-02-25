import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";
import MovieList from "../../components/movieList/MovieList";
import Paginations from "../../components/paginations/Paginations";
import { fetchMovie, selectAllPosts } from "../../redux/MovieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movie = useSelector(selectAllPosts);
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovie());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "failed") {
    return <h1>{error}</h1>;
  }

  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : (
        <div className="home">
          <div className="home__container">
            <ul className="home__container__lists">
              {movie?.movie?.map((list) => (
                <MovieList key={list.id} list={list} />
              ))}
            </ul>
            <Paginations />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
