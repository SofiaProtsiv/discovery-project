import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotosCollection } from "../../redux/collectionSlice";

import Slider from "react-slick";

import Button from "../button";
import HeroNav from "../heroNav/heroNav";
import HeroSliderSetting from "../../assets/heroSliderSetting";

import style from "./hero.module.scss";

function Hero() {
  const dispatch = useDispatch();

  let photos = useSelector((state) => state.collection.collectionPhotos);

  useEffect(() => {
    dispatch(fetchPhotosCollection());
  }, [dispatch]);

  const { count, settings } = HeroSliderSetting();

  const sliderRef = useRef();

  return (
    <section className={style.section}>
      <Slider {...settings} ref={sliderRef}>
        {photos.slice(1, 9).map(({ cover_photo, id, title }) => (
          <li className={style.item} key={id}>
            <img
              alt={
                cover_photo.alt_description
                  ? cover_photo.alt_description
                  : "pic"
              }
              src={cover_photo.urls.regular}
              className={style.image}
            />
            <div className={style.wrapper}>
              <h2 className={style.title}>{title}</h2>
              <p className={style.subtitle}>
                Lorem ipsum dolor sit amet sit, consectetur adipiscing elit, sed
                do eiusmod. Lorem ipsum dolor sit amet sit, consectetur
                adipiscing elit, sed do eiusmod.
              </p>
              <Button buttonName="read more" />
            </div>
          </li>
        ))}
      </Slider>
      <HeroNav count={count} sliderRef={sliderRef} />
    </section>
  );
}
export default Hero;
