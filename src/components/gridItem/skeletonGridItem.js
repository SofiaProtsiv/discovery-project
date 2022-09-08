import style from "./gridItem.module.scss";
import Skeleton from "@mui/material/Skeleton";

import ImageListItem from "@mui/material/ImageListItem";
import { gridPattern } from "../../assets/gridPattern";

export default function SkeletonGridItem({ src, id, index }) {
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
    >
      <Skeleton
        sx={{ bgcolor: "grey.700" }}
        variant="rectangular"
        height="100%"
        animation="wave"
      />
    </ImageListItem>
  );
}
