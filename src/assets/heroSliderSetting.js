import { useState } from "react";

export default function HeroSliderSetting() {
  const [count, setCount] = useState(0);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,

    afterChange: (current, next) => {
      setCount(current);
    },
  };
  return {
    settings: settings,
    count: count,
  };
}
