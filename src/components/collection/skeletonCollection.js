import style from "./collection.module.scss";
import Skeleton from "@mui/material/Skeleton";

export default function SkeletonCollection() {
  return [1, 2, 3].map((photo, index) => (
    <li className={style.item} key={index}>
      <div className={style.descriptionWrapper}>
        <p className={style.name}>
          <Skeleton
            sx={{ bgcolor: "grey.700" }}
            variant="rectangular"
            width={210}
            animation="wave"
          />
        </p>
        <p className={style.tags}>
          <Skeleton
            sx={{ bgcolor: "grey.700" }}
            variant="rectangular"
            width={410}
            animation="wave"
          />
        </p>
        <p className={style.description}>
          <Skeleton
            sx={{ bgcolor: "grey.700" }}
            variant="rectangular"
            width={600}
            height={80}
            animation="wave"
          />
        </p>
        <p className={style.description}>
          <Skeleton
            sx={{ bgcolor: "grey.700" }}
            variant="rectangular"
            width={600}
            height={50}
            animation="wave"
          />
        </p>
        <Skeleton
          sx={{ bgcolor: "grey.700", borderRadius: "50px" }}
          variant="rectangular"
          width={120}
          height={40}
          animation="wave"
        />
      </div>
      <Skeleton
        sx={{ bgcolor: "grey.700" }}
        variant="rectangular"
        width={300}
        height={300}
        animation="wave"
      />
    </li>
  ));
}
