import style from "./gridItem.module.scss";
import ImageListItem from "@mui/material/ImageListItem";
import { gridPattern } from "../../assets/gridPattern";
import { useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";

export default function GridItem({ src, alt, userName, userBio, index }) {
  let status = useSelector((state) => state.collection.status);

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
      {status === "pending" ? (
        <Skeleton
          sx={{ bgcolor: "grey.700" }}
          variant="rectangular"
          height="100%"
          animation="wave"
        />
      ) : (
        <img alt={alt} src={src} className={style.image} />
      )}

      <div className={style.overlay}>
        <div className={style.textWrapper}>
          <p className={style.userName}>{userName}</p>
        </div>
      </div>
    </ImageListItem>
  );
}
