import style from "./grid.module.scss";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../redux/collectionSlice";
import SkeletonGridItem from "../gridItem/skeletonGridItem";
import Container from "../container";
import GridItem from "../gridItem";
import GridNav from "../gridNav";
import { gridPattern } from "../../assets/gridPattern";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            <div className={style.grid}>
              {photos.length > 0
                ? photos.map((photo, index) => (
                    <GridItem
                      key={index}
                      id={photo.id}
                      src={photo.urls.regular}
                      alt={photo.description}
                      userPortfolio={photo.user.portfolio_url}
                      index={index}
                    />
                  ))
                : gridPattern.map((photo, index) => (
                    <SkeletonGridItem key={index} index={index} />
                  ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
