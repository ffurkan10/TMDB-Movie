import React from "react";
import { useDispatch } from "react-redux";
import { nextPage, prevPage } from "../../redux/MovieSlice";
import { GrNext, GrPrevious } from "react-icons/gr";

const Paginations = () => {
  const dispatch = useDispatch();

  const handlePageNext = () => {
    dispatch(nextPage());
  };

  const handlePagePrev = () => {
    dispatch(prevPage());
  };

  return (
    <div className="home__container__pagination">
      <button onClick={handlePagePrev}>
        <GrPrevious />
        <span>Previous</span>
      </button>

      <button onClick={handlePageNext}>
        <span>Next</span>
        <GrNext />
      </button>
    </div>
  );
};

export default Paginations;
