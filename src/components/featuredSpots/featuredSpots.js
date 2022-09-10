import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import style from "./featuredSpots.module.scss";

import Container from "../container";
import FeaturedSpotsNav from "../featuredSpotsNav";
import Settings from "../../assets/sliderSettings";
import { fetchPhotosByQuery } from "../../redux/searchSlice";

import Slider from "react-slick";

export default function FeaturedSpots() {
  const dispatch = useDispatch();

  let photos = useSelector((state) => state.search.photos);
  let settings = Settings();

  useEffect(() => {
    dispatch(fetchPhotosByQuery());
  }, [dispatch]);

  return (
    <section className={style.section}>
      <Container>
        <div className={style.wrapperConatiner}>
          <div className={style.wrapper}>
            <h2 className={style.title}>Featured Spots</h2>
            <p className={style.subtitle}>
              Some of featured spot that you might want to visit before you die.
            </p>
            <Link to="/photos">
              <button className={style.buttonMore}>View All</button>
            </Link>
          </div>
          <div className={style.wrapperList}>
            <ul className={style.list}>
              <Slider {...settings}>
                {photos.map(({ alt_description, urls, user, id }) => (
                  <li className={style.item} key={id}>
                    <img
                      alt={alt_description ? alt_description : "pic"}
                      src={urls.regular}
                      className={style.image}
                    />
                    <h3 className={style.name}>{user.name}</h3>
                    <p className={style.bio}>
                      Lorem ipsum dolor sit amet sit, consectetur adipiscing
                      elit, sed do eiusmod.
                    </p>

                    <Link to={`/photos/${id}`}>
                      <button className={style.button} type="button">
                        read more
                      </button>
                    </Link>
                  </li>
                ))}
              </Slider>
            </ul>
            <FeaturedSpotsNav />
          </div>
        </div>
        <div></div>
      </Container>
    </section>
  );
}
