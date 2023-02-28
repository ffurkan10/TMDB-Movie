import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../../redux/FavoriteSlice";
import { Link } from "react-router-dom";
import * as MdIcons from "react-icons/md";

const Favorite = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite);
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  const deleteFavorite = (favorite) => {
    dispatch(removeFavorite(favorite));
  };

  return (
    <div className="favorite">
      {favorites?.favorites?.length === 0 && (
        <div className="favorite__empty">
          <h1>Your favorites is empty!</h1>
          <p>To make a choice</p>
          <Link to="/">
            <button>Return to home</button>
          </Link>
        </div>
      )}
      <div className="favorite__container">
        <ul className="favorite__container__list">
          {favorites.favorites.map((favorite) => (
            <li key={favorite.id} className="favorite__container__list__card">
              <div className="favorite__container__list__card__img">
                <div className="favorite__container__list__card__img__icon">
                  <button onClick={() => deleteFavorite(favorite)}>
                    <MdIcons.MdFavorite size={"30px"} fill="red" />
                  </button>
                </div>
                <img src={IMG_API + favorite.backdrop_path} alt="" />
              </div>
              <Link to={`/detail/${favorite.id}`}>
                <div className="favorite__container__list__card__name">
                  <h3>{favorite.title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Favorite;
