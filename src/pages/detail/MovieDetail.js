import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import {
  fetchMovieDetailAsync,
  fetchSimilarMovieAsync,
  selectSelectedMovie,
  selectSelectedSimilar,
} from "../../redux/MovieSlice";
import { Link } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.data.status);
  const detail = useSelector(selectSelectedMovie);
  const similar = useSelector(selectSelectedSimilar);
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    dispatch(fetchMovieDetailAsync(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchSimilarMovieAsync(id));
  }, [dispatch, id]);

  if (status === "loading") {
    return <Loading />;
  }

  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "greenvote";
    } else if (vote >= 6) {
      return "yellowvote";
    } else {
      return "redvote";
    }
  };

  return (
    <div className="detail">
      {[detail].map((detail) => (
        <div key={detail.id} className="detail__container">
          <div className="detail__container__left">
            <div className="detail__container__left__image">
              <img src={IMG_API + detail.backdrop_path} alt="" />
            </div>
          </div>
          <div className="detail__container__right">
            <div className="detail__container__right__title">
              <h1>{detail.title}</h1>
              <span className={`tag ${setVoteClass(detail.vote_average)}`}>
                {detail.vote_average?.toFixed(1)}
              </span>
            </div>
            <div className="detail__container__right__feature">
              <p>{detail.overview}</p>
              <a href={detail.homepage}>Click for original website</a>
            </div>
          </div>
        </div>
      ))}

      <div className="detail__similar">
        <div className="detail__similar__header">
          <h2>Similar Movies</h2>
        </div>
        <ul className="detail__similar__list">
          {similar.map((similar) => (
            <Link to={`/detail/${similar.id}`} key={similar.id}>
              <li className="detail__similar__list__card">
                <div className="detail__similar__list__card__img">
                  <img src={IMG_API + similar.backdrop_path} alt="" />
                </div>
                <div className="detail__similar__list__card__name">
                  {" "}
                  <p>{similar.title}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetail;
