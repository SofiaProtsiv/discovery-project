import style from "./grid.module.scss";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../redux/collectionSlice";
import ImageList from "@mui/material/ImageList";
import SkeletonGridItem from "../gridItem/skeletonGridItem";
import Container from "../container";
import GridItem from "../gridItem";
import GridNav from "../gridNav";
import { gridPattern } from "../../assets/gridPattern";

export default function Grid() {
  const dispatch = useDispatch();

  let photos = useSelector((state) => state.collection.photos);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return (
    <section className={style.section}>
      <Container>
        <div className={style.wrapperConatiner}>
          <div className={style.wrapper}>
            <h2 className={style.title}>Editor's Pick</h2>
            <p className={style.subtitle}>
              Our picks, just for you elit consectetur elit, sed do eiusmod
              tempor.
            </p>
          </div>
          <div className={style.wrapperGrid}>
            <GridNav />
            <ImageList variant="quilted" cols={3} rowHeight={250} gap={50}>
              {photos.length > 0
                ? photos.map((photo, index) => (
                    <GridItem
                      key={index}
                      id={photo.id}
                      src={photo.urls.regular}
                      alt={photo.description}
                      userName={photo.user.name}
                      userBio={photo.user.bio}
                      index={index}
                    />
                  ))
                : gridPattern.map((photo, index) => (
                    <SkeletonGridItem key={index} index={index} />
                  ))}
            </ImageList>
          </div>
        </div>
      </Container>
    </section>
  );
}
