import style from "./gridItem.module.scss";

import ImageListItem from "@mui/material/ImageListItem";
import { gridPattern } from "../../assets/gridPattern";
export default function GridItem({ src, alt, userName, userBio, index }) {
  return (
    <ImageListItem
      cols={
        gridPattern[
          index - Math.floor(index / gridPattern.length) * gridPattern.length
        ].cols
      }
      rows={
        gridPattern[
          index - Math.floor(index / gridPattern.length) * gridPattern.length
        ].rows
      }
      className={style.gridItem}
    >
      <img alt={alt} src={src} className={style.image} />
      <div className={style.overlay}>
        <div class={style.textWrapper}>
          <p className={style.userName}>{userName}</p>
          <p className={style.userBio}>
            {userBio.length > 60 ? userBio.slice(0, 60) + "..." : userBio}
          </p>
        </div>
      </div>
    </ImageListItem>
  );
}
