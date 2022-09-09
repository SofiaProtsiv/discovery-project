import style from "./gridNav.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, setPage, setOrderBy } from "../../redux/collectionSlice";

export default function GridNav() {
  const dispatch = useDispatch();

  let current_page = useSelector((state) => state.collection.current_page);
  let order_by = useSelector((state) => state.collection.order_by);

  function handlePrevious() {
    dispatch(setPage(current_page - 1));
    dispatch(fetchPhotos());
  }
  function handleNext() {
    dispatch(setPage(current_page + 1));
    dispatch(fetchPhotos());
  }
  function handleChange(e) {
    dispatch(setPage(1));
    dispatch(setOrderBy(e.target.value));
    dispatch(fetchPhotos());
  }
  return (
    <div className={style.navContainer}>
      <div className={style.buttonsWrapper}>
        <button
          disabled={current_page === 1 ? 1 : 0}
          type="button"
          onClick={handlePrevious}
        >
          &#10094;
        </button>
        <button
          disabled={current_page === 3 ? 1 : 0}
          type="button"
          onClick={handleNext}
        >
          &#10095;
        </button>
      </div>
      <p className={style.page}>{current_page}/3</p>
      <label htmlFor="sort_by">sort by</label>
      <select
        name="sort_by"
        value={order_by}
        className={style.select}
        onChange={handleChange}
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="popular">Popular</option>
      </select>
    </div>
  );
}
