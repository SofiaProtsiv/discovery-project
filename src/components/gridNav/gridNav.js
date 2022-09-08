import style from "./gridNav.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, setPage } from "../../redux/collectionSlice";

export default function GridNav() {
  const dispatch = useDispatch();
  let current_page = useSelector((state) => state.collection.current_page);
  ~function handlePrevious() {
    dispatch(setPage(current_page - 1));
    dispatch(fetchPhotos(current_page));
  };
  function handleNext() {
    dispatch(setPage(current_page + 1));
    dispatch(fetchPhotos(current_page));
  }
  return (
    <div className={style.navContainer}>
      <div className={style.buttonsWrapper}>
        <button
          disabled={current_page === 1 ? "true" : ""}
          type="button"
          onClick={handlePrevious}
        >
          &lt;
        </button>
        <button
          disabled={current_page === 3 ? "true" : ""}
          type="button"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
      <p className={style.page}>{current_page}/3</p>
      <select className={style.select}></select>
    </div>
  );
}
