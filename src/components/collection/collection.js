import style from "./collection.module.scss";
import Button from "../button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotosCollection } from "../../redux/collectionSlice";

export default function Collection() {
  const dispatch = useDispatch();

  let photos = useSelector((state) => state.collection.photos);

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
          {photos.map((photo) => (
            <li className={style.item} key={photo.id}>
              <div className={style.descriptionWrapper}>
                <p className={style.name}>{photo.title}</p>
                <p className={style.tags}>
                  {photo.tags.map((tag) => tag.title).join(", ")}
                </p>
                <p className={style.description}>
                  See our best mountains collections and Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <p className={style.description}>
                  See our best mountains collections and Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit et dolore magna aliqua.
                </p>
                <Button className="readMoreButton" buttonName="Read More" />
              </div>
              <img
                alt="Mountain"
                className={style.image}
                src={photo.cover_photo.urls.regular}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
