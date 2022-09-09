import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotosByQuery, setCurrentPage } from "../redux/searchSlice";

export default function Settings() {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  let current_page = useSelector((state) => state.search.current_page);
  console.log(current_page);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,

    afterChange: () => {
      if (count === 3) {
        dispatch(setCurrentPage(current_page + 1));
        dispatch(fetchPhotosByQuery());
      }
    },
    beforeChange: (current, next) => {
      if (current_page === 8) {
        dispatch(setCurrentPage(1));
        dispatch(fetchPhotosByQuery());
      }
      setCount(next);
    },

    responsive: [
      {
        breakpoint: 550,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: true,
          autoplay: true,
          autoplaySpeed: 5000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          lazyLoad: true,
          autoplay: true,
          autoplaySpeed: 5000,
          pauseOnHover: true,
        },
      },
    ],
  };
  return settings;
}
