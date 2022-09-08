import style from "./gridNav.module.scss";

export default function GridNav() {
  return (
    <div className={style.navContainer}>
      <div className={style.buttonsWrapper}>
        <button type="button">&lt;</button>
        <button type="button">&gt;</button>
      </div>
      <p className={style.page}>1/3</p>
      <select className={style.select}></select>
    </div>
  );
}
