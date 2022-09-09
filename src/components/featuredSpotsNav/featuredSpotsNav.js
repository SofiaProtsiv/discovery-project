import style from "./featuredSpotsNav.module.scss";

import { useSelector } from "react-redux";

export default function FeaturedSpotsNav() {
  let current_page = useSelector((state) => state.search.current_page);

  return (
    <div className={style.navContainer}>
      <p className={style.title}>Outdoors Edition</p>
      <span className={style.separatorLong}></span>
      <p className={style.page}>{current_page}/8</p>
      <span className={style.separatorShort}></span>
    </div>
  );
}
