import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../button";
import SkeletonCollection from "./skeletonCollection";

import { fetchPhotosCollection } from "../../redux/collectionSlice";

import style from "./collection.module.scss";

export default function Collection() {
  const dispatch = useDispatch();

  let photos = useSelector((state) => state.collection.collectionPhotos);

  useEffect(() => {
    dispatch(fetchPhotosCollection());
  }, [dispatch]);

  return (
    <div className={style.section}>
      <div className={style.container}>
        <div className={style.header}>
          <h2 className={style.title}>Mountain collection</h2>
          <p className={style.subtitle}>
            See our best mountains collections and Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
        <ul className={style.list}>
          {photos.length > 0 ? (
            photos.slice(0, 3).map((photo) => (
              <li className={style.item} key={photo.cover_photo.id}>
                <div className={style.descriptionWrapper}>
                  <p className={style.name}>{photo.title}</p>
                  <p className={style.tags}>
                    {photo.tags.map((tag) => tag.title).join(",")}
                  </p>
                  <p className={style.description}>
                    See our best mountains collections and Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Nsectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <p className={style.description}>
                    See our best mountains collections and Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit et dolore magna aliqua.
                  </p>
                  <Link to={`/photos/${photo.cover_photo.id}`}>
                    <Button className="readMoreButton" buttonName="Read More" />
                  </Link>
                </div>
                <img
                  alt="Mountain"
                  className={style.image}
                  src={photo.cover_photo.urls.regular}
                />
              </li>
            ))
          ) : (
            <SkeletonCollection />
          )}
        </ul>
      </div>
    </div>
  );
}
