import style from "./heroNav.module.scss";

export default function HeroNav({ count, sliderRef }) {
  return (
    <div className={style.wrapper}>
      <div className={style.navContainer}>
        <div className={style.buttonsWrapper}>
          <button
            onClick={() => {
              sliderRef.current.slickPrev();
            }}
          >
            &#10094;
          </button>
          <button
            onClick={() => {
              sliderRef.current.slickNext();
            }}
          >
            &#10095;
          </button>
        </div>
        <p className={style.title}>Outdoors Edition</p>
        <span className={style.separatorLong}></span>
        <p className={style.page}>{count + 1}/8</p>
        <span className={style.separatorShort}></span>
      </div>
    </div>
  );
}
