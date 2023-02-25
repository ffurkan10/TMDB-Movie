import React from "react";
import { Link } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../redux/FavoriteSlice";

const MovieList = ({ list }) => {
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const dispatch = useDispatch();

  const favorite = (list) => {
    dispatch(addFavorite(list));
  };

  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "yellow";
    } else {
      return "red";
    }
  };

  return (
    <li className="home__container__lists__list">
      <div className="home__container__lists__list__icon">
        <button onClick={() => favorite(list)}>
          <MdIcons.MdFavorite size={"30px"} fill="#fff" />
        </button>
      </div>
      <div className="home__container__lists__list__img">
        <img src={IMG_API + list.backdrop_path} alt="" />
      </div>
      <Link to={`/detail/${list.id}`}>
        <div className="home__container__lists__list__content">
          <h3>{list?.title}</h3>
          <span className={`tag ${setVoteClass(list.vote_average)}`}>
            {list.vote_average}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default MovieList;
