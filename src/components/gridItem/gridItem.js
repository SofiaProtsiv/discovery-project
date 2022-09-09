import style from "./gridItem.module.scss";
import ImageListItem from "@mui/material/ImageListItem";
import { gridPattern } from "../../assets/gridPattern";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
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
        <motion.img
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -150, opacity: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          alt={alt}
          src={src}
          className={style.image}
        />
      )}

      <div className={style.overlay}>
        <div className={style.textWrapper}>
          <p className={style.userName}>{userName}</p>
        </div>
      </div>
    </ImageListItem>
  );
}
