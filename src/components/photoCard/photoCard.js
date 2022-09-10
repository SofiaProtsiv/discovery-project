import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchPhotoById } from "../../redux/collectionSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import style from "./photoCard.module.scss";

export default function PhotoCard() {
  const dispatch = useDispatch();
  const { photoID } = useParams();

  useEffect(() => {
    dispatch(fetchPhotoById(photoID));
  }, [photoID, dispatch]);

  return <Link to={`/breeds/${photoID}`}>"hello"</Link>;
}
